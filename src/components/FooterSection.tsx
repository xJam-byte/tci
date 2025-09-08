import { Button } from "./ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#cases", label: "Кейсы" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Контакты" },
  ];

  const legalLinks = [
    { href: "#", label: "Политика конфиденциальности" },
    { href: "#", label: "Пользовательское соглашение" },
    { href: "#", label: "Публичная оферта" },
  ];

  return (
    <footer className="bg-[#0B132B] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2B7BFF] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">TCI</span>
              </div>
              <div>
                <div className="font-bold text-xl">
                  Tender Consulting Invest
                </div>
              </div>
            </div>
            <p className="text-white/80 mb-8 leading-relaxed max-w-md">
              Тендеры и инвестиции под ключ — планируем стратегию, готовим
              документы и доводим до результата с прозрачными показателями.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-4 w-4 text-[#2B7BFF]" />
                <a
                  href="tel:+77771234567"
                  className="hover:text-white transition-colors"
                >
                  +7 (777) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-4 w-4 text-[#2B7BFF]" />
                <a
                  href="mailto:info@tci.kz"
                  className="hover:text-white transition-colors"
                >
                  info@tci.kz
                </a>
              </div>
              <div className="flex items-start space-x-3 text-white/80">
                <MapPin className="h-4 w-4 text-[#2B7BFF] mt-1 flex-shrink-0" />
                <span>г. Астана, пр. Туран, 55/7</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3 text-white/80">
              <li>Консалтинг по тендерам</li>
              <li>Полное сопровождение</li>
              <li>Инвест-решения</li>
              <li>Аналитика и аудит</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {currentYear} Tender Consulting Invest. Все права защищены.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl"
            >
              ↑ Наверх
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="grid md:grid-cols-4 gap-6 text-center text-white/60 text-sm">
            <div>
              <div className="font-semibold text-[#0F7B6C] mb-1">
                100+ процедур
              </div>
              <div>Завершённых успешно</div>
            </div>
            <div>
              <div className="font-semibold text-[#2B7BFF] mb-1">10 лет</div>
              <div>Экспертизы на рынке</div>
            </div>
            <div>
              <div className="font-semibold text-[#0F7B6C] mb-1">4.6× ROI</div>
              <div>Средняя доходность</div>
            </div>
            <div>
              <div className="font-semibold text-[#2B7BFF] mb-1">2 часа</div>
              <div>SLA времени ответа</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
