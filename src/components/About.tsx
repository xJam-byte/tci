import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Palette, Rocket, Users } from 'lucide-react';

export function About() {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 
    'PostgreSQL', 'Figma', 'Adobe Creative Suite', 'Git', 'Docker'
  ];

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: '3+ года опыта',
      description: 'В frontend разработке и создании пользовательских интерфейсов'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Дизайн и разработка',
      description: 'Полный цикл от концепции до реализации'
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: '50+ проектов',
      description: 'Успешно реализованных проектов различной сложности'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Командная работа',
      description: 'Опыт работы в agile-командах и руководства проектами'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Обо мне</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Я увлеченный frontend разработчик с сильным бэкграундом в дизайне. 
            Моя цель — создавать веб-приложения, которые не только красиво выглядят, 
            но и обеспечивают отличный пользовательский опыт.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Description */}
          <div>
            <h3 className="mb-6">Мой путь в разработке</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Начал свой путь в веб-разработке с изучения основ HTML, CSS и JavaScript. 
                Постепенно углублялся в современные фреймворки и инструменты, 
                особенно полюбил экосистему React.
              </p>
              <p>
                Параллельно изучал принципы UX/UI дизайна, что позволило мне лучше 
                понимать потребности пользователей и создавать более интуитивные интерфейсы.
              </p>
              <p>
                Сегодня я специализируюсь на создании современных веб-приложений 
                с использованием React, TypeScript и других передовых технологий.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="mb-4">Технологии и инструменты</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="text-primary mb-3">
                    {highlight.icon}
                  </div>
                  <h4 className="mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}