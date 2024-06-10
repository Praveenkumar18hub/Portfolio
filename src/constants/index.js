import {
    software,
    test,
    dbms,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    sql,
    express,
    nodejs,
    mongodb,
    git,
    postman,
    Satyukt,
    health,
    property,
    doctor,
    selenium,
    appium,
    Rotaract,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Work",
    },
     {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
  ];
  
  const services = [
    {
      title: "Website Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: software,
    },
    {
      title: "Database Management",
      icon: dbms,
    },
    {
      title: "Quality Analyst",
      icon: test,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "Mongo DB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Selenium", 
      icon: selenium,
    },
    {
      name: "Appium",
      icon: appium,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Postman",
      icon: postman,
    },
  
  ];
  
  const experiences = [
    {
      title: "Quality Analyst",
      company_name: "Satyukt Analytics Pvt Ltd",
      icon: Satyukt,
      iconBg: "#E6DEDD",
      date: "June 2023 - November 2023",
      points: [
        "Conducted automated testing using Selenium WebDriver and Appium for web and mobile applications.",
        "Ensured timely delivery with manual testing for accuracy and implemented database testing.",
        "Used tools like (Jira, Trello, VSCode, Appium Inspector), for efficient project management testing processes."
      ],
    },
    {
      title: "Professional Service Director",
      company_name: "Rotaract club of Coimbatore institute of technology",
      icon: Rotaract,
      iconBg: "#E6DEDD",
      date: "July 2022 - June 2023",
      points: [
        "Led 20 impactful events focused on soft skills and personality development, demonstrating dedication to students professional growth.",
        "Orchestrated diverse professional service initiatives, showcasing proficiency in event planning and fostering a conducive learning environment.",
        "As Secretary of Athena, spearheaded the prestigious school event, fostering community engagement and empowering youth through enriching experiences."
      ],
    },
  ];
  
  const projects = [
    {
      name: "Doctor Connect",
      description:
        "A doctor appointment booking system with a public patient page with login/register, an admin page for managing appointments and doctor details with authorization.",
      tags: [
        {
          name: "Mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "orange-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient",
        },
      ],
      image: doctor,
      source_code_link: "https://github.com/Praveenkumar18hub/Doctor-Connect",
    },
    {
      name: "Property Registry",
      description:
        "Blockchain based Land Registration and transfer of entitlement system where the land ownership and all its details are stored in the Blockchain with zero chances of forgery in ownership.",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "Ethereum",
          color: "orange-text-gradient",
        },
        {
          name: "Solidity",
          color: "green-text-gradient",
        },
        {
          name: "Truffle",
          color: "pink-text-gradient",
        },
      ],
      image: property,
      source_code_link: "https://github.com/Praveenkumar18hub/Decentralized-Property-Registration",
    },
    {
      name: "Health Assist System",
      description:
        "This IoT project combines smart gloves and a smart strap, enriching medical assistance, utilizing multiple sensors integrated into the gloves and strap to gather essential data.",
      tags: [
        {
          name: "NodeMcu",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "orange-text-gradient",
        },
        {
          name: "IOT",
          color: "green-text-gradient",
        },
      ],
      image: health,
      source_code_link: "https://github.com/Praveenkumar18hub/Biomedical-Assistive-System",
    },
  ];
  
  export { services, technologies, experiences, projects };