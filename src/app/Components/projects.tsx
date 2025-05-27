'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ProjectModal } from "./ProjectModal";

const projects = [
  // Thesis project Summit-Wear
  {
    title: "Summit-Wear thesis project ",
    description:
      "Thesis project: An outdoor clothing E-commerce Platform with smart recommendations, designed and built entirely by me.",
    image:
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1737033442/SummitWearNoBg_qa98lx.png",
    technologies: [
      "Angular 18",
      "ASP.NET",
      "MSSQL",
      "TailWind",
      "C#",
      "entity Framework",
    ],
    link: "https://github.com/MhatteBoi/SummitWear",
    images: [
      //Logo
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1737033442/SummitWearNoBg_qa98lx.png",
      //Hero
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748101002/Screenshot_2025-05-24_173240_wwchbq.png",
      //Product Page
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748100999/Screenshot_2025-05-24_173314_nlbf3j.png",
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748101000/Screenshot_2025-05-24_173257_zz1xai.png",
      //Admin Page
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748100997/Screenshot_2025-05-24_173334_wgkkiz.png",
      // Folder Structure
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748101773/combined_1_zuwdi1.jpg",

      // Add more project screenshots here
    ],
    process:
      "My thinking from the start was that I needed to understand the tools before I could build something meaningful. I wasn’t just trying to solve a problem—I wanted to learn how to structure an actual app properly. That’s why I began by researching the technologies I planned to use, like how to organize files, set up the backend and frontend, and build something scalable. I didn’t want to jump into coding without a direction. It was more important for me to feel like I had a system in place, even if it wasn’t perfect.",
    learned:
      "I realized that research can’t just happen once at the beginning—it has to keep happening throughout the whole process. Planning turned out to be a much bigger part of development than I expected. I also started seeing how much easier things get when interfaces are well-defined and the API returns clean, expected data. Using existing tools and patterns also helped me avoid overcomplicating things.",
    Features:
      "The project includes a user-friendly interface with a product catalog, smart recommendations based on weather where you live, and an admin panel for managing products, orders and users (A headless CMS sort of). It also features a secure authentication system and a responsive design for mobile users.",
  },
  // Internship project SwapNet
  {
    title: "SwapNet (internship project: active)",
    description:
      "An item trading platform with AI valuation using Firebase Cloud Functions. A real app going live soon! so stay tuned!",
    image:
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1737291120/Untitled_x3voax.png",
      
    technologies: ["NextJs", "React", "Firebase", "ShadCn", "Tailwind", "TypeScript", "Cloud Functions"],
    images: [
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1737291120/Untitled_x3voax.png",
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748173574/Screenshot_2025-05-25_112135_bvkgq1__l_image_upload_Screenshot_2025-05-25_112152_jwy0qu_c_scale_fl_relative_w_0.50_o_100_fl_layer_apply_g_south_west_x_0.03_y_0.04_zttddy.png"
      // Add more project screenshots here
    ],
    process:
      "When jumping in to an already started project I knew I had to get up to speed quickly. I started by reviewing the existing codebase, understanding the architecture, and identifying areas where I could contribute effectively. I focused on learning how Firebase Cloud Functions were integrated and how the team worked together to make the development smooth.",
    learned:
      "Working with Firebase Cloud Functions, was a significant learning experience. I gained expertise in real-time data synchronization and learned how to optimize cloud function performance. One big part of this internship, was to understand how important open and continious communication is within a team, especially when working on a live project.",
    Features:
      "This platform allows users to trade items securely, with AI-driven valuation to ensure fair trades. It features real-time updates, user authentication, and a responsive design for seamless trading experiences across devices.",
  },
  // Personal project DiscBot
  {
    title: "AI-powered chatbot",
    description:
      "An Chatbot that plays music, answers questions, creates images, scans PDF:s created for fun and to explore the capabilities of AI.",
    image:
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1737032955/DiscBot_tpey9n.png",
    technologies: ["Python", "OpenAi", "API", "Discord.py", "Torch"],
        images: [
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1737032955/DiscBot_tpey9n.png",
    ],
    process:
      "This is a smaller project I and a friend wanted to explore the capabilities of AI in creating a versatile chatbot. I started by researching how to integrate OpenAI's API with Python, focusing on building a chatbot that could perform various tasks like playing music, answering questions, and generating images.",
    learned:
      "This project taught me how to integrate AI into practical applications. I learned how to Write pythonic code and use python libraries ",
    Features:
      "This project showcases my ability to integrate AI into practical applications. The chatbot can play music, answer questions, and create images using OpenAI's API. It demonstrates how AI can enhance user interactions and provide valuable assistance in various tasks.",
  },
  // Client project Divine Healing
  {
    title: "Divine Healing by Rose - (work in progress)",
    description:
      "This is my first client job, where I made a site/app for a client where she can sell healing services.",
    image:
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748175372/logo-Photoroom_1_uh1ob7.png",
    technologies: ["SvelteKit", "Supabase", "Tailwind", "TypeScript", "Postgres"],
            images: [
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748175372/logo-Photoroom_1_uh1ob7.png",
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748188719/Screenshot_2025-05-25_164556_pp6jyu.png"
     
    ],
    process:
      "This project started as a personal endeavor to help my client establish her online presence. I began by discussing her needs and preferences, which led to the decision to use SvelteKit for its simplicity and performance. I focused on creating a clean, user-friendly interface that would allow her to showcase her services effectively.",
    learned:
      "This project taught me how to work with clients and understand their needs. I loved setting upp a project board where she could be a part of it with inspiration and ideas, to keep us both updated. This is just the start so there is a lot more to learn as we continue to develop the site.",
    Features:
      "The website features a clean and modern design, showcasing her healing services. It includes a booking system, service descriptions, and a contact form. Features that are planned is a membership system and a lot of interactivity for users and a Admin dashboard for her to manage bookings and content.",
  },
  // Group project
  {
    title: "ICG - Group project",
    description:
      "This is the second Group project where we made an online shop for buying game keys, working in agile methods. ",
    image:
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1737039162/ICG-1920x968_fuo71y.jpg",
    technologies: ["Blazor / RazorPages", "ASP .NET", "C#", "MSSQL"],
    link: "https://github.com/MhatteBoi/In-Codenito-Games",
  },
  // Portfolio project
  {
    title: "First portfolio",
    description:
      "My first portfolio I made in TUC School, made in HTML/CSS/JS. Where other projects are shown as well. It's in Swedish due to school being in Sweden ",
    image:
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1737212811/PortFirst_ulscdh.png",
    technologies: ["HTML", "CSS", "JavaScript", "Click the image to see it"],
    link: "/oldportfolio/page.HTML", 
  },
    {
    title: "Passion project",
    description:
      "This is a passion project im making, I wont tell too much about it yet, but it will be a app that helps you with your daily life and maybe inspire others to make a difference.",
    image:
      "https://res.cloudinary.com/dm3vmtten/image/upload/v1748191974/Logo-Photoroomsymbol_big_mc74an.png",
    technologies: ["Supabase", "SvelteKit", "Tailwind", "Postgres"],
  
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-10 md:px-0 ">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My projects
        </h2>
        <div className="shadow-[0px_0px_65px_15px_rgba(4,165,205,0.2)] -z-10"></div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  [&>*:last-child]:lg:col-start-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-md border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  loading="lazy" 
                  width={300}
                  height={200}
                  className="w-full object-scale-down md:object-contain h-44  hover:shadow-[0px_-5px_22px_0px_rgba(173,15,194,1)] transition-all duration-700 "
                />
              </a>
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <div className="w-full flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-purple-600 text-white"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {(project.process ||
                  project.learned ||
                  project.Features) && (
                    <ProjectModal
                      title={project.title}
                      process={project.process}
                      learned={project.learned}
                      improvements={project.Features}
                      images={project.images}
                    />
                  )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
