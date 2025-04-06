import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Code } from "lucide-react";
import { ReactNode } from "react";
import { useTheme } from "../../provider/page";
import { motion } from "framer-motion";

// Import images for experience cards
import hackathonImage from "../../assets/projects/1.png";
import hotelAppImage from "../../assets/projects/2.jpeg";
import ecommerceImage from "../../assets/projects/3.webp";
import javaImage from "../../assets/projects/java-programming-tutorial.jpg";

export default function ProfessionalJourney() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`${isDark ? "bg-gradient-to-b from-[#090F1C] to-[#1A2238]" : "bg-gradient-to-b from-zinc-50 to-white"} py-20 md:py-32 min-h-screen relative overflow-hidden`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${isDark
            ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]"
            } bg-[size:3rem_3rem] md:bg-[size:4rem_4rem]`}
        />
        <div
          className={`absolute inset-0 ${isDark
            ? "bg-gradient-to-r from-[#090F1C] via-transparent to-[#090F1C]"
            : "bg-gradient-to-r from-zinc-50 via-transparent to-zinc-50"
            }`}
        />
      </div>

      <div className="@container mx-auto max-w-7xl px-6 md:px-8 lg:px-12 relative">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-balance text-4xl font-extrabold lg:text-5xl tracking-wide ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Professional Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-4 text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            A timeline of my achievements and experiences.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 mx-auto mt-12 gap-5 md:gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <ExperienceCard
            title="Hackathon Achievements"
            company="Multiple Prestigious Institutes"
            period="2025"
            image={hackathonImage}
            description={
              <>
                <ul className="list-disc pl-4 space-y-2">
                  <li>
                    🥇 <strong>1st Place</strong> at <strong>Febrithon</strong>, KIIT University – Built an innovative solution under time constraints with real-world impact.
                  </li>
                  <li>
                    🥇 <strong>1st Place</strong> at <strong>Trithon</strong>, Trident Academy – Developed <em>Eviro</em>, an AI-powered tool to reduce carbon emissions in code.
                  </li>
                  <li>
                    🥈 <strong>2nd Place</strong> at <strong>IIT Bhubaneswar Hackathon</strong> – Tackled a web designing problem and solved it within 24 hours with scalable AI solutions.
                  </li>
                  <li>
                    🏅 <strong>Runner-Up</strong> at <strong>IIIT Bhubaneswar Hackathon</strong> – Tackled a web designing problem and solved it within 12 hours, creating a smart automation tool with a focus on performance optimization.
                  </li>
                  <li>
                    Winning the hackathon at KIIT University provided me with the opportunity to launch my startup based on the project idea selected there. The project, an AI-based software application, focuses on reducing carbon emissions and has the potential to create a significant environmental impact.
                  </li>
                </ul>
              </>
            }
            icon={<Code />}
          />

          <ExperienceCard title="Full-Stack Developer" company="Hotel Web Application | Intern | Rofabas PMS"
            period="Sep 2024 - Feb 2025"
            image={hotelAppImage}
            description="Built a full-stack application with a dynamic frontend using React.js, styled with Tailwind CSS, and enhanced with React Router, React Toastify, and React features. Backend using Sails.js with MongoDB and MySQL for data management, along with secure authentication using bcrypt.js and JWT."
            icon={<Code />}
          />

          <ExperienceCard
            title="Mern-Stack Developer"
            company="TechnoBoot Pvt Ltd | Intern"
            period="June 2024 - July 2024"
            image={ecommerceImage}
            description="Designed and developed a full-stack e-commerce application featuring secure authentication and real-time payment processing. Created RESTful APIs for product management, user registration, login/logout, and order processing. Integrated Cloudinary for image uploads and Stripe for payment gateway functionality."
            icon={<Briefcase />}
          />

          <ExperienceCard
            title="Java Programming"
            company="CTTC | Intern"
            period="June 2023 - July 2023"
            image={javaImage}
            description="Acquired strong proficiency in core and advanced Java concepts, including object-oriented programming (OOP), multi-threading, exception handling, and file handling."
            icon={<Briefcase />}
          />
        </motion.div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: ReactNode;
  icon: ReactNode;
  image?: string;
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon,
  image,
}: ExperienceCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Card
        className={`group h-full ${isDark
          ? "bg-gradient-to-b from-[#1A2238] to-[#2C3E50] border-gray-700 hover:shadow-blue-500/20"
          : "bg-gradient-to-b from-white to-gray-100 border-gray-200 hover:shadow-blue-500/10"
          } rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
      >
        {image && (
          <div className="w-full h-40 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </div>
        )}
        <div className="flex flex-col p-4 gap-2">
          <div className="flex items-center gap-2 mb-1">
            <div
              className={`size-5 ${isDark ? "text-blue-400" : "text-blue-600"}`}
            >
              {icon}
            </div>
            <h3
              className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {title}
            </h3>
          </div>

          <div>
            <p
              className={`font-medium text-sm ${isDark ? "text-blue-400" : "text-blue-600"}`}
            >
              {company}
            </p>
            <div
              className={`flex items-center gap-1 ${isDark ? "text-gray-400" : "text-gray-500"} mt-1 mb-2`}
            >
              <Calendar className="size-3" />
              <span className="text-xs">{period}</span>
            </div>
            <div className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm`}>
              {description}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};



// import { Card } from "@/components/ui/card";
// import { Briefcase, Calendar, Code } from "lucide-react";
// import { ReactNode } from "react";
// import { useTheme } from "../../provider/page";
// import { motion } from "framer-motion";

// // Import images for experience cards
// import hackathonImage from "../../assets/projects/1.png";
// import hotelAppImage from "../../assets/projects/2.jpeg";
// import ecommerceImage from "../../assets/projects/3.webp";
// import javaImage from "../../assets/projects/java-programming-tutorial.jpg";

// export default function ProfessionalJourney() {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <section
//       className={`${isDark ? "bg-gradient-to-b from-[#090F1C] to-[#1A2238]" : "bg-gradient-to-b from-zinc-50 to-white"} py-20 md:py-32 min-h-screen relative overflow-hidden`}
//     >
//       {/* Grid Background */}
//       <div className="absolute inset-0">
//         <div
//           className={`absolute inset-0 ${isDark
//             ? "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
//             : "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]"
//             } bg-[size:3rem_3rem] md:bg-[size:4rem_4rem]`}
//         />
//         <div
//           className={`absolute inset-0 ${isDark
//             ? "bg-gradient-to-r from-[#090F1C] via-transparent to-[#090F1C]"
//             : "bg-gradient-to-r from-zinc-50 via-transparent to-zinc-50"
//             }`}
//         />
//       </div>

//       <div className="@container mx-auto max-w-6xl px-8 md:px-12 lg:px-16 relative">
//         <div className="text-center mb-10">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className={`text-balance text-4xl font-extrabold lg:text-5xl tracking-wide ${isDark ? "text-white" : "text-gray-900"}`}
//           >
//             Professional Journey
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className={`mt-4 text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
//           >
//             A timeline of my achievements and experiences.
//           </motion.p>
//         </div>
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-12 gap-6 md:gap-8 lg:gap-10"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: {
//               opacity: 1,
//               y: 0,
//               transition: {
//                 staggerChildren: 0.2,
//               },
//             },
//           }}
//         >
//           <ExperienceCard
//             title="Hackathon Achievements"
//             company="Multiple Prestigious Institutes"
//             period="2025"
//             image={hackathonImage}
//             description={
//               <>
//                 <ul className="list-disc pl-4 space-y-2">
//                   <li>
//                     🥇 <strong>1st Place</strong> at <strong>Febrithon</strong>, KIIT University – Built an innovative solution under time constraints with real-world impact.
//                   </li>
//                   <li>
//                     🥇 <strong>1st Place</strong> at <strong>Trithon</strong>, Trident Academy – Developed <em>Eviro</em>, an AI-powered tool to reduce carbon emissions in code.
//                   </li>
//                   <li>
//                     🥈 <strong>2nd Place</strong> at <strong>IIT Bhubaneswar Hackathon</strong> – Tackled a web designing problem and solved it within 24 hours with scalable AI solutions.
//                   </li>
//                   <li>
//                     🏅 <strong>Runner-Up</strong> at <strong>IIIT Bhubaneswar Hackathon</strong> – Tackled a web designing problem and solved it within 12 hours, creating a smart automation tool with a focus on performance optimization.
//                   </li>
//                   <li>
//                     Winning the hackathon at KIIT University provided me with the opportunity to launch my startup based on the project idea selected there. The project, an AI-based software application, focuses on reducing carbon emissions and has the potential to create a significant environmental impact.
//                   </li>
//                 </ul>
//               </>
//             }
//             icon={<Code />}
//           />

//           <ExperienceCard
//             title="Full-Stack Developer"
//             company="Hotel Web Application | Intern | Rofabas PMS"
//             period="Sep 2024 - Feb 2025"
//             image={hotelAppImage}
//             description="Built a full-stack application with a dynamic frontend using React.js, styled with Tailwind CSS, and enhanced with React Router, React Toastify, and React features. Backend using Sails.js with MongoDB and MySQL for data management, along with secure authentication using bcrypt.js and JWT."
//             icon={<Code />}
//           />

//           <ExperienceCard
//             title="Mern-Stack Developer"
//             company="TechnoBoot Pvt Ltd | Intern"
//             period="June 2024 - July 2024"
//             image={ecommerceImage}
//             description="Designed and developed a full-stack e-commerce application featuring secure authentication and real-time payment processing. Created RESTful APIs for product management, user registration, login/logout, and order processing. Integrated Cloudinary for image uploads and Stripe for payment gateway functionality."
//             icon={<Briefcase />}
//           />

//           <ExperienceCard
//             title="Java Programming"
//             company="CTTC | Intern"
//             period="June 2023 - July 2023"
//             image={javaImage}
//             description="Acquired strong proficiency in core and advanced Java concepts, including object-oriented programming (OOP), multi-threading, exception handling, and file handling."
//             icon={<Briefcase />}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// interface ExperienceCardProps {
//   title: string;
//   company: string;
//   period: string;
//   description: ReactNode;
//   icon: ReactNode;
//   image?: string;
// }

// const ExperienceCard = ({
//   title,
//   company,
//   period,
//   description,
//   icon,
//   image,
// }: ExperienceCardProps) => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <motion.div
//       className="h-full"
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0 },
//       }}
//     >
//       <Card
//         className={`group h-full ${isDark
//           ? "bg-gradient-to-b from-[#1A2238] to-[#2C3E50] border-gray-700 hover:shadow-blue-500/20"
//           : "bg-gradient-to-b from-white to-gray-100 border-gray-200 hover:shadow-blue-500/10"
//           } rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
//       >
//         {image && (
//           <div className="w-full h-52 overflow-hidden">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
//             />
//           </div>
//         )}
//         <div className="flex flex-col p-6 md:p-7 gap-4">
//           <CardDecorator>
//             <div
//               className={`size-6 ${isDark ? "text-blue-400" : "text-blue-600"}`}
//             >
//               {icon}
//             </div>
//           </CardDecorator>

//           <div className="flex-1">
//             <h3
//               className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
//             >
//               {title}
//             </h3>
//             <div className="flex flex-col gap-2 mt-2">
//               <p
//                 className={`font-medium ${isDark ? "text-blue-400" : "text-blue-600"}`}
//               >
//                 {company}
//               </p>
//               <div
//                 className={`flex items-center gap-1.5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
//               >
//                 <Calendar className="size-4" />
//                 <span className="text-sm">{period}</span>
//               </div>
//             </div>
//             <div className={`mt-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
//               {description}
//             </div>
//           </div>
//         </div>
//       </Card>
//     </motion.div>
//   );
// };

// const CardDecorator = ({ children }: { children: ReactNode }) => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   return (
//     <div
//       className={`relative mx-auto size-24 duration-200 ${isDark
//         ? "[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] group-hover:bg-white/5 group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
//         : "[--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)]"
//         }`}
//     >
//       <div
//         aria-hidden
//         className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(circle_at_center,black_25%,transparent_75%)]"
//       />
//       <div
//         aria-hidden
//         className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--tw-gradient-to)_75%)] animate-pulse-slow opacity-80"
//       />
//       <div
//         aria-hidden
//         className="absolute inset-0 bg-[conic-gradient(from_45deg_at_center,transparent,var(--tw-gradient-to),transparent)] animate-spin-slow opacity-40"
//       />
//       <div
//         className={`absolute inset-0 m-auto flex size-10 items-center justify-center bg-transparent`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };