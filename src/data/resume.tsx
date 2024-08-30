import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Siddharth Gupta",
  initials: "DV",
  url: "https://portfoliosid007.netlify.app",
  location: "Delhi, India",
  locationLink: "/",
  description:
    "I turn Coffee into Code. I am a Software Developer with a passion for building scalable and efficient web applications.",
  summary:
    "I bring a passion for scaling Software Developement and a deep understanding of the latest technologies. I have experience in building and deploying web applications",
  avatarUrl: "/image3.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "C++",
    "MATLAB",
    "Prompt Engineering",
    "Python",
    "MongoDB",
    "Docker",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "siddharthguptaatwork@gmail.com",
    tel: "+91 9267963125",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sid0000007b",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/siddharthgupta007/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/siddgupta007",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@SiddharthEarth",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Eventory Pvt Ltd",
      href: "https://eventory.com",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer Intern",
      logoUrl: "/eventory.png",
      start: "May 2024",
      end: "July 2024",
      description:
        "Developed 27 schema tables for the product backend, improving workflow efficiency by 50%. Enhanced user experience by coding multiple frontend screens and components, resulting in a 30% increase in session duration. Contributed over 200 commits, ensuring continuous integration and delivery via a CI/CD pipeline. Migrated all assets to AWS S3, boosting asset management reliability by 90% and reducing site load time by 500ms.",
    },
    {
      company: "Alpha Humans",
      href: "https://alphahumans.org",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer Intern",
      logoUrl: "/alphahumans.png",
      start: "March 2024",
      end: "July 2024",
      description:
        "Contributed to a non-profit initiative aimed at solving blood shortages in India by developing a web platform using React.js and Node.js. Created user authentication systems and integrated backend APIs for seamless communication between blood donors and recipients. Helped establish a more efficient blood donation process, ensuring timely assistance to those in need.",
    },
  ],
  education: [
    {
      school: "USICT, Guru Gobind Singh Indraprastha University",
      degree: "Bachelor's of Technology in Computer Science Engineering",
      cgpa: "CGPA - 7.75",
      location: "Dwarka, Delhi",
      start: "Nov 2022",
      end: "Dec 2026",
      logoUrl: "/ipu.png",
    },
    {
      school: "Sarvodaya Co-ed Vidyalaya",
      degree: "(10+2)th, 87%, PCM",
      location: "Hari Nagar, Delhi",
      start: "Apr 2020",
      end: "Jun 2022",
    },
  ],
  projects: [
    {
      title: "E-Commerce Web App",
      href: "https://adifrontv4.netlify.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Created an Admin Panel for updating and listing products on the frontend, making it easier for sellers. Developed REST APIs for fetching product details from the database to the React frontend. Implemented SignUp and Login (Google auth) features using the Clerk Auth provider. Maintained responsiveness and enhanced user experience using Tailwind CSS, Flowbite, and Mamba UI.",
      technologies: [
        "React.js",
        "Node.js",
        "Strapi CMS",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://adifrontv4.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sid0000007/Adifront",
          icon: <Icons.github className="size-3" />,
        },
      ],
      "image": "/adidas.gif",
    },
    {
      title: "MocBot AI Chatbot",
      href: "https://sid0000007.github.io/mocbot-AI/templates/index.html",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed an intelligent AI chatbot using Python for the Smart India Hackathon 2023. Powered by OpenAI (Turbo 3.5) using AJAX and trained for the Ministry of Coal. Leveraged LangChain to prompt the chatbot and generate customized responses. Utilized Git and GitHub for version control and seamless collaboration with a team of 6 developers.",
      technologies: [
        "JavaScript",
        "Flask",
        "OpenAI API",
        "LangChain",
      ],
      links: [
        {
          type: "Website",
          href: "https://sid0000007.github.io/mocbot-AI/templates/index.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sid0000007/mocbot-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:"/mocbot.png"
    },
    {
      title: "Food-pricing-API",
      href: "https://food-delivery-price-1.onrender.com/api-docs/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Calculated delivery costs dynamically based on zone, organization, distance, and food type using POST. Comprehensive API documentation for easy understanding, testing, and integration using Swagger UI. Utilized Node.js for robust server-side logic and RESTful API development.",
      technologies: [
        "Node.js",
        "Express.js",
        "Postgres",
        "Swagger",
      ],
      links: [
        {
          type: "Website",
          href: "https://food-delivery-price-1.onrender.com/api-docs/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sid0000007/FOOD_CAL_API",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:"/food_API.png"
    },
    {
      title: "RealTimeCollab Text Editor",
      href: "https://google-docs-sid.netlify.app/docs/514d0ff4-ccb0-4d69-a45a-fa7a9b6c06df",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a Real-time Collaborative Text Editor platform like Google Docs where users can collaborate. Instant data changes reflect over other users using Socket.io. Saved user data every 2000ms and in real-time in MongoDB, solving the threat of losing data.",
      technologies: [
        "React.js",
        "Socket.io",
        "Node.js",
        "Quill",
      ],
      links: [
        {
          type: "Website",
          href: "https://google-docs-sid.netlify.app/docs/514d0ff4-ccb0-4d69-a45a-fa7a9b6c06df",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sid0000007/RealTime-Text-Editor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/editor_image.png",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
  ],
} as const;
