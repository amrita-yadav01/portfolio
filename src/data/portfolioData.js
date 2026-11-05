export const portfolioData = {
  personal: {
    name: "Amruta Yadav",
    preferredName: "Amruta",
    title: "Aspiring Software Engineer",
    headline: "Aspiring Software Engineer | Computer Science Student | Data Science Enthusiast",
    shortBio: "Second-year B.Sc. Computer Science student passionate about turning ideas into impactful digital solutions. I believe in learning by building, experimenting with modern technologies, and engineering practical software that solves real-world challenges.",
    longBio: [
      "I am a Computer Science student at Pillai College of Arts, Commerce and Science (Pillai University), driven by a deep fascination with how software systems and data-driven intelligence can solve real-world problems. Whether building full-stack web applications, designing predictive traffic algorithms, or competing in hackathons, I approach every challenge with curiosity, analytical precision, and a commitment to clean architecture.",
      "My philosophy centers on learning by building. Rather than purely theoretical study, I immerse myself in hands-on development—taking concepts from initial problem formulation to working, deployed digital solutions. From hackathon sprints to end-to-end data analytics, I continually refine my skills across frontend, backend, databases, and machine learning.",
      "Outside technology, I find balance and inspiration through singing, travelling, photography, and exploring creative ideas. I believe this blend of technical rigor and creative perspective shapes me into a well-rounded problem solver who values both functional engineering and human-centered user experience."
    ],
    education: {
      degree: "Bachelor of Science (B.Sc.) in Computer Science",
      institution: "Pillai College of Arts, Commerce and Science (Pillai University)",
      location: "Panvel, Navi Mumbai, India",
      years: "2025 – 2028",
      currentYear: "Second Year",
      sgpa: "9.77",
      sgpaScale: "10.0",
      relevantTrack: "Data Science, Software Engineering & Systems",
    },
    interests: [
      "Software Engineering",
      "Full-Stack Web Development",
      "Frontend & Backend Architecture",
      "Data Science & Machine Learning",
      "Java, Data Structures & Algorithms",
      "Database Management & SQL",
      "Problem Solving & Systems Design"
    ],
    outsideTechnology: [
      { name: "Singing", icon: "Music", desc: "A creative outlet bringing rhythm and mindful focus." },
      { name: "Travelling", icon: "Compass", desc: "Exploring new cultures, landscapes, and perspectives." },
      { name: "Photography", icon: "Camera", desc: "Capturing details, architectural symmetry, and moments." },
      { name: "Creative Exploration", icon: "Sparkles", desc: "Experimenting with design aesthetics and innovative concepts." }
    ],
    contact: {
      email: "amritayadavlivez@gmail.com",
      phone: "+91 9082032197",
      location: "Navi Mumbai, Maharashtra, India",
      linkedin: "https://www.linkedin.com/in/amruta-yadav-b12952379/",
      github: "https://github.com/amrita-yadav01",
    },
    assets: {
      avatar: "/assets/Photography/amruta_portrait.png",
      avatarAlt: "Amruta Yadav - Aspiring Software Engineer",
      resumePdf: "/assets/resume/Amruta_Yadav_Updated_Resume.pdf",
      resumeFilename: "Amruta_Yadav_Resume.pdf",
    }
  },

  skills: {
    categories: [
      {
        id: "languages",
        name: "Programming Languages",
        description: "Core languages used for systems programming, algorithmic problem solving, and data scripting.",
        skills: [
          { name: "Java", focus: "OOP, Data Structures, Algorithms, Backend Systems" },
          { name: "Python", focus: "Data Science, Machine Learning, FastAPI, Scripting" },
          { name: "R", focus: "Statistical Computing, Exploratory Data Analysis" },
        ]
      },
      {
        id: "web",
        name: "Web Development",
        description: "Modern frontend and backend technologies for responsive, dynamic web applications.",
        skills: [
          { name: "HTML5", focus: "Semantic markup, Accessibility, SEO structure" },
          { name: "CSS3", focus: "Modern layouts, Flexbox, Grid, Responsive Design" },
          { name: "JavaScript", focus: "ES6+, DOM Manipulation, Asynchronous Programming" },
          { name: "React", focus: "Component architecture, State hooks, Modern UI" },
          { name: "PHP", focus: "Server-side scripting, Form processing, Web backends" },
        ]
      },
      {
        id: "databases",
        name: "Databases & Storage",
        description: "Relational database management, relational schema design, and querying.",
        skills: [
          { name: "MySQL", focus: "Relational schema design, Indexing, CRUD" },
          { name: "SQL", focus: "Complex queries, Joins, Aggregations, Subqueries" },
        ]
      },
      {
        id: "datascience",
        name: "Data Science & Analytics",
        description: "Extracting insights, pattern recognition, data modeling, and business intelligence.",
        skills: [
          { name: "Data Science", focus: "Data pipelines, preprocessing, model development" },
          { name: "Machine Learning", focus: "Supervised & unsupervised learning models" },
          { name: "Data Analysis", focus: "Hypothesis testing, exploratory data workflows" },
          { name: "Data Visualization", focus: "Visual analytics, interactive dashboards" },
          { name: "Microsoft Excel", focus: "Advanced formulas, Pivot tables, modeling" },
          { name: "Microsoft Power BI", focus: "Business intelligence reports, DAX, KPI tracking" },
          { name: "Statistics", focus: "Probability distributions, statistical inferences" },
        ]
      },
      {
        id: "fundamentals",
        name: "Computer Science Fundamentals",
        description: "Foundational pillars ensuring software reliability, scalability, and code efficiency.",
        skills: [
          { name: "Data Structures & Algorithms", focus: "Arrays, Trees, Graphs, Sorting, Searching, Complexity" },
          { name: "Object-Oriented Programming", focus: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
          { name: "Database Management Systems", focus: "ACID properties, Normalization, Transactions" },
          { name: "Operating Systems", focus: "Process management, Memory handling, Concurrency" },
          { name: "Problem Solving", focus: "Analytical thinking, algorithmic optimization, edge cases" },
        ]
      }
    ]
  },

  projects: [
    {
      id: "urbanflow",
      name: "UrbanFlow",
      tagline: "Smart City Traffic & Road Accident Intelligence Platform",
      category: "Personal Project",
      categoryType: "personal",
      status: "Live & Deployed",
      isLive: true,
      liveUrl: "https://urbanflow-frontend-ahtw.onrender.com",
      githubUrl: "https://github.com/amrita-yadav01/URBANFLOW-SMART-CITY-TRAFFIC-ROAD-ACCIDENT-PREDICTION-PLATFORM",
      overview: "UrbanFlow is an intelligent urban traffic management platform designed to provide actionable traffic intelligence through predictive congestion modeling, accident-risk scoring, and high-risk road corridor identification.",
      problem: "Urban transit systems and emergency responders struggle with reactive traffic handling, lack of real-time hotspot detection, and fragmented historical accident telemetry.",
      solution: "Engineered an interactive spatial intelligence platform featuring DBSCAN accident cluster detection, corridor risk assessment, and live GIS map visualisations across 36 districts of Maharashtra.",
      keyFeatures: [
        "Traffic Congestion Prediction: Machine-learning based congestion forecasting for arterial routes.",
        "Accident Hotspot Identification: DBSCAN-powered clustering identifying geographic collision centers.",
        "Road Corridor Risk Scoring: Weighted statistical scoring for high-frequency incident corridors.",
        "Interactive GIS Visualisation: Leaflet-powered maps with multi-layer overlays and district filtering.",
        "Traffic Analytics Dashboard: Telemetry inspection, severity breakdowns, and filterable telemetry logs.",
        "Data-Driven Incident Intelligence: Automated data pipelines indexing thousands of accident incident records."
      ],
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "Machine Learning",
        "SQLAlchemy",
        "SQLite",
        "Leaflet",
        "GeoJSON"
      ],
      screenshots: [
        {
          src: "/assets/UrbanFlow/urbanflow1.PNG",
          caption: "Maharashtra Accident Hotspots GIS — Spatial DBSCAN cluster detection and corridor risk map."
        },
        {
          src: "/assets/UrbanFlow/urbanflow2.PNG",
          caption: "Corridor Risk Intelligence & Arterial Route Analytics Breakdown."
        },
        {
          src: "/assets/UrbanFlow/urbanflow3.PNG",
          caption: "Accident Severity Distribution & Machine Learning Risk Prediction Panel."
        },
        {
          src: "/assets/UrbanFlow/urbanflow4.PNG",
          caption: "Statewide Scope Telemetry & GIS Filter Controls."
        }
      ]
    },
    {
      id: "travora",
      name: "TRAVORA",
      tagline: "Personalized Dynamic Tour Planning & Tour Operations Platform",
      category: "National-Level Hackathon Project",
      categoryType: "national-hackathon",
      status: "Live & Deployed",
      isLive: true,
      liveUrl: "https://travora-20260926t054032z-1-001-2.onrender.com/",
      githubUrl: "https://github.com/amrita-yadav01/TRAVORA",
      overview: "TRAVORA is a dynamic travel planning and tour operations platform designed to make travel planning intelligent, highly adaptable, and personalized for both travellers and tour operators.",
      problem: "Traditional travel planning is static and fragmented, failing to account for real-time schedule disruptions, budget dynamics, and coordinated tour logistics across Indian travel corridors.",
      solution: "Developed an AI-guided itinerary and operational management platform that integrates multi-modal travel bookings, disruption radar, and dynamic itinerary adjustments.",
      keyFeatures: [
        "Personalized Travel Itineraries: Dynamic schedule generation based on traveler preference and pace.",
        "Dynamic Tour Planning: Multi-stop journey orchestration adapting to local conditions.",
        "Budget-Oriented Travel Planning: Cost-bracket optimizations and transparent expense allocations.",
        "AI Travel Assistance: Contextual travel recommendations and real-time guidance.",
        "Interactive Maps: Leaflet-based destination navigation and route overviews.",
        "Dual Operator/Traveller Interface: Tools for both end-users booking trips and tour operators managing cohorts.",
        "Travel & Operational Insights: Chart.js visual telemetry tracking travel trends and booking status."
      ],
      technologies: [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Leaflet.js",
        "Chart.js"
      ],
      hackathonContext: "Selected for a National-Level Hackathon. Built collaboratively under high-pressure competitive sprint constraints.",
      screenshots: [
        {
          src: "/assets/TRAVORA/Capture1.PNG",
          caption: "TRAVORA Smart Travel Engine — Multi-modal booking and dynamic flight/hotel search."
        },
        {
          src: "/assets/TRAVORA/Capture2.PNG",
          caption: "Personalized Tour Planning Interface with Dynamic Itinerary Builder."
        },
        {
          src: "/assets/TRAVORA/capture3.PNG",
          caption: "Traveller Dashboard with Route Analytics and Schedule Inspection."
        },
        {
          src: "/assets/TRAVORA/Capture4.PNG",
          caption: "Tour Operator Management Console with Operational Insights."
        }
      ]
    },
    {
      id: "raseed",
      name: "RASEED",
      tagline: "Receipt Duplicate Detector & Audit Verification System",
      category: "Mini-Hackathon Project",
      categoryType: "mini-hackathon",
      status: "Hackathon Prototype (Repository Available)",
      isLive: false,
      liveUrl: null, // As requested: do not create fake live url
      githubUrl: "https://github.com/amrita-yadav01/RASEED",
      overview: "RASEED is an automated receipt duplicate detection platform designed to assist corporate expense auditors and financial teams by flagging suspiciously similar or duplicate expense receipts.",
      problem: "Financial fraud and accidental double-reimbursements often bypass manual verification due to minor receipt variations, differing formats, or repeated submissions across cycles.",
      solution: "Implemented an audit dashboard that ingests receipt records, compares metadata and textual similarity metrics, flags suspicious clusters, and provides an efficient human-in-the-loop review workflow.",
      keyFeatures: [
        "Receipt Duplicate Detection: Automated comparison against existing database receipt records.",
        "Similarity-Based Anomaly Scoring: Flags duplicate pairs based on vendor, timestamps, and amounts.",
        "Auditor Decision Workflow: Manager executive dashboard with Confirm, Dismiss, and Review queues.",
        "Volume Analytics by Category: Expense categorization breakdown and trend analytics.",
        "Audit Trail & History: Tamper-evident logging of reviewer decisions and fraud prevention stats.",
        "Human Oversight Integration: Prioritizes reviewer attention toward high-probability anomalies."
      ],
      technologies: [
        "Python",
        "Data Analysis",
        "Receipt Verification Algorithm",
        "Relational Storage",
        "Executive Dashboard UI",
        "JavaScript"
      ],
      hackathonContext: "Developed during the BITFEST 2026 Mini Hackathon at Pillai University School of Computing, earning 4th Place among competitive student teams.",
      screenshots: [
        {
          src: "/assets/RASEED/raseed1.jpeg",
          caption: "Manager Executive Dashboard — Receipt ingestion statistics, duplicate alerts, and decision outcomes."
        },
        {
          src: "/assets/RASEED/raseed2.jpeg",
          caption: "Duplicate Reports & Expense Verification Queue with flagged receipt pairs."
        },
        {
          src: "/assets/RASEED/raseed3.jpeg",
          caption: "Receipt Comparison View highlighting similarity indicators and auditor controls."
        }
      ]
    }
  ],

  hackathons: {
    stats: [
      { number: "4", label: "Hackathon Participations", highlight: "Sprint-tested problem solving" },
      { number: "2", label: "Second-Place Finishes", highlight: "Consistent podium track record" },
      { number: "1", label: "Fourth-Place Finish", highlight: "BITFEST 2026 Innovation" },
      { number: "1", label: "National Selection", highlight: "TRAVORA National Hackathon" }
    ],
    timeline: [
      {
        id: "hackathon-sih",
        eventName: "Smart India Hackathon (SIH) Internal Hackathon 2026",
        organizer: "MoE's Innovation Cell & Pillai College of Arts, Commerce & Science",
        date: "August 30, 2026",
        achievement: "Second Place",
        badge: "Podium Finish • 2nd Place",
        badgeColor: "silver",
        project: "Smart Systems Solution",
        problemStatement: "Solving national-scale civic and institutional challenges through technological innovation under the Smart India Hackathon framework.",
        overview: "Competed in the rigorous internal college-level screening for the Smart India Hackathon 2026, delivering an innovative software concept that secured Second Place across competing university batches.",
        certificateImage: "/assets/Achievements/certificate3.jpeg",
        certificateTitle: "SIH Internal Hackathon 2026 Certificate of Participation & Achievement",
        highlights: [
          "Organized under MoE's Innovation Cell & Mahatma Education Society guidelines.",
          "Evaluated on technical feasibility, problem relevance, and architectural scalability.",
          "Secured Second Place among leading computer science teams."
        ]
      },
      {
        id: "hackathon-cognithon",
        eventName: "Cognithon — IEEE Event 2026",
        organizer: "School of Engineering, Pillai University (IEEE-PCE) in collaboration with Tata Consultancy Services (TCS)",
        date: "2026",
        achievement: "Second Place",
        badge: "Podium Finish • 2nd Place",
        badgeColor: "silver",
        project: "Collaborative Engineering Challenge",
        problemStatement: "Rapid problem solving and algorithmic reasoning designed around industry-standard technical benchmarks formulated with TCS.",
        overview: "Awarded Second Place in Cognithon as part of IEEE Event 2026 in collaboration with Tata Consultancy Services (TCS), recognized by TCS Program Management and IEEE-PCE academic leadership.",
        certificateImage: "/assets/Achievements/certificate2.jpeg",
        certificateTitle: "IEEE-PCE & TCS Cognithon 2026 — Second Place Award Certificate",
        highlights: [
          "Industry-partnered event with Tata Consultancy Services (TCS).",
          "Official 2nd Winner recognition and cash/envelope award.",
          "Validated problem-solving acumen under competitive time constraints."
        ]
      },
      {
        id: "hackathon-travora",
        eventName: "National-Level Hackathon",
        organizer: "National Hackathon Consortium",
        date: "2026",
        achievement: "Team Selected to Participate",
        badge: "National-Level Selection",
        badgeColor: "burgundy",
        project: "TRAVORA — Dynamic Tour Planning Platform",
        problemStatement: "Creating an intelligent, resilient digital travel platform capable of multi-modal dynamic itinerary management and disruption awareness.",
        overview: "Represented our institution as a selected team in a high-stakes national-level hackathon. Designed and developed the TRAVORA platform, uniting real-time disruption awareness with dynamic booking modules.",
        projectLink: "https://travora-20260926t054032z-1-001-2.onrender.com/",
        githubLink: "https://github.com/amrita-yadav01/TRAVORA",
        highlights: [
          "Rigorous multi-round competitive shortlisting.",
          "Developed full-stack prototype featuring FastAPI backend and interactive Leaflet UI.",
          "Delivered pitch and live demonstration before industry jury."
        ]
      },
      {
        id: "hackathon-raseed",
        eventName: "BITFEST 2026 Mini Hackathon",
        organizer: "Computer Association of Pillai University School of Computing (PCACS)",
        date: "2026",
        achievement: "Fourth Place",
        badge: "Prize Winner • 4th Place",
        badgeColor: "bronze",
        project: "RASEED — Receipt Duplicate Detector",
        problemStatement: "Automating the detection of duplicate and anomalous receipt submissions in corporate financial accounting pipelines.",
        overview: "Secured Fourth Prize at the BITFEST 2026 Mini Hackathon for developing RASEED, an audit-oriented expense verification prototype that flags suspicious reimbursement attempts.",
        certificateImage: "/assets/Achievements/certificate1.jpeg",
        certificateTitle: "BITFEST 2026 Mini Hackathon — Fourth Prize Certificate of Achievement",
        githubLink: "https://github.com/amrita-yadav01/RASEED",
        highlights: [
          "Organized by Pillai University School of Computing CA committee.",
          "Awarded Fourth Prize for practical utility in financial audit workflows.",
          "Formulated clean reviewer oversight and data reconciliation interfaces."
        ]
      }
    ]
  },

  achievements: [
    {
      id: "ach-1",
      title: "Second Place — IEEE Cognithon 2026",
      organization: "IEEE School of Engineering & Tata Consultancy Services (TCS)",
      year: "2026",
      summary: "Awarded Second Place in Cognithon hackathon challenge organized in collaboration with Tata Consultancy Services.",
      verified: true,
      certificateImg: "/assets/Achievements/certificate2.jpeg",
      icon: "Award"
    },
    {
      id: "ach-2",
      title: "Second Place — SIH Internal Hackathon 2026",
      organization: "Smart India Hackathon / Pillai College of Arts, Commerce & Science",
      year: "2026",
      summary: "Secured Second Place in internal college evaluation for the prestigious national Smart India Hackathon 2026.",
      verified: true,
      certificateImg: "/assets/Achievements/certificate3.jpeg",
      icon: "Trophy"
    },
    {
      id: "ach-3",
      title: "Fourth Place — BITFEST 2026 Mini Hackathon",
      organization: "Computer Association of Pillai University School of Computing",
      year: "2026",
      summary: "Won Fourth Prize for building RASEED, an intelligent receipt duplicate detection and financial audit platform.",
      verified: true,
      certificateImg: "/assets/Achievements/certificate1.jpeg",
      icon: "Medal"
    },
    {
      id: "ach-4",
      title: "National-Level Hackathon Selection",
      organization: "National Hackathon Consortium",
      year: "2026",
      summary: "Team shortlisted and selected to participate at the national level for TRAVORA, a personalized dynamic tour platform.",
      verified: true,
      icon: "Flag"
    },
    {
      id: "ach-5",
      title: "Academic Excellence: 9.77 SGPA",
      organization: "Pillai College of Arts, Commerce & Science, Pillai University",
      year: "Current",
      summary: "Maintaining a stellar 9.77 SGPA in Bachelor of Science in Computer Science, demonstrating academic consistency and discipline.",
      verified: true,
      icon: "GraduationCap"
    }
  ],

  community: {
    role: "National Service Scheme (NSS) Volunteer",
    organization: "Pillai College of Arts, Commerce and Science (Pillai University)",
    period: "2025 – Present",
    location: "Panvel, Navi Mumbai",
    description: "Actively participate in university community service initiatives, social-awareness drives, and public welfare activities focused on civic responsibility, youth leadership, and grassroots impact.",
    pillars: [
      {
        title: "Community Outreach & Social Initiatives",
        desc: "Organizing social awareness campaigns, literacy drives, and environmental responsibility projects."
      },
      {
        title: "Team Collaboration & Field Execution",
        desc: "Coordinating logistical operations with student peers, faculty mentors, and community coordinators."
      },
      {
        title: "Civic Leadership & Active Citizenship",
        desc: "Embodying the NSS motto 'Not Me But You' through dedicated volunteer service and public welfare."
      },
      {
        title: "Communication & Public Engagement",
        desc: "Interfacing directly with local citizens to communicate vital social and health awareness initiatives."
      }
    ]
  },

  gallery: [
    {
      id: "photo-portrait",
      title: "Professional Portrait",
      category: "Digital Identity",
      src: "/assets/Photography/amruta_portrait.png",
      description: "Official professional portrait of Amruta Yadav.",
      aspect: "tall"
    },
    {
      id: "cert-ieee",
      title: "IEEE & TCS Cognithon Award",
      category: "Achievement",
      src: "/assets/Achievements/certificate2.jpeg",
      description: "Second Place Certificate awarded in collaboration with Tata Consultancy Services (TCS).",
      aspect: "wide"
    },
    {
      id: "cert-sih",
      title: "SIH 2026 Internal Hackathon",
      category: "Achievement",
      src: "/assets/Achievements/certificate3.jpeg",
      description: "Smart India Hackathon 2026 Certificate of Participation & Second Place Selection.",
      aspect: "wide"
    },
    {
      id: "cert-bitfest",
      title: "BITFEST 2026 4th Prize",
      category: "Achievement",
      src: "/assets/Achievements/certificate1.jpeg",
      description: "Certificate of Achievement for securing Fourth Prize in Mini Hackathon for RASEED.",
      aspect: "wide"
    },
    {
      id: "proj-urbanflow",
      title: "UrbanFlow Telemetry GIS",
      category: "Project Interface",
      src: "/assets/UrbanFlow/urbanflow1.PNG",
      description: "Maharashtra state accident hotspot GIS mapping with DBSCAN cluster analysis.",
      aspect: "wide"
    },
    {
      id: "proj-travora",
      title: "TRAVORA Smart Engine",
      category: "Project Interface",
      src: "/assets/TRAVORA/Capture1.PNG",
      description: "Smart travel engine and dynamic tour booking interface.",
      aspect: "wide"
    }
  ]
};

