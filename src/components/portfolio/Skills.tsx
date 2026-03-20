import { Code, Database, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL", "PHP", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries", 
      icon: Globe,
      skills: ["Angular", "React.js", "Node.js", "Express.js", "Next.js", "Spring Boot", "jQuery", "Bootstrap", "Flask", "SwiftUI"]
    },
    {
      title: "Build & DevOps Tools",
      icon: Wrench,
      skills: ["GCP", "Azure", "AWS", "Jenkins", "GitHub Actions", "Maven", "Snyk"]
    },
    {
      title: "AI/ML Tools",
      icon: Globe,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "LangChain"]
    },
    {
      title: "Testing Tools",
      icon: Wrench,
      skills: ["JUnit", "Cypress", "Pytest"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Concepts & Methodologies",
      icon: Globe,
      skills: ["REST APIs", "Microservices", "CI/CD", "SDLC", "SaaS", "Agile/Scrum", "Test-Driven Development (TDD)"]
    }
  ];  

  return (
    <section id="skills" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="card-elevated p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="bg-muted/50 hover:bg-primary/10 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
