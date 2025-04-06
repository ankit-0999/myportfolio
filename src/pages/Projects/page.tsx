import { Github, ExternalLink } from "lucide-react";
import Elern from "@/assets/projects/prd1.png";
import pms  from "@/assets/projects/pms.png";
import airbnb from "@/assets/projects/airbnb.png";
import foodDeliveryImage from "@/assets/projects/foodDeliveryImage.png";
import getMeAChaiImage from "@/assets/projects/fund.png";
import snakeAIImage from "@/assets/projects/snake.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const projects = [
    {
      title: "E-Learning Platform",
      description:
        "A full-stack online education system with role-based access for Admins, Faculty, and Students. Built using Next.js 14, Express.js, and MongoDB, it includes features like course management, assignments, quizzes, grading, and performance tracking. Secure JWT-based authentication with refresh tokens ensures smooth user sessions.",
      tags: ["Next.js", "Express.js", "MongoDB", "Full-Stack", "JWT Auth"],
      links: {
        github: "https://github.com/ankit-0999/learning",
        demo: "https://your-deployment-link.com",
      },
      image: Elern,
      featured: true,
    },
    
    {
      title: "Property Management System ",
      description:
        "A modern, full-featured platform for managing properties with tools for reservations, room monitoring, and financial folio handling. Built with React, Redux, Node.js, and SQL, PMS simplifies operations for property managers through real-time updates and an intuitive UI powered by NextUI. Developed collaboratively by a team of 7 employee interns — I contributed as a backend developer, focusing on secure API development and data handling.",
      tags: ["React", "Node.js", "Redux", "SQL", "NextUI"],
      links: {
        github: "https://github.com/ankit-0999/Property-Management-System.git",
        demo: "http://localhost:5173", // Replace with deployed URL if available
      },
      image: pms, // Replace with your image variable
      featured: true,
    },
    
    {
      title: "Wanderlust",
      description:
        "Wanderlust is a full-featured travel listing web app built with Node.js, Express, MongoDB, and EJS. It allows users to create, review, and manage travel destinations. Features include user authentication with Passport.js, secure session management, CRUD operations for listings, and review systems with ratings. Built with scalable architecture and robust middleware support.",
      tags: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js"],
      links: {
        github: "https://github.com/ankit-0999/AirbnbClone", // Replace with actual link
        demo: "http://localhost:8080", // Replace with deployed link if any
      },
      image: airbnb, // Replace with actual image variable
      featured: true,
    },
    {
      title: "Food Delivery App",
      description:
        "A full-stack food delivery platform with a user-friendly frontend, robust backend, and a dedicated admin panel. Users can browse food items, place orders via Cash or Stripe, and track their order history. Admins can manage food items and order statuses. Built with React, Node.js, Express, and MongoDB.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      links: {
        github: "https://github.com/ankit-0999/zomato.git", // Replace with actual GitHub link
        demo: "https://your-food-app-demo-link.com", // Optional: Replace with actual deployed link
      },
      image: foodDeliveryImage, // Replace with a variable or URL of a project screenshot
      featured: true
    },

    {
      title: "Get Me A Chai",
      description:
        "A crowdfunding platform where fans can support creators by buying them a chai. Built with Next.js, MongoDB, and Razorpay, it features GitHub authentication, custom donation pages, dashboards, and a top supporters leaderboard. It ensures secure payments and a personalized creator experience.",
      tags: ["Next.js", "MongoDB", "Razorpay", "NextAuth", "Tailwind CSS"],
      links: {
        github: "https://github.com/ankit-0999/funding-web-app.git", // Replace with your actual GitHub repo
        demo: "https://getmechai.vercel.app", // Optional: Replace with live deployed link if available
      },
      image: getMeAChaiImage, // Use a screenshot of the app or hosted image URL
      featured: true
    },

    {
      title: "Snake AI with PyTorch",
      description:
        "A self-learning Snake game where an AI agent is trained using Deep Q-Learning. Built with PyTorch and Pygame, the AI learns to improve over time through rewards, while training progress is visualized in real-time. Includes manual play mode, model saving, and training plot visualization.",
      tags: ["Python", "PyTorch", "Reinforcement Learning", "Pygame", "AI"],
      links: {
        github: "https://github.com/ankit-0999/Snake-Game-AI-Bot-.git", // Replace with your actual repo
        demo: "", // Leave empty or add video/demo link if available
      },
      image: snakeAIImage, // Replace with a screenshot or hosted image URL of the game or training plot
      featured: false
    }
    
    
    
    
  ];

  return (
    <div
      className={`pt-40 min-h-screen p-8 ${
        isDarkMode
          ? "bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-slate-100"
          : "bg-gradient-to-b from-[#f0f4f8] via-[#e2e8f0] to-[#cbd5e1] text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card
              className={`md:w-1/2 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6 ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-gray-900"
                  : "bg-gradient-to-br from-white to-gray-100"
              }`}
            >
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle
                      className={`text-3xl font-bold ${
                        isDarkMode ? "text-slate-100" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p
                  className={`mb-6 text-lg leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
