export const siteConfig = {
  name: "Ella Majkic",
  title: "UBC Engineering Physics Student",
  description: "Portfolio website of Ella Majkic",
  accentColor: "#7c32b8",
  social: {
    email: "ellamaj8@gmail.com",
    linkedin: "https://www.linkedin.com/in/ella-majkic-951527289/",
    github: "https://github.com/emajkic",
  },
  aboutMe:
  "Hi! My name is Ella Majkic. I am a 3rd year Engineering Physics Student at the University of British Columbia pursuing a minor in Honours Mathematics. I am interested in applied mathematics, software development, machine learning, and physics.",
  skills: ["Git", "Python", "Java", "C++", "Linux", "KiCAD", "ROOT", "ROS", "MATLAB"],
  projects: [
    {
      img1: "/robot1.png",
      img2: "/robot1.png",
      slug: "robot-project",
      name: "Autonomous Competition Robot",
      description:
        "Designed and built an autonomous robot to participate in Engineering Physics 259 course competition.",
      skills: ["Circuit Design", "PCB Design", "C++", "Soldering", "Prototyping"],
    },
    {
      img1: "/motor1.jpg",
      img2: "/motor2.jpg",
      slug: "motor-control-project",
      name: "PID Motor Controller",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      skills: ["", "Node.js", "AWS"],
    },
    {
      img1: "/robot1.png",
      img2: "/robot1.png",
      slug: "java-project",
      name: "Java Tic-Tac-Toe GUI Game",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      img1: "/robot1.png",
      img2: "/robot1.png",
      slug: "353-simulation",
      name: "ROS Machine Learning Project",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      slug: "triumf-experience",
      company: "TRIUMF Particle Accelerator",
      title: "Student Research Assistant - PIONEER Experiment",
      dateRange: "Jan 2025 - May 205",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      slug: "opbots-experience",
      company: "UBC Open Robotics Design Team",
      title: "Software Engineer, Navigation Subteam",
      dateRange: "Sept 2023 - May 2025",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      slug: "exp-3",
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University of British Columbia",
      degree: "Bachelor of Applied Science in Engineering Physics",
      dateRange: "2023 - 2028",
      achievements: [
        "2023-2025: Dean's Scholar, Dean's List",
        "2024: Trek Excellence Scholarship",
        "2023-2025: UBC Open Robotics Design Team",
      ],
    },
  ],
};
