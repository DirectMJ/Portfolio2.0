import { Lightbulb, Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    Title: "Clean Code",
    description:
      "I’m a developer who cares about building things the right way. I focus on writing clean, easy-to-read code that not only works but is simple to maintain and improve.",
  },
  {
    icon: Rocket,
    Title: "Performance",
    description:
      "When it comes to performance, I pay attention to the details. I aim to create applications that are fast, efficient, and smooth to use, without sacrificing quality or readability.",
  },
  {
    icon: Users,
    Title: "Collaboration",
    description:
      "I enjoy working with others, sharing ideas, and learning from teammates because I believe the best projects are built through good communication and collaboration.",
  },
  {
    icon: Lightbulb,
    Title: "Innovation",
    description:
      "I’m always curious and open to new ideas and technologies, constantly looking for better and more creative ways to solve problems. Innovation, for me, is about improving both the product and the process.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/dark.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from background/20 via-background/80 to-background"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*left column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary-foreground text-md font-medium tracking-wider uppercase">
                About me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
              Turning thoughts,
              <span className="font-serif italic font-normal text-white">
                {" "}
                into living pages.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a 4th-year BSIT student, set to graduate in 2026, with a
                strong passion for technology and problem-solving. My main tech
                stack is MERN (MongoDB, Express, React, Node.js), and I
                continuously explore ways to build efficient and user-friendly
                applications.
              </p>
              <p>
                Alongside my technical skills, I bring strong communication and
                collaboration abilities, making me effective in both individual
                and team settings. With a proficient background in computers and
                the ability to adapt and utilize online tools, I’m always ready
                to take on challenges and learn new technologies.
              </p>
              <p>
                I’m eager to grow as a developer, contribute to impactful
                projects, and connect with like-minded professionals in the tech
                industry.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “The superior person is modest in speech but exceeds in action.
                Success does not lie in quick results or loud declarations, but
                in patience, persistence, and the quiet commitment to improve
                oneself each day while remaining faithful to one’s principles.”
                -Confucius
              </p>
            </div>
          </div>
          {/*right column*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary-foreground/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
