import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Globe } from "lucide-react";
import logo from "../assets/logo-.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"RU" | "EN">("RU");

  const navItems = [
    { href: "#services", label: "Услуги" },
    { href: "#cases", label: "Кейсы" },
    { href: "#about", label: "О компании" },
    { href: "#contact", label: "Контакты" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "RU" ? "EN" : "RU");
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-[#2B7BFF] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">TCI</span>
              </div> */}
              <img
                className="flex items-center justify-center"
                src={logo}
                style={{ width: 120, height: "auto" }}
                alt="logo"
              />
              {/* <div>
                <div className="font-semibold text-[#0B132B] text-lg">
                  Tender Consulting Invest
                </div>
              </div> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#0B132B] hover:text-[#2B7BFF] font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-[#E5E7EB] text-[#6B7280] hover:text-[#2B7BFF] hover:border-[#2B7BFF]"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-[#E5E7EB]"
            >
              {language}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#0B132B] hover:text-[#2B7BFF] block px-3 py-2 text-left w-full font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
