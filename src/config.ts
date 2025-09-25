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
  // My past experience includes working as a student research assistant at TRIUMF, where I worked with a rare pion decay experiment group. I also worked as a member of the Software subteam at UBC Open Robotics (a student design team), developing navigation software for an autonomous helper robot.  
  "Hi! My name is Ella Majkic. I am a 3rd year Engineering Physics Student at the University of British Columbia pursuing a minor in Honours Mathematics. I am interested in applied mathematics, software development, machine learning, and physics.",
  skills: ["Git", "Python", "Java", "C++", "Linux", "KiCAD", "ROOT", "ROS", "MATLAB"],
  projects: [
    {
      img1: "/robot1.png",
      img2: "/robot2.jpg",
      img3: "/robot3.jpg",
      slug: "robot-project",
      name: "Autonomous Competition Robot",
      description:
        "Designed, prototyped, and built an autonomous robot to participate in Engineering Physics 253 course competition.",
      skills: ["Circuit Design", "C++", "Soldering", "Software Design", "Prototyping"],
    },
    {
      img1: "/motor1.jpg",
      img2: "/motor3.jpg",
      img3: "/motor2.jpg",
      slug: "motor-project",
      name: "PID Motor Controller",
      description:
        "Built a circuit capable of setting and actively controlling the speed of an electric motor using PI control.",
      skills: ["Circuitry", "Electrical Design", "Prototyping"],
    },
    {
      img1: "/java1.png",
      img2: "/java2.png",
      img3: "/java3.png",
      slug: "java-project",
      name: "Java Tic-Tac-Toe GUI Game",
      description:
        "Programmed an interactive tic-tac-toe GUI game using Java.",
      skills: ["Java", "Object Oriented Programming", "GUI design"],
    },
    
    //add ROS ENPH353 project
    
  ],
  experience: [
    {
      slug: "triumf-experience",
      company: "TRIUMF Particle Accelerator",
      position: "Student Research Assistant - PIONEER Experiment",
      dateRange: "Jan 2025 - May 2025",
      pdf1: "/final_report.pdf",
      pdf2: "/final_poster.pdf",
      para1: "During my time at TRIUMF, I worked with the PIONEER group on a rare pion decay experiment. The experiment is to be conducted in a large liquid xenon (LXe) calorimeter, and of utmost importance is to be able to monitor the purity levels of the xenon at all times during the experiment. To acheive this, I was invovled with the development of a Purity Monitor Assembly (PUMA) and its calibration device (little PUMA) to be used in high-precision experiments with LXe calorimeters.",
      para2: "I conducted physics simulations of PUMA to better understand particle behaviour inside the assembly in various media. I used COMSOL multiphysics to perform electrostatic finite element analysis on the CAD model of PUMA. I also wrote C++ scripts in Linux using Garfield++, a library written by CERN for detailed simulation of particle detectors. Some results are shown below.",
      img1_1: "/java3.png",
      img1_2: "/java3.png",
      img1_3: "/java3.png",
      bullets: [
        "Worked on Purity Monitor Assmebly (PUMA) instrument for a rare pion decay experiment (PIONEER)",
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
        "Developed Python scripts to program autonomous navigation of service robot for International RoboCup@Home competition",
        "Worked with ROS (Robot Operating System) in Linux Ubuntu 20.04 distrubution",
        "Collaborated with large student team to achieve group goals",
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
