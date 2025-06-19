"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}


const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Ad en az 2 karakter olmalıdır")
    .max(50, "Ad en fazla 50 karakter olabilir")
    .required("Ad alanı zorunludur"),
  lastName: Yup.string()
    .min(2, "Soyad en az 2 karakter olmalıdır")
    .max(50, "Soyad en fazla 50 karakter olabilir")
    .required("Soyad alanı zorunludur"),
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta alanı zorunludur"),
  subject: Yup.string()
    .min(5, "Konu en az 5 karakter olmalıdır")
    .max(100, "Konu en fazla 100 karakter olabilir")
    .required("Konu alanı zorunludur"),
  message: Yup.string()
    .min(10, "Mesaj en az 10 karakter olmalıdır")
    .max(1000, "Mesaj en fazla 1000 karakter olabilir")
    .required("Mesaj alanı zorunludur"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });


  useEffect(() => {
    emailjs.init("w6hiVX0dlZjPDkTes");
  }, []);

  const handleSubmit = async (values: FormData, { resetForm }: any) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Basit parametre yapısı - EmailJS'in varsayılan template'i için
      const templateParams = {
        to_name: "Miara Team",
        from_name: `${values.firstName} ${values.lastName}`,
        from_email: values.email,
        subject: values.subject,
        message: values.message,
        reply_to: values.email,
      };

      console.log("Gönderilen parametreler:", templateParams);

      const result = await emailjs.send(
        "service_4q58mec",
        "template_2eza0ei",
        templateParams
      );

      console.log("EmailJS sonucu:", result);

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "Mesajınız başarıyla gönderildi! En kısa sürede size geri dönüş yapacağız.",
        });
        resetForm();
      } else {
        throw new Error(`E-posta gönderilemedi. Status: ${result.status}`);
      }
    } catch (error: any) {
      console.error("E-posta gönderme hatası:", error);
      
      // Hata detaylarını logla
      if (error.text) {
        console.error("Hata detayı:", error.text);
      }
      
      // Daha detaylı hata mesajı
      let errorMessage = "Mesaj gönderilirken bir hata oluştu.";
      
      if (error.status === 412) {
        errorMessage = "Template parametreleri uyumsuz. Lütfen EmailJS template'inizi kontrol edin.";
      } else if (error.status === 400) {
        errorMessage = "Geçersiz parametreler. Lütfen formu tekrar doldurun.";
      } else if (error.status === 401) {
        errorMessage = "EmailJS kimlik doğrulama hatası. Lütfen API anahtarlarınızı kontrol edin.";
      }
      
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const initialValues: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-light text-[var(--color-text-primary)] mb-8">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-[var(--color-text-tertiary)] mb-8 leading-relaxed">
              Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize
              ulaşabilirsiniz. Ekibimiz en kısa sürede size geri dönüş
              yapacaktır.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--color-bg-black)] text-[var(--color-text-white)] p-3 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)]">E-posta</h3>
                  <p className="text-[var(--color-text-tertiary)]">ravza019@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[var(--color-bg-black)] text-[var(--color-text-white)] p-3 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)]">Telefon</h3>
                  <p className="text-[var(--color-text-tertiary)]">+90 999 999 9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[var(--color-bg-black)] text-[var(--color-text-white)] p-3 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text-primary)]">Adres</h3>
                  <p className="text-[var(--color-text-tertiary)]">Bafra, Samsun, Türkiye</p>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-[var(--color-bg-secondary)] p-8 rounded-lg">
            <Formik
              initialValues={initialValues}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="space-y-6">

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${submitStatus.type === "success"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-red-100 text-red-700 border border-red-200"
                        }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                      >
                        Ad
                      </label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[var(--color-blue-accent)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] ${errors.firstName && touched.firstName
                            ? "border-red-500"
                            : "border-[var(--color-border-primary)]"
                          }`}
                        placeholder="Adınız"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="p"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                      >
                        Soyad
                      </label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[var(--color-blue-accent)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] ${errors.lastName && touched.lastName
                            ? "border-red-500"
                            : "border-[var(--color-border-primary)]"
                          }`}
                        placeholder="Soyadınız"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="p"
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                    >
                      E-posta
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[var(--color-blue-accent)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] ${errors.email && touched.email
                          ? "border-red-500"
                          : "border-[var(--color-border-primary)]"
                        }`}
                      placeholder="E-posta adresiniz"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                    >
                      Konu
                    </label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[var(--color-blue-accent)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] ${errors.subject && touched.subject
                          ? "border-red-500"
                          : "border-[var(--color-border-primary)]"
                        }`}
                      placeholder="Mesaj konusu"
                    />
                    <ErrorMessage
                      name="subject"
                      component="p"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                    >
                      Mesaj
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[var(--color-blue-accent)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] resize-none ${errors.message && touched.message
                          ? "border-red-500"
                          : "border-[var(--color-border-primary)]"
                        }`}
                      placeholder="Mesajınızı buraya yazın..."
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer bg-[var(--color-blue-accent)] text-[var(--color-text-white)] py-4 px-6 rounded-lg font-medium hover:bg-[var(--color-blue-dark)] transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Mesaj Gönder</span>
                      </>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
