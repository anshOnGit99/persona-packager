import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, Building, Award, Code, Database, Globe, Server, Smartphone, Layers, Zap, Brain } from "lucide-react";

export const personalInfo = {
  name: "Ansh Ahuja",
  title: "Software Developer",
  tagline: "Passionate about creating innovative web solutions and delivering exceptional user experiences",
  bio: "I'm a dedicated software developer with expertise in full-stack web development, mobile applications, and cloud technologies. I love solving complex problems and building scalable, user-friendly applications that make a real impact.",
  location: "Bengaluru, India",
  email: "anshahuja3199@gmail.com",
  phone: "+91-8979314326",
  availability: "Available for opportunities",
  
  social: {
    github: "https://github.com/anshahuja",
    linkedin: "https://linkedin.com/in/anshahuja",
    email: "mailto:anshahuja3199@gmail.com"
  },

  navigation: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]
};

export const experience = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    position: "Systems Engineer",
    duration: "Aug 2023 - Present",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Working on enterprise-level web applications and contributing to digital transformation initiatives.",
    highlights: [
      "Developed and maintained full-stack web applications using React, Node.js, and cloud technologies",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Implemented best practices for code quality, testing, and deployment processes",
      "Participated in agile development methodologies and continuous integration workflows"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Git"],
    icon: Building
  }
];

export const skills = {
  categories: [
    {
      name: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 90, category: "Frontend" },
        { name: "TypeScript", level: 85, category: "Frontend" },
        { name: "JavaScript", level: 90, category: "Frontend" },
        { name: "HTML/CSS", level: 95, category: "Frontend" },
        { name: "Tailwind CSS", level: 85, category: "Frontend" },
        { name: "Next.js", level: 80, category: "Frontend" }
      ]
    },
    {
      name: "Backend Development", 
      icon: Server,
      skills: [
        { name: "Node.js", level: 85, category: "Backend" },
        { name: "Express.js", level: 80, category: "Backend" },
        { name: "Python", level: 75, category: "Backend" },
        { name: "REST APIs", level: 85, category: "Backend" }
      ]
    },
    {
      name: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80, category: "Database" },
        { name: "MySQL", level: 75, category: "Database" },
        { name: "AWS", level: 70, category: "Cloud" },
        { name: "Firebase", level: 75, category: "Cloud" }
      ]
    },
    {
      name: "Mobile Development",
      icon: Smartphone, 
      skills: [
        { name: "React Native", level: 75, category: "Mobile" },
        { name: "Flutter", level: 70, category: "Mobile" },
        { name: "Android", level: 65, category: "Mobile" }
      ]
    },
    {
      name: "Tools & Others",
      icon: Layers,
      skills: [
        { name: "Git", level: 85, category: "Tools" },
        { name: "Docker", level: 70, category: "Tools" },
        { name: "Figma", level: 75, category: "Design" },
        { name: "Postman", level: 80, category: "Tools" }
      ]
    }
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with modern UI/UX, secure payment integration, and real-time inventory management.",
    longDescription: "Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, order management, and payment processing. Implemented advanced features like product recommendations, real-time notifications, and analytics dashboard.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redux"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process", 
      "Payment integration with Stripe",
      "Order tracking and management",
      "Admin dashboard with analytics"
    ],
    github: "https://github.com/anshahuja/ecommerce-platform",
    live: "https://ecommerce-demo.com",
    status: "Completed",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive project organization.",
    longDescription: "Developed a modern task management solution with drag-and-drop functionality, real-time collaboration, file attachments, and comprehensive project tracking capabilities.",
    image: "/placeholder.svg", 
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task organization",
      "File attachments and comments",
      "Project timeline and milestones",
      "Team member management",
      "Mobile responsive design"
    ],
    github: "https://github.com/anshahuja/task-manager",
    live: "https://taskmanager-demo.com",
    status: "In Progress",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather App",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed meteorological data visualization.",
    longDescription: "Created an elegant weather application featuring current conditions, 7-day forecasts, weather maps, and location-based services with a focus on user experience and data visualization.",
    image: "/placeholder.svg",
    technologies: ["React Native", "OpenWeather API", "Maps API", "Redux"],
    features: [
      "Current weather conditions",
      "7-day weather forecast", 
      "Interactive weather maps",
      "Location-based services",
      "Weather alerts and notifications",
      "Offline data caching"
    ],
    github: "https://github.com/anshahuja/weather-app",
    live: "https://weather-demo.com",
    status: "Completed", 
    category: "Mobile"
  }
];

export const achievements = [
  {
    title: "Best Innovation Award",
    organization: "TCS Hackathon 2024",
    date: "2024",
    description: "Won first place for developing an AI-powered solution for employee productivity enhancement"
  },
  {
    title: "Certified React Developer", 
    organization: "Meta",
    date: "2023",
    description: "Successfully completed advanced React development certification"
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2023", 
    description: "Certified in AWS cloud services and best practices"
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer at TCS",
    content: "Ansh is an exceptional developer with a keen eye for detail. His problem-solving skills and dedication to quality make him a valuable team member.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Mike Chen", 
    role: "Product Manager",
    content: "Working with Ansh has been a pleasure. He consistently delivers high-quality work and brings innovative solutions to challenging problems.",
    avatar: "/placeholder.svg"
  }
];