import HeroImg from "../../assets/hero.jpg";
import { useTheme } from "../../provider/page";
import OlovaLogo from "../../assets/olova.png";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${theme === "dark"
          ? "bg-[#090f1c] text-white"
          : "bg-white text-gray-900"
          }`}
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            className={`relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ${theme === "dark" ? "text-white" : "text-gray-900"
              }`}
          >
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                  } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${theme === "dark" ? "block" : "hidden"
                    }`}
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${theme === "dark" ? "hidden" : "block"
                    }`}
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p
                className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                I'm Ankit Kumar, a passionate Full-Stack Developer, AI/ML Enthusiast, and Cloud Enthusiast. With expertise in modern web technologies, backend & Frontend systems, and machine learning, I love solving complex problems and building efficient, scalable solutions..{" "}
                <span
                  className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  As the Hackathon 3rd runner-up
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p
                className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
              >
                My focus is on making web development faster, easier, and more accessible to all developers. I have learned both frontend and backend development, enabling me to build complete, efficient web solutions. Currently, I am exploring AI/ML to integrate intelligent automation and data-driven decision-making into my projects.
              </p>

              <div className="pt-6">
                <blockquote
                  className={`border-l-4 ${theme === "dark" ? "border-gray-700" : "border-gray-300"
                    } pl-4`}
                >
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                    I was a Hackathon runner and built EcoCode AI, a web application integrating an AI model to analyze carbon emissions and optimize complex code for efficiency. This project showcases my ability to merge AI with real-world problem-solving.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite
                      className={`block font-medium ${theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                    >
                      Ankit Kumar
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className={`h-5 w-fit ${theme === "dark" ? "" : ""}`}
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span>EcoCode Ai</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
