import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code2, Palette, Zap } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/Card";

export default function Index() {
  const features = [
    {
      icon: Code2,
      title: "Component Architecture",
      description: "Reusable, well-structured components built with React best practices",
    },
    {
      icon: Zap,
      title: "State Management",
      description: "Modern hooks including useState, useEffect, useContext, and custom hooks",
    },
    {
      icon: CheckCircle2,
      title: "Task Management",
      description: "Full CRUD operations with local storage persistence and filtering",
    },
    {
      icon: Palette,
      title: "Beautiful UI",
      description: "Responsive design with Tailwind CSS and smooth dark mode support",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in duration-700">
            Master React Development
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-in fade-in duration-700 delay-100">
            A comprehensive learning project featuring hooks, state management, API integration,
            and modern UI design with Tailwind CSS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-700 delay-200">
            <Link to="/tasks">
              <Button variant="primary" size="lg">
                Try Task Manager
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
           
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              hover
              className="animate-in fade-in duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-3" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16">
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              This project demonstrates proficiency in React.js, TypeScript, Tailwind CSS,
              and modern development practices including hooks, context API, and RESTful API integration.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["React 18", "TypeScript", "Tailwind CSS", "Vite", "React Router"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
