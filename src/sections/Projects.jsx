import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "ADAL",
    description: "AI Litmatrix Generator for Research Students",
    image: "/projects/landingpage.jpg",
    tags: [
      "React",
      "Node.js",
      "TailwindCSS",
      "OpenAI API",
      "MySQL",
      "Typescript",
      "Express.js",
    ],
    link: "#",
  },
  {
    title: "Postbook",
    description:
      "Postbook with Analytics designed to help users create, schedule, and manage posts while tracking their performance through data insights.",
    image: "/projects/postbook.jpg",
    tags: ["React", "Shadcn/UI", "Typescript"],
    link: "#",
  },
  {
    title: "Data Monitoring for IOT Devices",
    description:
      "Created a real-time CPR monitoring dashboard for IoT devices.",
    image: "/projects/cprmonitor.jpg",
    tags: ["React", "Shadcn/UI", "Firebase", "Typescript"],
    link: "#",
  },
  {
    title: "Portfolio 2.0",
    description: "",
    image: "/projects/portfolio.jpg",
    tags: ["React", "TailwindCSS", "Javascript", "Vercel"],
    link: "#",
  },
  {
    title: "Portfolio 1.0",
    description:
      "I made this when I was just starting out with web development during my 1st year college.",
    image: "/projects/portfolio-1.jpg",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://directmj.github.io/FINAL-OF-FINALS/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif font-normal text-white">
              helped me gain knowledge.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </p>
        </div>

        {/* projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* project card */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight />
                  </a>
                </div>
              </div>

              {/* project details */}
              <div className="p-6 space-y-4">
                <div className="flex item-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
