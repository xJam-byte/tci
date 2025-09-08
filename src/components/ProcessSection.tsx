import { FileSearch, BarChart, Target, Send, Trophy } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Бриф',
      description: 'Изучаем ваши задачи и цели',
      icon: <FileSearch className="h-6 w-6" />,
      color: 'from-[#2B7BFF] to-[#1E3A8A]'
    },
    {
      number: 2,
      title: 'Анализ',
      description: 'Исследуем рынок и конкурентов',
      icon: <BarChart className="h-6 w-6" />,
      color: 'from-[#1E3A8A] to-[#0F172A]'
    },
    {
      number: 3,
      title: 'Стратегия',
      description: 'Разрабатываем план действий',
      icon: <Target className="h-6 w-6" />,
      color: 'from-[#0F7B6C] to-[#065f54]'
    },
    {
      number: 4,
      title: 'Подача',
      description: 'Готовим и подаём документы',
      icon: <Send className="h-6 w-6" />,
      color: 'from-[#2B7BFF] to-[#1E3A8A]'
    },
    {
      number: 5,
      title: 'Сопровождение/Win',
      description: 'Ведём до победного результата',
      icon: <Trophy className="h-6 w-6" />,
      color: 'from-[#0F7B6C] to-[#065f54]'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[#0B132B]">
            Процесс работы
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto">
            Проверенная методология в 5 шагов, которая приводит к результату
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#2B7BFF] via-[#0F7B6C] to-[#2B7BFF] rounded-full transform -translate-y-1/2 hidden lg:block"></div>

          {/* Steps */}
          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Step Number & Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#E5E7EB]">
                    <span className="text-[#2B7BFF] font-bold text-sm">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-[#0B132B] font-semibold mb-3 text-lg">
                    {step.title}
                  </h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connection Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-1 h-16 bg-gradient-to-b from-[#2B7BFF] to-[#0F7B6C] rounded-full mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-[#F8FAFC] to-[#E5E7EB] rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#2B7BFF] mb-2">15 мин</div>
              <div className="text-[#6B7280]">Средняя длительность брифа</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0F7B6C] mb-2">2-3 дня</div>
              <div className="text-[#6B7280]">Подготовка стратегии</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E3A8A] mb-2">24/7</div>
              <div className="text-[#6B7280]">Поддержка на всех этапах</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}