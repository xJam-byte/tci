import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle, TrendingUp, Users } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCases = () => {
    const element = document.querySelector("#cases");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustMarkers = [
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "100+ процедур",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      text: "До 35% средний рост выигрышей",
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "10 лет экспертизы",
    },
  ];

  const clientLogos = [
    "Госзакуп",
    "Самрук-Казына",
    "КТЖ",
    "Казахтелеком",
    "KEGOC",
    "Air Astana",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-[#1E3A8A] via-[#2B7BFF] to-[#0F7B6C] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#0F7B6C] rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left text-white">
            <h1 className="mb-6 text-white">
              Тендеры и инвестиции под ключ
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Планируем стратегию, готовим документы и доводим
              до результата — прозрачно, в срок и с измеримыми
              показателями.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-[#2B7BFF] hover:bg-white/90 h-12 px-8 rounded-xl font-semibold"
              >
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                onClick={scrollToCases}
                style={{ backgroundColor: "transparent" }}
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 h-12 px-8 rounded-xl font-semibold"
              >
                Посмотреть кейсы
              </Button>
            </div>

            {/* Trust Markers */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {trustMarkers.map((marker, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start space-x-3"
                >
                  <div className="text-[#0F7B6C] bg-white/20 p-2 rounded-lg">
                    {marker.icon}
                  </div>
                  <span className="text-white font-medium">
                    {marker.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Client Social Proof */}
            <div className="space-y-4">
              <p className="text-white/80 text-sm font-medium">
                Доверяют нам:
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {clientLogos.map((client, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/20 text-white border-0 px-4 py-2"
                  >
                    {client}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main illustration container */}
              <div className="w-96 h-96 relative">
                {/* Circular orbit */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-slow"></div>

                {/* Growing columns visualization */}
                <div className="absolute inset-8 flex items-end justify-center space-x-3">
                  <div
                    className="w-8 bg-white/80 rounded-t-lg animate-pulse"
                    style={{ height: "60%" }}
                  ></div>
                  <div
                    className="w-8 bg-[#0F7B6C] rounded-t-lg animate-pulse delay-200"
                    style={{ height: "80%" }}
                  ></div>
                  <div
                    className="w-8 bg-white/90 rounded-t-lg animate-pulse delay-300"
                    style={{ height: "90%" }}
                  ></div>
                  <div
                    className="w-8 bg-[#0F7B6C] rounded-t-lg animate-pulse delay-100"
                    style={{ height: "70%" }}
                  ></div>
                  <div
                    className="w-8 bg-white/70 rounded-t-lg animate-pulse delay-400"
                    style={{ height: "85%" }}
                  ></div>
                </div>

                {/* Central icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-8 w-8 text-[#2B7BFF]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}