// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of some interesting projects I worked on across - human-AI Interaction, visualization and immersive media.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-aiswaryam",
          title: 'Aiswaryam',
          description: "A suite of AI-driven digital experiences across multiple categories, such as traffic accidents, air pollution, traffic congestion, waste management to help policymakers and government officials make data-driven decisions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aiswaryam/";
            },},{id: "projects-alia",
          title: 'ALIA',
          description: "Analogical LLM Ideation Agent. This research work advances the theoretical knowledge of Al-assisted ideation and computer-aided creativity by presenting analogical ideation framework for structured and diversified idea generation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/alia/";
            },},{id: "projects-augmented-and-virtual-reality",
          title: 'Augmented and Virtual Reality',
          description: "A collection of all the immersive reality projects and activities",
          section: "Projects",handler: () => {
              window.location.href = "/projects/egyptar/";
            },},{id: "projects-fluid-minds",
          title: 'Fluid Minds',
          description: "Physical medium-based visuals with audio may achieve safe and controlled distraction. Usage of relatively less explored material - Ferrofluid is studied in the making of a Fidget distraction tool capable of creating dynamic and attractive visuals to keep them engaged before the medical procedure starts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fluidminds/";
            },},{id: "projects-smart-medication-adherence-and-well-being-optum",
          title: 'Smart medication adherence and well-being, Optum',
          description: "The case study aims to research the challenges that chronic disease (Thyroid) patients experience in their medication adherence journey. This work was part of a 2-month internship period at Optum in Hyderabad.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/smartadherence/";
            },},{id: "projects-ai-for-waste-segregation",
          title: 'AI for Waste segregation',
          description: "Building computer vision based solutions to monitor and segregate waste efficiently across multiple cities in India. Also includes tangible interventions to support worker wellbeing and managing efficiency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/waste/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%75%74%76%69%6B%6F%6B%61%74%65%32%36%31%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/https://www.linkedin.com/in/rutvik-kokate/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
