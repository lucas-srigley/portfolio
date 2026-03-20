import { GraduationCap, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 section-padding" ref={ref}>
      <div className="container-max">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column: Education & Achievements */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-elevated p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Queen's University</p>
                      <p className="text-muted-foreground">B.A.Sc. Computer Engineering with Professional Internship</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-text-subtle">
                        <Calendar className="w-4 h-4" />
                        Expected Graduation: May 2026
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Kingston, ON</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Dean's Scholar: 2022-2023, 2023-2024</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card-elevated p-8">
              <h3 className="text-xl font-semibold mb-4">Coursework</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {(() => {
                  const courses = [
                    "Machine Learning",
                    "Deep Learning",
                    "Computer Vision",
                    "Algorithms",
                    "Data Structures",
                    "OOP",
                    "Networks",
                    "Database Management",
                    "Operating Systems",
                    "Computer Architecture",
                    "Embedded Systems",
                    "Quality Assurance"
                  ];
                  const mid = Math.ceil(courses.length / 2);
                  const firstCol = courses.slice(0, mid);
                  const secondCol = courses.slice(mid);
                  return [firstCol, secondCol].map((col, colIndex) => (
                    <div key={colIndex} className="space-y-2">
                      {col.map((course, index) => (
                        <motion.div 
                          key={course} 
                          className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.05 + colIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
                          <span className="text-sm">{course}</span>
                        </motion.div>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
