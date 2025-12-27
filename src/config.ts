export const siteConfig = {
  name: "Ella Majkic",
  title: "UBC Engineering Physics Student",
  description: "Portfolio website of Ella Majkic",
  accentColor: "#B3E6F9",
  social: {
    email: "ellamaj8@gmail.com",
    linkedin: "https://www.linkedin.com/in/ella-majkic-951527289/",
    github: "https://github.com/emajkic",
  },
  aboutMe1: "Hi! My name is Ella Majkic. I am a 3rd year Engineering Physics Student at the University of British Columbia pursuing a minor in Honours Mathematics. My interests include applied mathematics, software development, machine learning, and physics. I enjoy reading, writing, and learning new things.",
  aboutMe2: "Engineering Physics is a degree which combines the disciplines of electrical engineering, software engineering, mechanical engineering, and pure math and physics. It offers a broad range of hands-on engineering experiences and projects while also providing a strong foundation in advanced physics and math.",
  skills: ["Python", "Git", "Java", "Electronics", "C++", "Linux", "Bash Shell", "KiCAD", "ROOT", "ROS", "MATLAB", "Tensorflow", "Data Analysis", "CMake", "GDB"],
  projects: [
    {
      slug: "machine-learning-project",
      img1: "/ml3.png",
      img2: "/ml4.png",
      img3: "/ml2.png",
      name: "ROS Machine Learning Project",
      description:
        "Applied machine learning, computer vision, and software techniques to develop and train multiple neural networks from scratch to allow a robot to autonomously drive through and solve a puzzle in ROS Gazebo simulation. Achieved perfect score and second place in ENPH 353 course competition.",
      skills: ["CNN", "YOLOv8", "OpenCV", "Imitation Learning", "ROS", "Python", "Linux"],
      link: "https://github.com/avi-guha/ENPH-353-COMPETITION",
    },
    {
      slug: "robot-summer",
      img1: "/robot1.png",
      img2: "/robot2.jpg",
      img3: "/robot3.jpg",
      name: "Autonomous Robot Competition",
      description:
        "Designed, prototyped, and built an autonomous robot to participate in Engineering Physics 253 course competition.",
      skills: ["Circuit Design", "C++", "Soldering", "Software Design", "Prototyping"],
      link_name: "Github Repo",
      link: "https://github.com/emajkic/ENPH_253_Robot.git",
    },
    {
      img1: "/motor1.jpg",
      img2: "/motor3.jpg",
      img3: "/motor2.jpg",
      slug: "motor-project",
      name: "PID Motor Controller",
      description:
        "Built a circuit capable of setting and actively controlling the speed of an electric motor using PI control in hardware.",
      skills: ["Circuitry", "Electrical Design", "Prototyping"],
    },
    {
      img1: "/java1.png",
      img2: "/java2.png",
      img3: "/java3.png",
      slug: "matlab-project",
      name: "PDE Solution Visualizer",
      description:
        "Programmed an interactive partial differential equation solution visualizer using MATLAB, incorporating spatial/temporal boundary conditions and source term inputs.",
      skills: ["MATLAB", "Simulation", "PDEs", "Finite Difference Methods"],
    },
    
  ],
 experience: [
  {
    slug: "triumf-experience",
    company: "TRIUMF Particle Accelerator",
    position: "Student Research Assistant - PIONEER Experiment",
    dateRange: "Jan 2025 - May 2025",
    description:
      "Worked on Purity Monitor Assembly (PUMA) calibration for a rare pion decay experiment.",
  },
  {
    slug: "opbots-experience",
    company: "UBC Open Robotics Design Team",
    position: "Software Engineer, Navigation Subteam",
    dateRange: "Sept 2023 - May 2025",
    description:
      "Programmed autonomous navigation for RoboCup@Home service robot using ROS.",
  },
],
  education: [
    {
      school: "University of British Columbia",
      degree: "Bachelor of Applied Science in Engineering Physics",
      dateRange: "2023 - 2028",
      achievements: [
        "2025: Eric P. Newell Award in Engineering",
        "2023-2025: Dean's Scholar, Dean's List",
        "2024: Trek Excellence Scholarship - Offered to top 5% of students in their undergraduate year",
      ],
      courses: [
        "Machine Learning Project (ENPH 353)",
        "Digital Systems and Microcomputers (CPEN 312)",
        "Applied Probability and Stochastic Processes (MATH 318)",
        "Data Structures and Algorithms (CPEN 211)",
        "Applied Linear Algrebra (MATH 307)",
        "Signals and Systems (ELEC 221)",
        "Partial Differential Equations (MATH 257)",
      ],
    },
  ],
};
