import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';

export function ReviewsSection() {
  const reviews = [
    {
      name: 'Асет Нурланов',
      position: 'Генеральный директор, ТОО "АгроТех"',
      company: 'АгроТех',
      review: 'Команда TCI помогла нам выиграть крупнейший тендер в истории компании. Их аналитический подход и внимание к деталям просто впечатляют. Рекомендую всем, кто серьёзно настроен на результат.',
      avatar: 'А.Н.',
      rating: 5
    },
    {
      name: 'Мадина Кайратова',
      position: 'Директор по развитию, "Казстрой"',
      company: 'Казстрой',
      review: 'Сотрудничаем уже второй год. Благодаря их стратегии наша успешность в тендерах выросла на 40%. Особенно ценим оперативность и профессиональное сопровождение на всех этапах.',
      avatar: 'М.К.',
      rating: 5
    },
    {
      name: 'Ерлан Султанов',
      position: 'Коммерческий директор, IT Solutions KZ',
      company: 'IT Solutions KZ',
      review: 'TCI не просто подготовили документы — они стали нашими стратегическими партнёрами. Их экспертиза в IT-тендерах помогла нам войти в топ-3 поставщиков цифровых решений в стране.',
      avatar: 'Е.С.',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-[#0B132B]">
            Отзывы клиентов
          </h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto">
            Мнения руководителей компаний, которые доверили нам свои проекты
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-[#2B7BFF] opacity-30" />
                </div>

                {/* Review Text */}
                <blockquote className="text-[#374151] leading-relaxed mb-8 italic">
                  "{review.review}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#0F7B6C] fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2B7BFF] to-[#1E3A8A] rounded-full flex items-center justify-center text-white font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B132B]">
                      {review.name}
                    </div>
                    <div className="text-[#6B7280] text-sm">
                      {review.position}
                    </div>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {review.company}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#2B7BFF] mb-1">4.9/5</div>
              <div className="text-[#6B7280] text-sm">Средняя оценка</div>
            </div>
            <div className="w-px h-12 bg-[#E5E7EB]"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#0F7B6C] mb-1">50+</div>
              <div className="text-[#6B7280] text-sm">Довольных клиентов</div>
            </div>
            <div className="w-px h-12 bg-[#E5E7EB]"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1E3A8A] mb-1">95%</div>
              <div className="text-[#6B7280] text-sm">Повторных обращений</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}