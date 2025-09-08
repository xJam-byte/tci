import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h4 className="mb-4">Алексей Иванов</h4>
            <p className="text-primary-foreground/80 mb-4">
              Frontend разработчик и UI/UX дизайнер, создающий современные веб-приложения
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:text-primary hover:bg-primary-foreground">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:text-primary hover:bg-primary-foreground">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:text-primary hover:bg-primary-foreground">
                <a href="mailto:alex.ivanov@example.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'Обо мне' },
                { href: '#services', label: 'Услуги' },
                { href: '#portfolio', label: 'Портфолио' },
                { href: '#contact', label: 'Контакты' }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Связаться</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>alex.ivanov@example.com</p>
              <p>+7 (999) 123-45-67</p>
              <p>Москва, Россия</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Алексей Иванов. Все права защищены.
            </p>
            <p className="text-primary-foreground/80 text-sm flex items-center mt-2 md:mt-0">
              Сделано с <Heart className="h-4 w-4 mx-1 text-red-400" /> и React
            </p>
          </div>
          
          <div className="text-center mt-4">
            <Button 
              variant="ghost" 
              onClick={scrollToTop}
              className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
            >
              ↑ Наверх
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}