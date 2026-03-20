import TensoAI from "../../assets/TensoAI.png";
import CelesticaLogo from "../../assets/celestica.png";
import SmithLogo from "../../assets/smith_eng.jpg";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "TensoAI",
      logo: TensoAI,
      location: "Remote",
      period: <p>October 2025 - Present</p>,
      description: [
        "Quickly implemented and shipped an MVP within 4 weeks, delivering scalable end-to-end features for client Asahi",
        "Built production monitoring dashboard for Azure ML and migrated services to Managed Identity and Key Vault",
      ]      
    },
    {
      title: "Full-Stack Cloud Developer Intern",
      company: "Celestica",
      logo: CelesticaLogo,
      location: "Toronto, ON",
      period: <p>September 2025 - Present (On-Call)<br />May 2024 – Aug 2025 (Full-Time)</p>,
      description: [
        "Developed scalable microservices and APIs across 20+ enterprise supply chain apps on GCP, supporting 26K+ users",
        "Boosted performance of 10+ apps by 20–40% on average through upgrades, cutting load times and backend usage",
        "Increased user engagement 117% by migrating main news site from AngularJS to Angular and upgrading Spring Boot",
        "Implemented the Mochawesome reporter for Cypress E2E tests, integrating it with Jenkins to provide detailed results",
        "Resolved 100+ ServiceNow tickets by diagnosing and fixing issues, improving turnaround times, and user experience",
        "Enhanced software quality/security by writing unit tests, contributing to code reviews, and demonstrating solutions",
      ]      
    },
    {
      title: "Teaching Assistant",
      company: "Smith Engineering",
      logo: SmithLogo,
      location: "Kingston, ON",
      period: <p>Operating Systems (Fall 2025)<br />Intro to Programming (Fall 2023)</p>,    
      description: [
        "Led weekly lab sessions, clearly clarifying complex concepts in C programming, Linux kernel, and Git for 50+ students",
        "Provided one-on-one mentorship, adapting explanations to diverse learning styles to improve comprehension",
        "Guided students through debugging techniques and best practices, significantly reducing assignment errors",
        "Assisted in grading assignments and projects, ensuring fair evaluation while delivering constructive feedback",
        "Collaborated with professors to design effective lab exercises and proactively address common student challenges",
        "Supported first-year students in building strong programming foundations, contributing to higher retention"
      ]    
    }
  ];

  return (
    <section id="experience" className="py-20 section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card-elevated p-8 group">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-4">
                    {/* Logo replaces blue background and fills container */}
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <p className="font-medium text-primary mb-2">{exp.company}</p>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
