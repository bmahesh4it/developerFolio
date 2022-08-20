/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mahesh Bairi",
  title: "Hi all, I'm Mahesh Bairi",
  subTitle: emoji(
    "A passionate Tech Lead / Senior Software Developer 🚀 having an experience of building Web and Backend applications with PHP / Laravel / NodeJs / VueJs / CakePHP / CodeIgniter / REST API and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1G-6DNJs9AslHulituZZS7G_ZpCEtQGyGvYWJFZ6cehc/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bmahesh4it",
  linkedin: "https://www.linkedin.com/in/mahesh-bairi-2a847b29/",
  gmail: "bmahesh4it@gmail.com",
  gitlab: "https://gitlab.com/bmahesh4it",
  facebook: "https://www.facebook.com/bmahesh4it",
  medium: "https://medium.com/@bmahesh4it",
  stackoverflow: "https://stackoverflow.com/users/10422806/bmahesh4it",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Tech Lead / CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Proficient in PHP, Laravel, CodeIgniter, Magento, WordPress, MySql, JavaScript, JQuery & AJAX"
    ),
    emoji("⚡ Experienced with payment gateways implementation KNET, MPGS, AMEX, PayPal, CCAVENUE, Yes Bank, BillDesk"),
    emoji(
      "⚡ Excellent analytical and problem-solving skills"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Magento",
      fontAwesomeClassname: "fab fa-magento"
    },    
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },    
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Osmania University",
      logo: require("./assets/images/osmania-university-squarelogo.png"),
      subHeader: "Master of Science in Statistics",
      duration: "July 2006 - April 2008",
      desc: "University College of Science Osmania University Campus - M.Sc. Applied Statistics",
      descBullets: [
        "Computer Science and Information Technology",
        "Data analytics and reporting",
        "Investigate the computational limits of the algorithms and data structures that support complex software systems"
      ]
    },
    {
      schoolName: "Ramakrishna Ramakrishna Degree College",
      logo: require("./assets/images/kakatiya-university-logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2003 - March 2006",
      desc: "Bachelor of Science - M.S.Cs",
      descBullets: ["Computer science with mathematics and statistics gives flexibility to combine a traditional computer science degree"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior IT Executive Coordinator",
      company: "Hesabe",
      companylogo: require("./assets/images/Hesabe-Logo.png"),
      date: "Feb 2019 – Present",
      desc: "Hesabe is an innovative payment solutions Payment Process Integration",
      descBullets: [
        "Invoice Payment Solutions - Ideal solution for collecting customized amounts",
        "Integrate online stores with Hesabe payment processor for easy checkout.",
      ]
    },
    {
      role: "Tech Lead",
      company: "Viola Services (India) Private Limited",
      companylogo: require("./assets/images/viola-logo.png"),
      date: "May 2017 – February 2019",
      desc: "Viola wallet offers easy and secure access to financial services with the ability to send/receive money, Pay bills and organize finances.",
      
    },
    {
      role: "Senior Web Developer",
      company: "Henceforth Software Technologies",
      companylogo: require("./assets/images/henceforth-logo.png"),
      date: "Dec 2014 – May 2017",
      desc: "E-commerce development, website designing, programming and producing great looking, profitable websites built on durable, robust systems.",      
    },
    {
      role: "Software Engineer",
      company: "Ritwik Software Technologies",
      companylogo: require("./assets/images/ritwik-logo.png"),
      date: "Jun 2010 – Dec 2014",
      desc: "Ritwik Software Technologies Pvt. Ltd. is an affiliate of Youngsoft Inc, Ritwik is a full-service IT technology and consulting company based in Hyderabad, India. A tier 1 city, which offers a large pool of experienced resources in all technologies and has a good understanding of international cultures. Together with Youngsoft, Ritwik offers 24/7 operations to US clients.",
     
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Hesabe-Logo.png"),
      projectName: "Hesabe",
      projectDesc: "Hesabe is an innovative payment solutions Payment Process Integration",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hesabe.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/viola-money.jpg"),
      projectName: "Viola Money",
      projectDesc: "Modern financial products for the modern financial world.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://violamoney.com/"
        }
      ]
    },
    {
      image: require("./assets/images/stanfordLogo.png"),
      projectName: "TouchHealth",
      projectDesc: "Touch Health creates systems that improve clinical outcomes and patient satisfaction by enhancing the doctor-patient relationship and by facilitating communication across the healthcare continuum. It's an openly available, free, HIPAA-compliant web mail network and services for individuals to large health care practices. Communicate simply and securely among patients, physicians and staff without being restricted by your electronic health record.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://touchhealth.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner Essentials",
      subtitle:
        "This course is for individuals who seek an overall understanding of the Amazon Web Services (AWS) Cloud, independent of specific technical roles. ",
      image: require("./assets/images/aws-certificate.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1D6NbL-UXePoXIee47T6Lcm7GinYZHv5H/view"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1D6NbL-UXePoXIee47T6Lcm7GinYZHv5H/view"
        },
        {
          name: "About this course",
          url: "https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "#"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "WhatsApp +91 9949207896",
  email_address: "bmahesh4it@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "maheshbairi", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
