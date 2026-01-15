import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "MySQL",
  "Vercel",
  "Shadcn/UI",
  "Tailwind CSS",
  "Git",
  "Github",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*background*/}
      <div className="absolute inset-0">
        <img
          src="/blwhite.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from background/20 via-background/80 to-background"></div>
      </div>

      {/*content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse glow-text" />
                Web Developer
              </span>
            </div>

            {/*headline*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                <span className="text-primary glow-text">Passion</span> never
                ends
                <br /> it will always
                <br />
                <span className="font-serif italic font-normal text-white">
                  evolve.
                </span>
              </h1>
              <p className="text-md text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I’m a 4th-year BSIT student, set to graduate in June 2026, with
                a strong passion for technology and problem-solving. My main
                tech stack is MERN (MongoDB, Express, React, Node.js), and I
                continuously explore ways to build efficient and user-friendly
                applications.
              </p>
            </div>

            {/*cta buttons*/}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a
                href="/PATTAGUAN_RESUME.pdf"
                download="PATTAGUAN_RESUME.pdf"
                className="inline-block"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>
            {/*social links*/}
          </div>
          {/*right column*/}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile iamge */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur 2xl animate-pulse"></div>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="faceme.jpg"
                  alt="MJ Pattaguan"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for Internship
                    </span>
                  </div>
                </div>
                {/* stats badge*/}
              </div>
            </div>
          </div>
        </div>
        {/* skills cloud */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-medium text-muted-foreground mb-6 text-center">
            {" "}
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
