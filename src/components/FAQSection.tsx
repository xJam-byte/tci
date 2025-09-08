import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'Гарантируете ли вы выигрыш в тендере?',
      answer: 'Мы не обещаем невозможного. Работаем с вероятностями и прозрачной аналитикой, повышаем шансы на победу за счёт профессиональной стратегии и качественной подготовки документов. Наша статистика показывает рост успешности участия на 35% в среднем.'
    },
    {
      question: 'Сколько стоят ваши услуги?',
      answer: 'Предлагаем фикс-пакеты и модель success-fee. Конкретная стоимость формируется после экспресс-брифа, который занимает 15 минут. Это позволяет дать точную оценку исходя из сложности и объёма работ по вашему проекту.'
    },
    {
      question: 'Как вы работаете с рисками?',
      answer: 'Проводим детальный анализ рисков на этапе аудита. Оцениваем юридические, финансовые и репутационные риски. Разрабатываем план минимизации рисков и предусматриваем альтернативные сценарии развития событий.'
    },
    {
      question: 'В каких отраслях у вас есть экспертиза?',
      answer: 'Специализируемся на строительстве, IT, агропромышленности, энергетике и транспорте. Имеем глубокую экспертизу в государственных закупках и корпоративных тендерах крупных компаний Казахстана.'
    },
    {
      question: 'Сколько времени занимает подготовка к тендеру?',
      answer: 'В зависимости от сложности: от 10 дней для стандартных процедур до 45 дней для крупных многоэтапных тендеров. Всегда планируем работу с запасом времени для качественной подготовки всех документов.'
    },
    {
      question: 'Работаете ли вы с регионами Казахстана?',
      answer: 'Да, работаем со всеми регионами Казахстана. Имеем опыт участия в тендерах областных и районных акиматов, а также региональных представительств крупных компаний.'
    },
    {
      question: 'Что входит в полное сопровождение?',
      answer: 'Полный цикл: от анализа тендерной документации до подписания контракта. Включает подготовку всех документов, техническую и коммерческую части, подачу заявки, ведение переговоров и апелляций при необходимости.'
    },
    {
      question: 'Как быстро вы отвечаете на запросы?',
      answer: 'Отвечаем в течение 2 часов в рабочее время (9:00-18:00, пн-пт). Для экстренных случаев предусмотрена горячая линия. Каждому клиенту назначается персональный менеджер для оперативного решения всех вопросов.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[#0B132B]">
            Часто задаваемые вопросы
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto">
            Ответы на вопросы, которые чаще всего задают наши клиенты
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-[#E5E7EB] rounded-2xl px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left hover:text-[#2B7BFF] font-semibold text-[#0B132B] py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#374151] pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-[#F8FAFC] to-[#E5E7EB] rounded-3xl">
          <h4 className="text-[#0B132B] mb-2">Не нашли ответ на свой вопрос?</h4>
          <p className="text-[#6B7280] mb-4">
            Свяжитесь с нами, и мы ответим в течение 2 часов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+77771234567"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2B7BFF] text-white rounded-xl font-semibold hover:bg-[#1E3A8A] transition-colors"
            >
              📞 +7 (777) 123-45-67
            </a>
            <a 
              href="mailto:info@tci.kz"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#2B7BFF] text-[#2B7BFF] rounded-xl font-semibold hover:bg-[#2B7BFF] hover:text-white transition-colors"
            >
              ✉️ info@tci.kz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}