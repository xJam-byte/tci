import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Monitor, Smartphone, Paintbrush, Settings, Globe, Zap } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений с использованием React, Next.js и TypeScript',
      features: ['SPA приложения', 'Server-side rendering', 'API интеграция', 'Оптимизация производительности']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Мобильная адаптация',
      description: 'Разработка адаптивных интерфейсов для всех типов устройств',
      features: ['Responsive design', 'Touch-friendly интерфейсы', 'Progressive Web Apps', 'Cross-browser compatibility']
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: 'UI/UX Дизайн',
      description: 'Создание пользовательских интерфейсов с фокусом на удобство использования',
      features: ['Wireframing', 'Prototyping', 'Design systems', 'User research']
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Техническое консультирование',
      description: 'Помощь в выборе технологического стека и архитектурных решений',
      features: ['Code review', 'Performance audit', 'Technology consulting', 'Best practices']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'SEO оптимизация',
      description: 'Оптимизация веб-приложений для поисковых систем',
      features: ['Meta tags optimization', 'Site speed optimization', 'Structured data', 'Core Web Vitals']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Поддержка и обновления',
      description: 'Долгосрочная поддержка и развитие ваших проектов',
      features: ['Bug fixes', 'Feature updates', 'Security patches', 'Performance monitoring']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Услуги</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Предлагаю полный спектр услуг по разработке и дизайну веб-приложений. 
            От концепции до реализации и поддержки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}