import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, ExternalLink, Building, Calendar, Users, TrendingUp } from 'lucide-react';

export function CasesSection() {
  const [currentCase, setCurrentCase] = useState(0);

  const cases = [
    {
      title: 'Агропоставка, РК',
      year: '2023',
      category: 'Государственные закупки',
      image: 'https://images.unsplash.com/photo-1690991128865-e71a6802dca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZW5kZXIlMjBkb2N1bWVudHMlMjBvZmZpY2V8ZW58MXx8fHwxNzU3MTQ5MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      task: 'Участие в тендере на поставку сельхозтехники для государственных нужд',
      actions: [
        'Провели полный аудит требований заказчика',
        'Разработали конкурентную стратегию ценообразования',
        'Подготовили техническую и коммерческую документацию',
        'Организовали своевременную подачу заявки'
      ],
      result: 'Выигрыш 245 млн ₸, экономия 12%',
      metrics: {
        duration: '21 день',
        competition: '7 заявок',
        roi: '4.6×'
      }
    },
    {
      title: 'Строительная компания «Астана»',
      year: '2023',
      category: 'Инфраструктурные проекты',
      image: 'https://images.unsplash.com/photo-1734503937317-3b88a42ac50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGNoYXJ0cyUyMGdyYXBoc3xlbnwxfHx8fDE3NTcwODY3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      task: 'Получение крупного контракта на строительство социальных объектов',
      actions: [
        'Анализ технических требований и стандартов',
        'Оптимизация ресурсного планирования',
        'Подготовка проектной документации',
        'Сопровождение процедуры до подписания контракта'
      ],
      result: 'Контракт на 480 млн ₸, рост маржи 18%',
      metrics: {
        duration: '35 дней',
        competition: '12 заявок',
        roi: '5.2×'
      }
    },
    {
      title: 'IT-интегратор «TechSolutions»',
      year: '2024',
      category: 'Цифровизация',
      image: 'https://images.unsplash.com/photo-1587403335644-fa8fef06b261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RtZW50JTIwZmluYW5jaWFsJTIwZ3Jvd3RoJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NTcxNDkxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      task: 'Участие в тендере на внедрение ERP-системы в госорганах',
      actions: [
        'Техническая экспертиза требований заказчика',
        'Разработка архитектуры решения',
        'Подготовка демонстрации функционала',
        'Ценовая стратегия и финансовое планирование'
      ],
      result: 'Победа в тендере на 180 млн ₸, прибыль 22%',
      metrics: {
        duration: '28 дней',
        competition: '9 заявок',
        roi: '3.8×'
      }
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCaseData = cases[currentCase];

  return (
    <section id="cases" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[#0B132B]">
            Кейсы
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto">
            Реальные результаты наших клиентов в цифрах и фактах
          </p>
        </div>

        {/* Case Slider */}
        <div className="relative">
          <Card className="overflow-hidden shadow-xl border-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto">
                <ImageWithFallback
                  src={currentCaseData.image}
                  alt={currentCaseData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <Badge variant="secondary" className="mb-3 bg-white/20 text-white border-0">
                    {currentCaseData.category}
                  </Badge>
                  <h3 className="text-white text-2xl font-bold">
                    {currentCaseData.title}
                  </h3>
                  <div className="flex items-center mt-2 text-white/80">
                    <Calendar className="h-4 w-4 mr-2" />
                    {currentCaseData.year}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-6">
                    <Building className="h-5 w-5 text-[#2B7BFF] mr-2" />
                    <span className="text-[#6B7280] font-medium">Задача</span>
                  </div>
                  <p className="text-[#374151] mb-8 leading-relaxed">
                    {currentCaseData.task}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-[#0B132B] font-semibold mb-4">Что делали:</h4>
                    <ul className="space-y-3">
                      {currentCaseData.actions.map((action, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-[#0F7B6C] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-[#374151] text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-[#0F7B6C] to-[#065f54] rounded-2xl p-6 mb-8 text-white">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Результат</span>
                    </div>
                    <p className="text-xl font-bold">{currentCaseData.result}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-xl">
                    <div className="text-[#2B7BFF] font-bold text-lg mb-1">
                      {currentCaseData.metrics.duration}
                    </div>
                    <div className="text-[#6B7280] text-xs">Срок</div>
                  </div>
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-xl">
                    <div className="text-[#2B7BFF] font-bold text-lg mb-1">
                      {currentCaseData.metrics.competition}
                    </div>
                    <div className="text-[#6B7280] text-xs">Конкуренция</div>
                  </div>
                  <div className="text-center p-4 bg-[#F8FAFC] rounded-xl">
                    <div className="text-[#2B7BFF] font-bold text-lg mb-1">
                      {currentCaseData.metrics.roi}
                    </div>
                    <div className="text-[#6B7280] text-xs">ROI</div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevCase}
              className="border-[#E5E7EB] hover:border-[#2B7BFF] hover:text-[#2B7BFF]"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentCase ? 'bg-[#2B7BFF]' : 'bg-[#E5E7EB]'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextCase}
              className="border-[#E5E7EB] hover:border-[#2B7BFF] hover:text-[#2B7BFF]"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* All Cases Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#2B7BFF] text-[#2B7BFF] hover:bg-[#2B7BFF] hover:text-white"
          >
            Все кейсы
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}