import { type ProjectData } from '../components/Projects';
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiSvelte, SiPostman, SiHeroku, SiHtml5, SiTauri,
  SiNetlify, SiRender } from 'react-icons/si';
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaCss3, FaRust  } from "react-icons/fa6";
import viteLogo from '../assets/vite.svg';

export const myProjects: ProjectData[] = [
    { 
      name: 'HelpMe-Car', 
      icon: 'fa-solid fa-hands text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://helpme-car.herokuapp.com/', 
      desc: (
        <>
          <p>HelpMe-Car is a Full Stack web app to enable helping other people's cars, created a <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">MongoDb Atlas, Express.js, React.js & Node.js</strong>  CRUD application. Hosted on <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Heroku.</strong> Here you can enter helpful suggestions from pre-written examples to a database to help individuals maintain their cars safely.</p>
        </>
      )
    },
    { 
      name: 'Aegis Crypto Dashboard', 
      icon: 'fa-brands fa-ethereum text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://aegiscrypto.netlify.app/', 
      desc:  (
        <>
          <p>Attractive glassmorphic Crypto Dashboard showing market trends of Crypto coins. Search for the coin you want or see the top 11 results in terms of market rank, at the bottom or using the modal. Day and night as well as seasonal backgrounds. Created using <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]"> Vite, React, Typescript, Tailwind, Shadcn, Framer-Motion, Motion, Recharts</strong> This is hosted on <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Netlify.</strong>  There is a tooltip to give you more information going over the area, namely the variance to the global average plus more!</p>
        </>
      )
    },
    { 
      name: 'Weather Or Not', 
      icon: 'fa-solid fa-cloud-sun-rain text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://weather-orr-not.netlify.app/', 
      desc: (
        <>
          <p>Weather Or Not is a Static web app to help you keep track of your local weather using OpenWeatherMap API. Created using <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Vite.js, React, Typescript & TailwindCSS.</strong> This is hosted on <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Netlify.</strong>  You can keep track of weather from several areas, cities or regions.</p>
        </>
      )
    },
    { 
      name: 'JDB Blood Pressure Tracker', 
      icon: 'fa-solid fa-file-medical text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://david-bp-health.netlify.app/', 
      desc: (
        <>
          <p>A Blood Pressure monitoring app for a family member, can update the daily readings and see a week trend or monthly trend. Can export a CSV file for presentation to clinicians. Created using <strong className="text-[#6366F1]">Vite.js & TailwindCSS.</strong> This is hosted on <strong className="text-[#6366F1]">Netlify.</strong>  Simply enter your blood pressure at specified periods or more specifically.</p>
        </>
        )
    },
    { 
      name: 'PeakyBlogger', 
      icon: 'fa-solid fa-tree text-[#6366F1]', 
      href: 'https://peakyblogger-d362176b187f.herokuapp.com/', 
      desc: (
        <>
          <p>PeakyBlogger is a Full Stack blogsite for my Father, created a <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">MongoDb Atlas, EJS, Passport, Vanilla JS, Express.js & Node.js</strong>  CRUD application. Hosted on <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Heroku.</strong> This is so he can document his walks and eateries of the Peak District to promote healthy living and eating as well as wellbeing.</p>
        </>
      )
    },
    { 
      name: 'Aegis Aether Cyber HUD', 
      icon: 'fa-brands fa-rust text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://github.com/usernameistai/Aegis-Aether-Cyber-HUD/releases/tag/v2.1.0', 
      desc: (
        <>
          <p>A desktop application to monitor network traffic, namely TCP & UDP. Identifying new connections, owing to my laptop being massively hacked even with MFA. Created using <strong className="text-[#6366F1]">Vite.js, Tauri, Rust & TailwindCSS.</strong> There is ability to download the release from <strong className="text-[#6366F1]">Github.</strong>  Perfect for modern computers, also indicates PC temperature and other metrics available in task manager.</p>
        </>
        )
    },
    { 
      name: 'Aegis Helper', 
      icon: 'fa-brands fa-rust text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://github.com/usernameistai/Aegis-Helper/releases/tag/v0.1.0', 
      desc: (
        <>
          <p>A desktop application to change and monitor bluetooth and WLAN servcies, as well as be able to see recently enabled firewall rules. Created using <strong className="text-[#6366F1]">Vite.js, Tauri, Rust & TailwindCSS.</strong> There is ability to download the release from <strong className="text-[#6366F1]">Github.</strong>  Basic functionality for speed and necessity.</p>
        </>
        )
    },
    { 
      name: 'D3.js Choropleth Map USA Edu.', 
      icon: 'fa-solid fa-earth-americas text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://fcc-choropleth-map.onrender.com/', 
      desc: (
        <>
          <p>Choropleth Map illustrating the % of adults with a bachelors degree over the age of 25 between 2010 - 2014. Created using <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">D3.js, HTML5 & CSS3</strong> This is hosted on <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Render.</strong>  There is a tooltip for further information about the specific areas / regions. </p>
        </>
      )
    },
    { 
      name: 'D3.js Heat Map', 
      icon: 'fa-solid fa-fire-flame-curved text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://fcc-heat-map.onrender.com/', 
      desc:  (
        <>
          <p>Heat Map illustrating the Monthly Global Land-Surface Temperature between 1753 - 2015. Created using <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">D3.js & HTML5/CSS3/JS</strong> This is hosted on <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Render.</strong>  There is a tooltip to give you more information going over the area, namely the variance to the global average plus more!</p>
        </>
        )
    },
    { 
      name: 'Data Dashboard', 
      icon: 'fa-solid fa-server text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://dashboard-1-ftx2.onrender.com/', 
      desc: (
        <>
          <p>Data Dashboard is a Static web app to illustrate the principles of a data dashboard. Created using <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Vite.js, React, Chart.js, D3.js, Lucide-React & TailwindCSS.</strong> This is hosted on <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Render.</strong>  It is supposed to show how a genuine real-time data dashboard would look like. Would like to build one looking at Crypto.</p>
        </>
        )
    },
    { 
      name: 'e-Commerce API Basic', 
      icon: 'fa-solid fa-shop text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://e-commerce-api-basic.onrender.com/', 
      desc: (
        <>
          <p>e-Commerce-API-Basic is a Static web app demonstrating an e-commerce site for my portfolio. Created using <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Vite.js, React & TailwindCSS.</strong> This is hosted on <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Render.</strong>  This is more an app to search for items, using a dummyjson API product data and also dummy data for the users / top sellers. With night / day settings.</p>
        </>
      )
    },
    { 
      name: 'My Awesome Portfolio', 
      icon: 'fa-brands fa-jedi-order text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://awesome-portfolio-two.netlify.app/', 
      desc: (
        <>
          <p>(4th wall). A revamped version of my older portfolio. Effectively what you are looking at now, so doesn't need much of a description. Created using <strong className="text-[#6366F1]">Vite.js, Typescript, TailwindCSS & Reactbits.dev.</strong> This is hosted on <strong className="text-[#6366F1]">Netlify.</strong>  I think it looks great please email ewith any problems.</p>
        </>
        )
    },
    { 
      name: 'Original Portfolio', 
      icon: 'fa-brands fa-old-republic text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://portfolioawesome-db.netlify.app/', 
      desc: (
        <>
          <p>The older portfolio. Compare both portfolios. Created using <strong className="text-[#6366F1]">Vite.js, Svelte.js & TailwindCSS</strong> This is hosted on <strong className="text-[#6366F1]">Netlify.</strong>  This was a great layout so didn't want to change it very much.</p>
        </>
        )
    },
    { 
      name: 'Todo-my-Todo', 
      icon: 'fa-solid fa-list-ul text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://todo-my-todo.netlify.app/', 
      desc:  (
        <>
          <p>Todo-my-Todo is a nicely designed and very simple todo list, using localstorage. Created using <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Vite.js, React & TailwindCSS.</strong> This is hosted on <strong className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">Netlify.</strong>  This is a basic todo app with only the funcitonality to edit or delete, looks retro however.</p>
        </>
      )
    },
    { 
      name: 'Butt Scratcher', 
      icon: 'fa-solid fa-hand-holding-medical text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://butt-scratcher.netlify.app/', 
      desc: (
        <>
          <p>Butt Scratching has been around for centuries and permeates across all cultures. Created using <strong className="text-[#6366F1]">HTML5, CSS3 and Vanilla JS</strong> This highlights some of the benefits of not using frameworks or a compiler. Plain old JS.</p>
        </>
        )
    },
    { 
      name: 'My CV', 
      icon: 'fa-solid fa-archway text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]', 
      href: 'https://vite-cv.netlify.app/', 
      desc: (
        <>
          <p>My CV utilising modern HTML5 and CSS3 where necessary. Created using <strong className="text-[#6366F1]">HTML5, CSS3, React, Vite and Tailwind</strong> Just a nice web app version of my CV with links and details etc.</p>
        </>
        )
    },

];

export const techLogos = [
  { node: <img src={viteLogo} className='w-32 h-32'/>, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiReact className="text-[#61DBFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <VscVscodeInsiders className="text-[#007ACC]" />, title: "VS-Code", href: "https://www.heroku.com" },
  { node: <SiNodedotjs className="text-[#5FA04E]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiMongodb className="text-[#00ED64]" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiExpress className="text-[#303030]" />, title: "Express", href: "https://expressjs.com" },
  { node: <SiPostman className="text-[#FF6C37]" />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiHtml5 className="text-[#E34C26]" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
  { node: <SiHeroku className="text-[#430098]" />, title: "Heroku", href: "https://www.heroku.com" },
  { node: <SiNetlify className="text-[#00C7B7]" />, title: "Netlify", href: "https://www.netlify.com" },
  { node: <SiRender className="text-[#46E3B7]" />, title: "Render", href: "https://render.com" },
  { node: <FaCss3 className="text-[#1572B6]" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiSvelte className="text-[#FF3E00]" />, title: "Svelte", href: "https://svelte.dev" },
  { node: <FaRust className="text-[#CE412B]" />, title: "Rust", href: "https://www.rust-lang.org" },
  { node: <SiTauri className="text-[#24C8DB]" />, title: "Tauri", href: "https://tauri.app" },
];

export const benefits = [
  {name: 'a self taught developer', desc: 'I studied an MSc in I.T. course but mostly I taught myself to code using free online resources and became entwined with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting off with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks, backend programming, design, cloud services and much much more.'},
  {name: 'a product design and UX fanatic', desc: 'Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of creativity I have. I love the challenge of learning new design concepts and enabling users with amazing online experiences. Did you click the link?'},
  {name: 'an excellent communicator', desc: 'Communication is key and it is a paramount value of mine. I believe in transparency and constructive communication above all else, it helps with physically and mentally unwell people. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team. This could be seen from my previous work in hospitals during the lock-down period, people in varying states of happiness & wellness and then there were the patients...'},
];