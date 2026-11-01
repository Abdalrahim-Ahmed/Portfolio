export const portfolioData = {
  name: "Abdalrahim Ahmed",
  fullName: "Abdalrahim Ahmed Abdalrahim Ali",
  nameSplit: ["ABDALRAHIM", "AHMED"],
  role: "FRONTEND DEVELOPER",
  subRoles: ["FRONTEND DEVELOPER", "COMPUTER SCIENCE"],
  tagline: "Building modern, responsive, and user-friendly web applications.",
  availability: "AVAILABLE FOR WORK",
  locationBadge: "QENA, EGYPT • AVAILABLE WORLDWIDE",
  bio: "I am a Frontend Developer and a Computer Science student at Qena University, Faculty of Computers and Information. I have practical experience developing web projects from scratch, building responsive interfaces, and working with modern frontend technologies.",
  
  stats: [
    { value: "Good", label: "FRONTEND LEVEL\n(PRACTICAL)" },
    { value: "3", label: "FEATURED WEB\nPROJECTS" },
    { value: "2027", label: "EXPECTED\nGRADUATION" }
  ],

  // 3. Technical Skills (Strictly from user list)
  skillsCategories: [
    {
      category: "Frontend Development",
      description: "Practical component architecture, responsive styling, and modern UI engineering.",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
      levelBadge: "Level: Good"
    },
    {
      category: "Programming",
      description: "Core algorithms, data manipulation, and programming foundations.",
      skills: ["Python"],
      levelBadge: "Core"
    }
  ],

  // 4. Featured Projects
  projects: [
    {
      id: "01",
      title: "SALLAHLY",
      subtitle: "Home Maintenance Platform",
      category: "ON-DEMAND HOME SERVICES",
      description: "A trusted home maintenance platform serving New Cairo, facilitating scheduling and booking for AC maintenance, electrical, plumbing, and home appliance servicing.",
      contributions: [
        "Developed the complete homepage interface with responsive layout and Arabic RTL alignment.",
        "Implemented security-related functionality and input validation on the homepage.",
        "Contributed effectively within a team project environment.",
        "Completed and delivered assigned frontend tasks within 3 days."
      ],
      turnaround: "Completed in 3 Days • Team Project",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      image: "/assets/project2_sallahly.png",
      liveUrl: "https://sallahly-nine.vercel.app/",
      githubUrl: "https://github.com/Abdalrahim-Ahmed/sallahly",
      stats: { client: "Salla7ly Team", year: "2024", timeline: "3 Days" }
    },
    {
      id: "02",
      title: "TRUFORM",
      subtitle: "E-Commerce Website",
      category: "NATURAL SKIN & HAIR CARE",
      description: "A modern natural skin and hair care e-commerce web application, built to help customers discover personalized routines and purchase organic products with confidence.",
      contributions: [
        "Built the entire website from scratch with modern component architecture.",
        "Responsible for overall frontend development and complete website functionality.",
        "Delivered mobile-first responsive design, interactive catalog browsing, and cart flows.",
        "Completed the full project development cycle within 7 days."
      ],
      turnaround: "Completed in 7 Days • From Scratch",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      image: "/assets/project1_truform.png",
      liveUrl: "https://truform.vercel.app/",
      githubUrl: "https://github.com/Abdalrahim-Ahmed/truform",
      stats: { client: "TRUFORM", year: "2024", timeline: "7 Days" }
    },
    {
      id: "03",
      title: "RABIIT",
      subtitle: "Web Delivery Project",
      category: "ON-DEMAND GROCERY DELIVERY",
      description: "A high-speed grocery and fresh food delivery web experience featuring product categories, promotional deals banners, basket management, and localized interface.",
      contributions: [
        "Designed and developed the entire website completely from scratch.",
        "Completed the development challenge in approximately 2 hours.",
        "Demonstrated the ability to deliver clean, production-ready code under tight time constraints.",
        "Structured clean semantic markup and responsive styling with fluid usability."
      ],
      turnaround: "Completed in ~2 Hours • Speed Challenge",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      image: "/assets/project3_rabbit.png",
      liveUrl: "https://rabiit.vercel.app/index.html",
      githubUrl: "https://github.com/Abdalrahim-Ahmed/rabbit",
      stats: { client: "Rabiit Project", year: "2024", timeline: "2 Hours" }
    }
  ],

  // 5. Leadership & Activities
  leadership: {
    organization: "Students for Egypt",
    entity: "Faculty of Computers and Information – Qena University",
    summary: "Demonstrated growth through progressive leadership roles, driving human resources management, talent interviews, team allocation, and organizational performance.",
    journey: [
      {
        year: "Third Year",
        role: "Coordinator",
        badge: "Current Leadership",
        desc: "Coordinating strategic student initiatives, aligning committee goals, and steering cross-functional execution."
      },
      {
        year: "Second Year (2nd Term)",
        role: "Head of HR",
        badge: "Department Lead",
        desc: "Led the entire Human Resources committee, managing committee members and overseeing talent development."
      },
      {
        year: "Second Year (1st Term)",
        role: "Vice Head of HR",
        badge: "Executive Leadership",
        desc: "Assisted HR departmental management, organized recruitment interviews, and monitored team engagement."
      },
      {
        year: "First Year",
        role: "Active Member",
        badge: "Foundation",
        desc: "Actively contributed to student activities, teamwork workshops, and university event execution."
      }
    ],
    responsibilities: [
      "Managing and coordinating the Human Resources team operations and regular meetings.",
      "Organizing and conducting structured recruitment interviews for incoming student applicants.",
      "Distributing and onboarding selected members strategically across functional teams.",
      "Monitoring team performance, engagement, and operational workflows.",
      "Evaluating members objectively and following up continuously on their progress and development."
    ]
  },

  // 6. Training & Certifications
  training: [
    {
      title: "Frontend Development Training",
      issuer: "Specialized Practical Track",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Python Training",
      issuer: "Programming Foundations Track",
      skills: ["Python", "Algorithms", "Problem Solving"]
    },
    {
      title: "Fundamental Cybersecurity Training",
      issuer: "Security Principles Track",
      skills: ["Web Security Basics", "Safe Coding", "Threat Awareness"]
    }
  ],

  // 7. Education
  education: [
    {
      degree: "Computer Science Student (B.Sc.)",
      institution: "Faculty of Computers and Information – Qena University",
      period: "Expected Graduation: 2027",
      details: "Focusing on Software Engineering, Data Structures, Algorithms, and Modern Web Systems."
    }
  ],

  workProcess: [
    {
      step: "01",
      icon: "Search",
      title: "DISCOVER",
      desc: "Understanding project requirements, user needs, and architecture."
    },
    {
      step: "02",
      icon: "Lightbulb",
      title: "STRUCTURE",
      desc: "Planning responsive layout hierarchy, component boundaries, and state."
    },
    {
      step: "03",
      icon: "Code",
      title: "DEVELOP",
      desc: "Writing clean, maintainable React.js and Tailwind CSS code."
    },
    {
      step: "04",
      icon: "PenTool",
      title: "TEST & REFINE",
      desc: "Testing across screen sizes, verifying keyboard accessibility, and polish."
    },
    {
      step: "05",
      icon: "Send",
      title: "DELIVER",
      desc: "Deploying high-performance, responsive web applications on Vercel."
    }
  ],

  quoteCard: {
    quote: "Building modern, responsive web applications with clean code and practical user focus.",
    signature: "Abdalrahim Ahmed",
    bottomText: "READY FOR NEW FRONTEND CHALLENGES."
  },

  contact: {
    title: "LET'S WORK TOGETHER",
    subtitle: "I am a Frontend Developer looking for opportunities to contribute, build, and grow. Let's discuss your next web project.",
    cta: "AVAILABLE FOR WORK",
    email: "abdalraheem2006a@gmail.com",
    phone: "+20 109 460 3454",
    location: "Qena, Egypt",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/abdalrahim-ahmed-71175127a/" },
      { name: "GitHub", url: "https://github.com/Abdalrahim-Ahmed" }
    ]
  }
};
