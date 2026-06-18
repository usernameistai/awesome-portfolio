import { useState, lazy, Suspense } from 'react';
import ProfilePic from './assets/profilepic3.webp';
import Projects from './components/Projects';
import MagicRings from './components/MagicRings';
import ClickSpark from './components/ClickSpark';
const ElectricBorder = lazy(() => import('./components/ElectricBorder'));
const Antigravity = lazy(() => import('./components/Antigravity'));
const ShinyText = lazy(() => import('./components/ShinyText'));
const LogoLoop = lazy(() => import('./components/LogoLoop'));
const MetallicPaint = lazy(() => import("./components/MetallicPaint"));

import { type Outlook, theme, navLinks } from './data/themeData';
import { myProjects, techLogos, benefits } from './data/portfolioData'; 

import { SiGithub } from 'react-icons/si';
import { SlSocialLinkedin } from "react-icons/sl";
import { HiOutlineMail } from 'react-icons/hi';
import DevIcon from './assets/dev.svg';

const App = () => {
  const [activeSelection, setActiveSelection] = useState('hero');
  const [currentOutlook, setCurrentOutlook] = useState<Outlook>('TECH25');
 
  return (
    <>
      <ClickSpark
        sparkColor={theme[currentOutlook].sparkColor}
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className={`min-h-screen text-white font-sans ${theme[currentOutlook].bg} ${theme[currentOutlook].text} ${theme[currentOutlook].selection}`}>
          
          {/* SEMI NAVBAR (QUICK LINKS) */}
          <nav className={`sticky top-0 z-50 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 ${theme[currentOutlook].navBg}`}>
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="font-mono font-semibold tracking-widest text-[11px] md:text-base text-cyan-400 animate-pulse">
                DB_PORTFOLIO //
              </div>
              <div className="flex gap-2 md:gap-4">
                <select id="sectionFinder"
                  value={activeSelection}
                  onChange={((e) => {
                    const targetId = e.target.value;
                    setActiveSelection(targetId);
                    window.location.hash = `#${targetId}`;
                  })}
                  className="flex md:hidden bg-slate-900/80 border border-slate-700 font-mono text-xs text-cyan-400 px-2 py-1.5 rounded-lg focus:outline-none focus:border-cyan-500 cursor-pointer"
                >
                  <option value="hero" className="bg-slate-950 text-cyan-400">System_Init</option>
                  <option value="projects" className="bg-slate-950 text-cyan-400">Project_db</option>
                  <option value="about" className="bg-slate-950 text-cyan-400">About_Log</option>
                </select>
                {navLinks.map((link) => (
                  <a key={link.label} href={link.target}
                      onClick={() => setActiveSelection(link.target.replace('#', ''))}
                        className={`hidden md:flex font-mono text-xs md:text-sm px-1.5 md:px-3 py-1.5 rounded transition-all duration-200 border 
                          ${ activeSelection === link.target.replace('#', '')
                            ? `${theme[currentOutlook].navTextActive}`
                            : `${theme[currentOutlook].navTextInactive}`
                          }`}
                    
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex items-center gap-1">
                  {/* MOBILE DROPDOWN: Visible only on small screens */}
                  <select id="themeSelector"
                    value={currentOutlook}
                    onChange={(e) => setCurrentOutlook(e.target.value as Outlook)}
                    className="block md:hidden bg-slate-900/80 border border-slate-700 font-mono text-xs text-cyan-400 px-2 py-1.5 rounded-lg focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    {/* Explicit options menu for mobile space */}
                    <option value="TECH25" className="bg-slate-950 text-cyan-400">TECH25</option>
                    <option value="WINTERSUN" className="bg-slate-950 text-cyan-400">WINTERSUN</option>
                    <option value="OTHER" className="bg-slate-950 text-cyan-400">OTHER</option>
                  </select>
                  {/* DESKTOP BUTTONS: Hidden on mobile, visible on md+ screens */}
                  <div className="hidden md:flex bg-slate-900/10 dark:bg-slate-800/40 p-1 rounded-lg border border-slate-200 dark:border-slate-800 gap-1">
                    {(['TECH25', 'WINTERSUN', 'OTHER'] as Outlook[]).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setCurrentOutlook(mode)}
                        className={`px-3 py-1 text-xs font-mono rounded transition-all cursor-pointer ${
                          currentOutlook === mode
                            ? 'bg-cyan-500 text-white shadow-sm font-semibold'
                            : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <main className="flex flex-col flex-1 pb-4 mx-auto max-w-7xl space-y-10">

            <section id="hero" className="relative w-full h-[60vh] min-h-[65vh] flex flex-col items-center justify-center text-center md:px-2.5 overflow-visible">
              <div className={`absolute inset-0 pointer-events-none overflow-visible opacity-75
                ${currentOutlook === 'WINTERSUN' ? 'mix-blend-multiply' : 'mix-blend-screen'}`}>
                <MagicRings
                  color={theme[currentOutlook].ringColor1}
                  colorTwo={theme[currentOutlook].ringColor2}
                  ringCount={12}
                  speed={1.5}
                  attenuation={10}
                  lineThickness={2}
                  baseRadius={0.25}
                  radiusStep={0.1}
                  scaleRate={0.1}
                  opacity={1}
                  blur={0.25}
                  noiseAmount={0.1}
                  rotation={0}
                  ringGap={1.8}
                  fadeIn={0.7}
                  fadeOut={0.5}
                  followMouse={true}
                  mouseInfluence={0.2}
                  hoverScale={1.2}
                  parallax={0.05}
                  clickBurst={false}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <img src={ProfilePic} className="w-54 md:w-84 h-54 md:h-84 rounded-[50%]" alt="David Battye Profile"/>
              </div>
            </section>

            <section id="introPage" className="relative grid grid-cols-1 md:grid-cols-2 gap-10 py-8 sm:py-14 items-center z-50 w-full max-w-none">
              <div className="flex flex-col w-full md:px-2.5 text-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight grid grid-cols-1 md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_225px] items-center gap-10 w-full">
                  <div className={`md:text-left md:whitespace-nowrap flex-1 ${theme[currentOutlook].text}`}>
                    Hi!! I'm <span className="text-[#6366F1] font-bold drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">David</span> Battye 
                    
                    <br />
                    Full Stack <span className="text-[#A855F7] font-bold drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">Developer</span>
                  </div>

                  {/* Icon floats right on medium+ screens instead of being trapped */}
                  <div style={{ width: '225px', height: '225px' }} className="flex justify-center items-center mx-auto relative">
                    <Suspense 
                      fallback={
                        <div 
                          style={{ width: '225px', height: '225px' }} 
                          className="rounded-full bg-slate-900/40 animate-pulse border border-cyan-500/20 flex items-center justify-center text-[10px] font-mono text-cyan-500/40 tracking-widest"
                        >
                          LOADING_SHADERS...
                        </div>
                      }
                    >
                      <MetallicPaint
                        imageSrc={DevIcon}
                        seed={42}
                        scale={4}
                        patternSharpness={1}
                        noiseScale={0.5}
                        speed={0.3}
                        liquid={0.75}
                        mouseAnimation={false}
                        brightness={2}
                        contrast={0.5}
                        refraction={0.01}
                        blur={0.015}
                        chromaticSpread={2}
                        fresnel={1}
                        angle={0}
                        waveAmplitude={1}
                        distortion={1}
                        contour={0.2}
                        lightColor="#ffffff"
                        darkColor="#000000"
                        tintColor="#feb3ff"
                      />
                    </Suspense>
                  </div>
                </h2>

                {/* Paragraph text expands across the space */}
                <p className={`text-base md:text-left sm:text-lg md:text-xl ${theme[currentOutlook].textTwo} max-w-3xl`}>
                  My <span className="text-cyan-400 font-medium">favourite tech</span> includes Javascript, Typescript, Vite, React, SvelteKit, TailWind, Node, Zustand, Tanstack, Express, Heroku, Netlify & Render. See the Logo loop below 
                </p>
                
                {/* Button handles left alignment nicely */}
                <a 
                  href="https://www.linkedin.com/in/david-battye-9932665a/" 
                  target="_blank"
                  rel="noreferrer"
                  className="mx-12.5 md:mx-auto text-base sm:text-lg md:text-xl relative overflow-hidden px-8 py-3.5 group rounded-full bg-white text-slate-950 font-semibold shadow-xl hover:shadow-none hover:scale-105 transition-transform duration-200 cursor-pointer"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-cyan-400 opacity-20 group-hover:translate-x-full duration-200" />
                  <h4 className="relative z-10 flex items-center gap-2">Get in touch &rarr;</h4>
                </a>
              </div>
            </section>

            <section id="logoLoop" className="transform-gpu will-change-transform">
              <div className="w-full h-16 md:h-55 relative flex items-center justify-center">
                <Suspense fallback={ <div className="w-full h-full bg-slate-900/10 animate-pulse rounded-xl border border-slate-900/40" /> }>
                  {/* Basic horizontal loop */}
                  <LogoLoop
                    logos={techLogos}
                    speed={55}
                    direction="left"
                    logoHeight={80}
                    gap={60}
                    hoverSpeed={55}
                    // scaleOnHover
                    // ariaLabel="Technology partners"
                  />

                </Suspense>
              </div>
            </section>

            <section id="projects" className="py-20 lg:py-32 md:px-2.5 flex flex-col gap-24">
              <div className={`flex flex-col gap-2 text-center ${theme[currentOutlook].text}`}>
                <h6 className="text-lg sm:text-xl md:text-2xl">
                  A few of my creative endeavours
                </h6>
                <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
                  Curious to <span className="poppins text-cyan-400">see</span> my work?
                </h3>
              </div>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" 
                className={`mx-auto px-4 py-2 rounded-md border border-solid
                  ${currentOutlook === 'WINTERSUN' ? 'border-slate-900/60' : 'border-white'}  
                flex items-center gap-2 -mb-4 sm:mb-0 -mt-10 hover:border-cyan-700
                 hover:text-cyan-400 duration-200 ${theme[currentOutlook].text}`}>
                  <i className="fa-regular fa-circle-play"></i>
                  <p>DECRYPT_SYSTEM_DEMO.mp4</p>
              </a>

              {/* Project Card Grid */}
              {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-14"> */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 gap-y-28 max-w-7xl mx-auto">
                {myProjects.map((project, idx) => (
                  <>
                    <Suspense 
                      fallback={
                        <div className="w-full h-full bg-slate-900/10 animate-pulse rounded-xl border border-slate-900/40" />
                      }
                    >
                      <ElectricBorder 
                        key={idx}
                        color={theme[currentOutlook].electricBorder}
                        chaos={0.12}
                      >
                          <Projects project={project} currentOutlook={currentOutlook}/>
                      </ElectricBorder>
                    </Suspense>
                  </>
                ))}
              </div>

              
            </section>

            <section id="about" className="py-20 pt-10 lg:pt-16 lg:py-32 md:px-2.5 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <Suspense 
                  fallback={
                    <div className="w-full h-full bg-slate-900/10 animate-pulse rounded-xl border border-slate-900/40" />
                  }
                >
                  <Antigravity    
                    count={300}    
                    magnetRadius={6}    
                    ringRadius={7}    
                    waveSpeed={0.4}    
                    waveAmplitude={1}    
                    particleSize={1.5}    
                    lerpSpeed={0.05}    
                    color={theme[currentOutlook].antigravityColor}    
                    autoAnimate    
                    particleVariance={1}    
                    rotationSpeed={0}    
                    depthFactor={1}    
                    pulseSpeed={3}    
                    particleShape="capsule"    
                    fieldStrength={10}
                  />
                </Suspense>
              </div>
              {/* Header Container */}
              <div className={`${theme[currentOutlook].lineColor} ${theme[currentOutlook].textTwo}`}>
                <h6 className="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
                <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl my-2">
                  A bit <span className="poppins text-violet-400">about</span> me.
                </h3>
              </div>

              <p className={`mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl ${theme[currentOutlook].text}`}>I am . . .</p>

              {/* Benefits Loop */}
              <div className={`flex flex-col gap-20 max-w-7xl mx-auto ${theme[currentOutlook].textTwo}`}>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-6 sm:gap-8">
                    <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                      0{index + 1}
                    </p>
                    <div className="flex flex-col gap-6 sm:gap-8">
                      <h3 className="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.name}
                      </h3>
                      <p>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Table Section */}
              <h5 className={`text-2xl sm:text-3xl font-semibold text-center poppins ${theme[currentOutlook].text}`}>
                The <span className="text-violet-700 poppins">Complete </span> Package
              </h5>
              
              <div className="flex flex-col overflow-x-scroll gap-10 max-w-200 mx-auto w-full">
                <table className="bg-white text-slate-700 rounded text-center">
                  <thead className="border-b border-solid border-slate-200">
                    <tr>
                      <th />
                      <th className="whitespace-nowrap p-2 px-4">Candidate #1</th>
                      <th className="whitespace-nowrap p-2 px-4">Candidate #2</th>
                      <th className="whitespace-nowrap p-2 px-4">Candidate #3</th>
                      <th className="whitespace-nowrap bg-violet-700 text-white p-4 px-8 rounded-tr">Me</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-solid border-slate-200">
                      <td className="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-base whitespace-nowrap">Dedication</td>
                      <td><i className="fa-solid fa-xmark text-slate-500"></i></td>
                      <td><i className="fa-solid fa-check text-slate-500"></i></td>
                      <td><i className="fa-solid fa-xmark text-slate-500"></i></td>
                      <td><i className="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr className="border-b border-solid border-slate-200">
                      <td className="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-base whitespace-nowrap">Critical Thought</td>
                      <td><i className="fa-solid fa-xmark text-slate-500"></i></td>
                      <td><i className="fa-solid fa-check text-slate-500"></i></td>
                      <td><i className="fa-solid fa-check text-slate-500"></i></td>
                      <td><i className="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr className="border-b border-solid border-slate-200">
                      <td className="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-base whitespace-nowrap">Interpersonal Skills</td>
                      <td><i className="fa-solid fa-check text-slate-500"></i></td>
                      <td><i className="fa-solid fa-check text-slate-500"></i></td>
                      <td><i className="fa-solid fa-xmark text-slate-500"></i></td>
                      <td><i className="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr className="border-b border-solid border-slate-200">
                      <td className="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-base whitespace-nowrap">Programming Ability</td>
                      <td><i className="fa-solid fa-check text-slate-500"></i></td>
                      <td><i className="fa-solid fa-xmark text-slate-500"></i></td>
                      <td><i className="fa-solid fa-check text-slate-500"></i></td>
                      <td><i className="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mx-auto -mt-12 italic sm:hidden opacity-50">
                <p>Scroll to see more &rarr;</p>
              </div>          
            </section>

            <section id="break" className='pt-10 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative'>
              <div className={`${theme[currentOutlook].lineColor} ${theme[currentOutlook].textTwo}`}>
                <h6 className="text-lg sm:text-xl md:text-2xl">Not given up yet?</h6>
                <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl py-2">
                  Contact <span className="poppins text-violet-400">details</span> below &darr;
                </h3>
              </div>

              <p className="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">A question for you might be...</p>
            </section>

            <section id="lastBit" className='relative flex items-center justify-center mt-60'>
              <Suspense 
                fallback={
                  <div className="w-full h-full bg-slate-900/10 animate-pulse rounded-xl border border-slate-900/40" />
                }
              >
                <div className='absolute mx-auto justify-center items-center text-3xl
                 md:text-7xl text-[#6366F1] font-bold drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]
                  animation-duration-[3s] transform-gpu backface-visibility-hidden'
                >
                  <ShinyText 
                    text="So why not invest?"
                    speed={2}
                    delay={0}
                    color={theme[currentOutlook].shinyText}
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                  />
                </div>
              </Suspense>
            </section>

            <section id="logoLoop2" className="transform-gpu will-change-transform">
              <div className="w-full h-20 md:h-55 relative mt-36 mb-8 flex items-center justify-center">
                <Suspense 
                  fallback={
                    <div className="w-full h-full bg-slate-900/10 animate-pulse rounded-xl border border-slate-900/40" />
                  }
                >
                  {/* Basic horizontal loop */}
                  <LogoLoop
                    logos={techLogos}
                    speed={55}
                    direction="left"
                    logoHeight={100}
                    gap={60}
                    hoverSpeed={55}
                    // scaleOnHover
                    // ariaLabel="Technology partners"
                  />
                </Suspense>
              </div>
            </section>
          </main>

          <footer className="relative border-t border-slate-900 bg-slate-950/60 backdrop-blur-md w-full">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            
            <div className="md:mx-8 px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">     
              <div id="footerBlurb" className="flex flex-col gap-2 text-center md:text-left font-mono">
                <div className="text-sm tracking-widest text-cyan-400 animate-pulse uppercase">
                  David Battye &bull; Full Stack Developer //
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>DESKTOP APPS ALSO AVAILABLE ON GITHUB NOW</span>
                </div>
                <p className="text-xs text-slate-400 max-w-xs mt-1">
                  Engineered with modern web technologies focusing on performance, responsive design, and clean user experiences. Open to new opportunities.
                </p>
                <p className="text-xs text-slate-400 max-w-xs mt-1">
                  What, is the capital of Assyria?
                </p>
              </div>

              <div id="footerContact" className="flex flex-col items-center md:items-end gap-3">
                <div className="font-mono text-xs tracking-widest text-slate-300 uppercase">
                  // CONTACT
                </div>
                
                <div className="flex gap-4">
                  <a href="mailto:battye_david@yahoo.co.uk" title="Send Secure Transmission"
                    className="p-2.5 rounded-lg border border-slate-900 bg-slate-900/30 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                  >
                    <HiOutlineMail className="text-xl" />
                  </a>
                  <a href="https://github.com/usernameistai" target="_blank" rel="noreferrer" title="Source Data Repositories"
                    className="p-2.5 rounded-lg border border-slate-900 bg-slate-900/30 text-slate-300 hover:text-[#A855F7] hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300"
                  >
                    <SiGithub className="text-xl" />
                  </a>
                  <a href="https://www.linkedin.com/in/david-battye-9932665a/" target="_blank" rel="noreferrer" title="Connect Terminal Node"
                    className="p-2.5 rounded-lg border border-slate-900 bg-slate-900/30 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all duration-300"
                  >
                    <SlSocialLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-900/60 bg-slate-950/80 py-4 px-6">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] tracking-wider text-slate-500 text-center sm:text-left">
                <div>
                  &copy; {new Date().getFullYear()} &bull; DB_UNIVERSAL_FLOW
                </div>
                <div className="text-slate-400 uppercase text-[10px] bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800">
                  INITIALLY SVELTE &rarr; REACT & REACTBITS
                </div>
              </div>
            </div>
          </footer>
        </div>
      </ClickSpark>
    </>
  );
}

export default App;