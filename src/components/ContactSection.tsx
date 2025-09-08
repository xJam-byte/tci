import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[#0B132B]">
            Обсудим ваш тендер или проект?
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto">
            Оставьте контакты, мы вернёмся с экспресс-оценкой по вашему тендеру
            в течение 2 часов в рабочее время
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-[#0B132B] text-xl">
                Получить консультацию
              </CardTitle>
              <p className="text-[#6B7280] text-sm">
                Заполните форму, и наш эксперт свяжется с вами
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#374151]">
                      Имя *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      className="border-[#E5E7EB] focus:border-[#2B7BFF] focus:ring-[#2B7BFF]/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#374151]">
                      Компания *
                    </Label>
                    <Input
                      id="company"
                      placeholder="Название компании"
                      className="border-[#E5E7EB] focus:border-[#2B7BFF] focus:ring-[#2B7BFF]/20"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#374151]">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@company.com"
                    className="border-[#E5E7EB] focus:border-[#2B7BFF] focus:ring-[#2B7BFF]/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#374151]">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="border-[#E5E7EB] focus:border-[#2B7BFF] focus:ring-[#2B7BFF]/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#374151]">
                    Комментарий
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем тендере или проекте..."
                    className="min-h-24 border-[#E5E7EB] focus:border-[#2B7BFF] focus:ring-[#2B7BFF]/20"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreement"
                    className="mt-0.5 border-[#E5E7EB] data-[state=checked]:bg-[#2B7BFF] data-[state=checked]:border-[#2B7BFF]"
                    required
                  />
                  <Label
                    htmlFor="agreement"
                    className="text-sm text-[#6B7280] leading-relaxed cursor-pointer"
                  >
                    Соглашаюсь с обработкой персональных данных и{" "}
                    <a href="#" className="text-[#2B7BFF] hover:underline">
                      политикой конфиденциальности
                    </a>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#2B7BFF] hover:bg-[#1E3A8A] h-12 rounded-xl font-semibold"
                >
                  Отправить заявку
                  <Send className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-sm text-[#6B7280]">
                  ⏰ SLA ответа: в течение 2 часов в рабочее время
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Alternatives */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-[#0B132B] text-xl">
                  Связаться напрямую
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2B7BFF] to-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B132B]">Телефон</div>
                    <a
                      href="tel:+77771234567"
                      className="text-[#2B7BFF] hover:underline"
                    >
                      +7 (777) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0F7B6C] to-[#065f54] rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B132B]">Email</div>
                    <a
                      href="mailto:info@tci.kz"
                      className="text-[#2B7BFF] hover:underline"
                    >
                      info@tci.kz
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] rounded-xl flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B132B]">Офис</div>
                    <div className="text-[#6B7280]">
                      г. Астана, проспект Туран, 55/7
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Alternatives */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-[#0B132B] text-xl">
                  Быстрая связь
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-12 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                    asChild
                  >
                    <a href="https://wa.me/77771234567" target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc] hover:text-white"
                    asChild
                  >
                    <a href="https://t.me/tci_consult" target="_blank">
                      <Send className="mr-2 h-4 w-4" />
                      Telegram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-[#0B132B] text-xl">
                  Время работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280]">Понедельник - Пятница</span>
                  <span className="font-semibold text-[#0B132B]">
                    9:00 - 18:00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280]">Суббота</span>
                  <span className="font-semibold text-[#0B132B]">
                    10:00 - 15:00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280]">Воскресенье</span>
                  <span className="font-semibold text-[#0B132B]">Выходной</span>
                </div>
                <div className="pt-3 border-t border-[#E5E7EB]">
                  <div className="text-sm text-[#6B7280]">
                    🚨 Экстренная связь: 24/7 по WhatsApp
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="shadow-lg border-0 overflow-hidden">
            <div className="relative h-64 w-full">
              <iframe
                title="Карта офиса — Tender Consulting, Астана"
                src="https://www.google.com/maps?q=%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0,%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%A2%D1%83%D1%80%D0%B0%D0%BD%2055/7&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
