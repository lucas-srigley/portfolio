import { Calendar, MapPin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Baja from "../../assets/baja.png";
import QMIND from "../../assets/qmind.ico";

interface ExtracurricularItem {
  role: string;
  organization: string;
  logo: string;
  period: string;
  location: string;
  achievements: string[];
  githubUrl?: string;
}

const extracurriculars: ExtracurricularItem[] = [
  {
    role: "Electrical Software Lead",
    organization: "Baja SAE",
    logo: Baja,
    period: "Sep 2023 – May 2024",
    location: "Kingston, ON",
    achievements: [
      "Led a 4-person team for development of an Arduino-based data acquisition system to monitor and relay real-time vehicle metrics",
      "Created embedded C/C++ firmware for microcontrollers to process and transmit telemetry data with minimal latency",
    ],
    githubUrl: "https://github.com/lucas-srigley/Baja_Testing"
  },
  {
    role: "NLP Software Developer",
    organization: "QMIND",
    logo: QMIND,
    period: "Sep 2023 – May 2024",
    location: "Kingston, ON",
    achievements: [
      "Developed a Python-based application using LLMs, scikit-learn, pandas, NumPy, and Matplotlib to enable non-technical users to design, tailor, and train personalized chatbots",
      "Implemented data preprocessing, model training, and visualization pipelines to provide intuitive insights and performance metrics",
    ],
    githubUrl: "https://github.com/lucas-srigley/Chatbot"
  },
];

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="py-20 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Beyond Code</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {extracurriculars.map((item, idx) => (
            <div key={idx} className="card-elevated p-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3 flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      src={item.logo}
                      alt={`${item.organization} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
                    <p className="font-medium text-primary mb-2">{item.organization}</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <ul className="space-y-3">
                    {item.achievements.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {item.githubUrl && (
                    <div className="pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
