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
  "Hi! My name is Ella Majkic. I am a 3rd year Engineering Physics Student at the University of British Columbia pursuing a minor in Honours Mathematics. I am interested in applied mathematics, software development, machine learning, and physics. My past experience includes working as a student research assistant at TRIUMF, where I worked with a rare pion decay experiment group. I also worked as a member of the Software subteam at UBC Open Robotics (a competitive student design team), developing navigation software for an autonomous helper robot.",
  skills: ["Git", "Python", "Java", "C++", "Linux", "KiCAD", "ROOT", "ROS", "MATLAB"],
  projects: [
    {
      img1: "/robot1.png",
      img2: "/robot2.jpg",
      img3: "/robot3.jpg",
      slug: "robot-project",
      name: "Autonomous Competition Robot",
      description:
        "Designed and built an autonomous robot to participate in Engineering Physics 253 course competition.",
      skills: ["Circuit Design", "C++", "Soldering", "Software Design", "Prototyping"],
    },
    {
      img1: "/motor1.jpg",
      img2: "/motor2.jpg",
      img3: "/robot1.png",
      slug: "motor-control-project",
      name: "PID Motor Controller",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      skills: ["", "Node.js", "AWS"],
    },
    {
      img1: "/robot1.png",
      img2: "/robot1.png",
      img3: "/robot1.png",
      slug: "java-project",
      name: "Java Tic-Tac-Toe GUI Game",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      img1: "/robot1.png",
      img2: "/robot1.png",
      img3: "/robot1.png",
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
      position: "Student Research Assistant - PIONEER Experiment",
      dateRange: "Jan 2025 - May 2025",
      pdf1: "/final_report.pdf",
      pdf2: "/final_poster.pdf",
      para1: "text1",
      bullets: [
        "Worked on Purity Monitor Assmebly (PUMA) instrument for a rare pion decay experiment, PIONEER"
        "Developed physics simulations of particle behaviour in PUMA",
        "Designed and assembled a vacuum system for PUMA testing",
      ],
    },
    {
      slug: "opbots-experience",
      company: "UBC Open Robotics Design Team",
      position: "Software Engineer, Navigation Subteam",
      dateRange: "Sept 2023 - May 2025",
      para1: "text1",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
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
