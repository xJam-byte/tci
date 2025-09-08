import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { FileText, Users, TrendingUp, ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Консалтинг по тендерам',
      description: 'Аудит текущих процессов, разработка стратегии участия и подготовка к процедурам',
      features: [
        'Анализ тендерной документации',
        'Оценка конкурентной среды',
        'Разработка стратегии участия',
        'Подготовка команды'
      ],
      gradient: 'from-[#2B7BFF] to-[#1E3A8A]'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Полное сопровождение',
      description: 'Подготовка документов, подача заявок, ведение апелляций и коммуникация с заказчиком',
      features: [
        'Подготовка пакета документов',
        'Техническая и финансовая части',
        'Подача заявок в срок',
        'Ведение апелляций'
      ],
      gradient: 'from-[#0F7B6C] to-[#065f54]'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Инвест-решения',
      description: 'Анализ инвестиционных проектов, структурирование сделок и полное сопровождение',
      features: [
        'Due diligence проектов',
        'Финансовое моделирование',
        'Структурирование сделок',
        'Юридическое сопровождение'
      ],
      gradient: 'from-[#1E3A8A] to-[#0F172A]'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[#0B132B]">
            Что делаем
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto">
            Предлагаем комплексные решения для успешного участия в тендерах 
            и реализации инвестиционных проектов
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden group"
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <CardTitle className="text-[#0B132B] text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#374151]">
                      <div className="w-2 h-2 bg-[#0F7B6C] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="text-[#2B7BFF] hover:text-[#1E3A8A] hover:bg-[#2B7BFF]/5 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}