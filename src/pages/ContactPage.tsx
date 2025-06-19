import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <ContactForm />
      <Newsletter />
    </div>
  );
} 