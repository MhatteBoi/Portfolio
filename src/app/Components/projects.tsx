import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Platform Summit-Wear (active)",
    description: "Thesis project: An outdoor clothing store with smart recommendations, designed and built entirely by me.",
    image: "https://res.cloudinary.com/dm3vmtten/image/upload/v1737033442/SummitWearNoBg_qa98lx.png",
    technologies: ["Angular 18", "ASP .NET", "MSSQL", "TailWind" ],
    link: "https://github.com/MhatteBoi/SummitWear"
  },
  {
    title: "SwapNet (internship project: Active)",
    description: "An app where you trade item for another item, and get ai generated prices to help get the value for your item, using Firebase Cloud functions. A real app going live soon!",
    image: "https://res.cloudinary.com/dm3vmtten/image/upload/v1737291120/Untitled_x3voax.png",
    technologies: ["NextJs", "React", "Firebase", "ShadCn"],
  },
  {
    title: "AI-powered Chatbot",
    description: "An Chatbot that plays music, answers questions, creates images, scans PDF:s To help you and your friends or Team. Go to my Wordpress site to see how it works!",
    image: "https://res.cloudinary.com/dm3vmtten/image/upload/v1737032955/DiscBot_tpey9n.png",
    technologies: ["Python","OpenAi", "API"],
  },
  {
    title: "My Wordpress site",
    description: "This is my portfolio but made in wordpress where i use Kubio as theme",
    image: "https://res.cloudinary.com/dm3vmtten/image/upload/v1737036035/signature2White1_hzioqv.png",
    technologies: ["Wordpress", "Kubio"],
    link: "https://roswall.dev/"
  },
  {
    title: "ICG - Group Project",
    description: "This is the second Group project where we made an online shop for buying game keys, working in agile methods. ",
    image: "https://res.cloudinary.com/dm3vmtten/image/upload/v1737039162/ICG-1920x968_fuo71y.jpg",
    technologies: ["Blazor / RazorPages", "ASP .NET","C#", "MSSQL"],
    link: "https://github.com/MhatteBoi/In-Codenito-Games"
  },
  {
    title: "First Portfolio",
    description: "My first portfolio i made in TUC School, made in HTML/CSS/JS. Where other projects are shown as well. It's in Swedish due to school being in Sweden ",
    image: "https://res.cloudinary.com/dm3vmtten/image/upload/v1737212811/PortFirst_ulscdh.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://portfolio-mhattias-roswalls-projects.vercel.app/oldportfolio/page.html" // changes when its live,
  },
]

export function Projects() {
  return (
    
    <section id="projects" className="py-20 px-10 md:px-0 ">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
        <div className="shadow-[0px_0px_65px_15px_rgba(4,165,205,0.2)] -z-10"></div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-md border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full object-scale-down md:object-cover h-48  hover:shadow-[0px_-5px_22px_0px_rgba(173,15,194,1)] transition-all duration-700 "
              />
              </a>
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-purple-600 text-white">{tech}</Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-5">Dont Forget to check my <a href="https://github.com/MhatteBoi" className="text-teal-500 hover:underline">Github!</a></p>
      </div>
      
    </section>
  )
}

