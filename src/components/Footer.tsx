import { Instagram, Twitter, Facebook, Youtube, PinIcon as Pinterest } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    categories: [
      { name: "Moda", href: "/fashion" },
      { name: "Güzellik", href: "/beauty" },
      { name: "Kültür & Yaşam", href: "/lifestyle" },
      { name: "Burçlar", href: "/horoscope" },
    ],
    about: [
      { name: "Hakkımızda", href: "/hakkimizda" },
      { name: "İletişim", href: "/iletisim" },
      { name: "Gizlilik Politikası", href: "/gizlilik" },
      { name: "Kullanım Şartları", href: "/kullanim-sartlari" },
    ],
  }

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Pinterest, href: "#", label: "Pinterest" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border-primary)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-4">MİARA</h4>
            <p className="text-[var(--color-text-tertiary)] text-sm">Stil ve zarafetin buluştuğu yer. En son moda trendlerini keşfedin.</p>
          </div>
          <div>
            <h5 className="font-semibold text-[var(--color-text-primary)] mb-4">Kategoriler</h5>
            <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[var(--color-text-primary)] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-[var(--color-text-primary)] mb-4">Hakkımızda</h5>
            <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[var(--color-text-primary)] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-[var(--color-text-primary)] mb-4">Takip Et</h5>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-[var(--color-bg-tertiary)] p-3 rounded-full hover:bg-[var(--color-bg-black)] hover:text-[var(--color-text-white)] transition-all duration-300 group"
                  >
                    <IconComponent className="h-5 w-5 text-[var(--color-text-primary)] group-hover:text-[var(--color-text-white)]" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--color-border-primary)] pt-8 text-center">
          <p className="text-[var(--color-text-tertiary)] text-sm">© 2025 Miara. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
