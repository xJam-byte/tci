import { Card, CardContent } from './ui/card';
import { Shield, BarChart3, Clock, User, DollarSign, CheckCircle } from 'lucide-react';

export function WhyUsSection() {
  const advantages = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Экспертиза в госзакупках и B2B',
      description: 'Глубокие знания законодательства и практики государственных закупок'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Жёсткий комплаенс и прозрачность',
      description: 'Строгое соблюдение всех требований и полная прозрачность процессов'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Сильная аналитика',
      description: 'Unit-экономика, анализ рисков и детальное моделирование проектов'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Сроки «time-to-win»',
      description: 'Оптимизированные процессы для максимально быстрого достижения результата'
    },
    {
      icon: <User className="h-6 w-6" />,
      title: 'Персональный менеджер',
      description: 'Выделенный специалист для каждого проекта с полной ответственностью'
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Фикс-прайс пакеты',
      description: 'Прозрачное ценообразование без скрытых платежей и доплат'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[#0B132B]">
            Почему мы
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto">
            Наши конкурентные преимущества, которые обеспечивают успех ваших проектов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="border border-[#E5E7EB] hover:border-[#2B7BFF] hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2B7BFF] to-[#1E3A8A] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {advantage.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#0B132B] mb-3 font-semibold">
                      {advantage.title}
                    </h4>
                    <p className="text-[#6B7280] text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#1E3A8A] to-[#2B7BFF] rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white/80">Завершённых процедур</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-white/80">Средний рост выигрышей</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-white/80">Лет экспертизы</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.6×</div>
              <div className="text-white/80">Средний ROI проектов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}