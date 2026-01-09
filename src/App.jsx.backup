import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowRight, FaChartBar, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens, SiPandas, SiPython, SiNumpy } from 'react-icons/si'

function App() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-50 nav-glow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="glow-brand text-2xl font-bold tracking-tight text-white sm:text-3xl">Sankeeth</a>
          <nav className="hidden items-center gap-5 sm:flex">
            <a href="#home" className="text-sm text-white/80 hover:text-white">Home</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
            <a href="#skills" className="text-sm text-white/80 hover:text-white">Skills</a>
            <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#experience" className="text-sm text-white/80 hover:text-white">Experience</a>
            <a href="#education" className="text-sm text-white/80 hover:text-white">Education</a>
            <a href="#certifications" className="text-sm text-white/80 hover:text-white">Certifications</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/SkSankeeth" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/80 hover:text-white"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden pl-[20px]">
          <div className="hero-bg"></div>
          <div className="grid w-full h-screen grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="hero-foreground">
      {/* ...existing code... */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="neon-text text-4xl font-extrabold leading-tight sm:text-6xl pl-[20px]"
            >
              Sankeeth Sithamparanathan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-lg text-white/80 pl-[20px]"
            >
              <span className="typing">Full Stack Developer | Data Enthusiast</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6 pl-[20px]"
            >
              <a href="/resume.pdf" download className="btn-primary">Download Resume</a>
              <a href="#contact" className="card"><span className="text-white/90">Contact Me</span></a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative z-10 flex items-center justify-center md:block"
            style={{overflow:'visible'}}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="hero-frame float-slow h-[22rem] w-56 rounded-2xl sm:h-[24rem] sm:w-64 md:h-[26rem] md:w-72 md:mx-auto"
            >
              <img src="/home.jpeg" alt="Sankeeth profile" className="h-full w-full object-cover" />
            </motion.div>
          </motion.div>
          </div>
        </section>

      <main className="mx-auto max-w-6x2 px-4 sm:px-6">
        

        <section id="about" className="min-h-screen flex items-center justify-center py-16 pb-20 sm:py-24 sm:pb-28 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="mb-8 text-2xl font-semibold text-white">About Me</h2>
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[260px,1fr]">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="justify-self-center md:justify-self-start"
              >
                <div className="avatar-glow h-40 w-40 md:h-52 md:w-52">
                  <img src="/profile1.jpg" alt="Sankeeth profile" className="h-full w-full object-cover" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="relative"
              >
                <div className="neon-card min-h-[200px] md:min-h-[240px] flex items-center">
                  <p className="text-white/80 text-base leading-relaxed">
                    I am an <strong>ICT undergraduate at the University of Sri Jayewardenepura</strong> with a strong foundation in software development and data analytics. My core expertise lies in the 
                     <strong> MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), where I have hands-on experience building secure, scalable, and responsive web applications.  
                    Beyond full-stack development, I also explore the world of <strong>data analytics</strong>, using Python, Pandas, Matplotlib, and Power BI to transform raw datasets into meaningful insights and dashboards.
                    <br></br><br></br>I am <strong>actively seeking internship opportunities</strong> where I can apply my technical skills in <strong>full-stack development</strong> and <strong>data-driven problem solving</strong>, while contributing to impactful projects and learning from real-world challenges.                   
                  </p>
                </div>

                {/* floating tech icons */}
                <div className="tech-float" style={{left:'-14px', top:'-14px'}} title="React">⚛︎</div>
                <div className="tech-float alt" style={{right:'-16px', top:'-10px'}} title="Node">🟩</div>
                <div className="tech-float" style={{left:'-10px', bottom:'-12px'}} title="DB">🗄️</div>
                <div className="tech-float alt" style={{right:'-12px', bottom:'-14px'}} title="Chart">📈</div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section id="skills" className="min-h-screen flex items-center justify-center py-16 sm:py-24 pl-[20px] pr-[20px] ">
          <div className="w-full">
            <h2 className="mb-6 text-2xl font-semibold text-white">Skills</h2>
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-sm font-medium text-white/70">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {label:'HTML', icon:'🟧'},
                    {label:'CSS', icon:'🔷'},
                    {label:'JavaScript', icon:'🟨'},
                    {label:'React', icon:'⚛︎'},
                    {label:'Tailwind', icon:'🌬️'},
                    {label:'Bootstrap', icon:'🅱️'},
                  ].map((s) => (
                    <span key={s.label} className="skill-badge"><span>{s.icon}</span>{s.label}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium text-white/70">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {label:'Node.js', icon:'🟩'},
                    {label:'Express.js', icon:'🚏'},
                    {label:'REST APIs', icon:'🔗'},
                  ].map((s) => (
                    <span key={s.label} className="skill-badge"><span>{s.icon}</span>{s.label}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium text-white/70">Database</h3>
                <div className="flex flex-wrap gap-3">
                  {[{label:'MongoDB', icon:'🍃'}].map((s) => (
                    <span key={s.label} className="skill-badge"><span>{s.icon}</span>{s.label}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium text-white/70">Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {label:'Git', icon:'🔧'},
                    {label:'GitHub', icon:'🐙'},
                    {label:'VS Code', icon:'🧩'},
                    {label:'Figma', icon:'🎨'},
                  ].map((s) => (
                    <span key={s.label} className="skill-badge"><span>{s.icon}</span>{s.label}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium text-white/70">Others</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {label:'Python (Basics)', icon:'🐍'},
                    {label:'Power BI', icon:'📊'},
                    {label:'Google Analytics', icon:'📈'},
                  ].map((s) => (
                    <span key={s.label} className="skill-badge"><span>{s.icon}</span>{s.label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center py-16 pb-20 sm:py-24 sm:pb-28 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="mb-6 text-2xl font-semibold text-white">Projects</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* AuthFlow Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="project-card"
              >
                <div className="project-inner h-56">
                  <div className="project-face">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🔐</span>
                      <div className="project-title">AuthFlow – Full Stack Login & Registration</div>
                    </div>
                    <div className="mt-3 tech-row text-white/80">
                      <span className="skill-badge"><FaReact />React</span>
                      <span className="skill-badge"><FaNodeJs />Node.js</span>
                      <span className="skill-badge"><SiExpress />Express.js</span>
                      <span className="skill-badge"><SiMongodb />MongoDB</span>
                      <span className="skill-badge"><SiTailwindcss />Tailwind</span>
                      <span className="skill-badge"><SiJsonwebtokens />JWT</span>
                    </div>
                  </div>
                  <div className="project-face back">
                    <div className="text-white/90">
                      Features: JWT auth, password hashing, animated UI.
                    </div>
                    <a className="github-btn mt-4" href="https://github.com/SkSankeeth/AuthFlow.git" target="_blank" rel="noreferrer">
                      <FaGithub /> View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Sales Analysis Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="project-card"
              >
                <div className="project-inner h-56">
                  <div className="project-face">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">📊</span>
                      <div className="project-title">Sales Analysis Dashboard</div>
                    </div>
                    <div className="mt-3 tech-row text-white/80">
                      <span className="skill-badge"><SiPython />Python</span>
                      <span className="skill-badge"><SiPandas />Pandas</span>
                      <span className="skill-badge"><SiNumpy />NumPy</span>
                      <span className="skill-badge"><FaChartBar />Seaborn</span>
                    </div>
                  </div>
                  <div className="project-face back">
                    <div className="text-white/90">
                      Features: data cleaning, EDA, business insights.
                    </div>
                    <a className="github-btn mt-4" href="https://github.com/SkSankeeth/sales-analysis-dashboard.git" target="_blank" rel="noreferrer">
                      <FaGithub /> View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center py-16 pb-20 sm:py-24 sm:pb-28 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="mb-6 text-2xl font-semibold text-white">Experience</h2>
            <div className="timeline">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="timeline-item"
              >
                <div className="timeline-card">
                  <div className="text-white/90">Data Analytics Intern – NoviTech <span className="text-white/50">(Nov–Dec 2024)</span></div>
                  <div className="mt-2 text-sm text-white/70">Analyzed real-world datasets using Python & visualization tools.</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="timeline-item"
              >
                <div className="timeline-card">
                  <div className="text-white/90">Artificial Intelligence Intern – NoviTech <span className="text-white/50">(Nov–Dec 2024)</span></div>
                  <div className="mt-2 text-sm text-white/70">Learned fundamentals of AI, implemented beginner ML models.</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="education" className="min-h-screen flex items-center justify-center py-16 pb-20 sm:py-24 sm:pb-28 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="mb-6 text-2xl font-semibold text-white">Education</h2>
            <div className="timeline">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="timeline-item"
              >
                <div className="timeline-card">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🎓</span>
                    <div className="text-white/90 font-medium">Bachelor of Information and Communication Technology (BICT) (Hons)</div>
                  </div>
                  <div className="mt-1 text-sm text-white/60">University of Sri Jayewardenepura – 2022 to Present</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="timeline-item"
              >
                <div className="timeline-card">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📘</span>
                    <div className="text-white/90 font-medium">G.C.E. Advanced Level – 2021 (Technology Stream)</div>
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    ICT: A | Science for Technology: A | Engineering Technology: B
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="certifications" className="min-h-screen flex items-center justify-center py-16 pb-20 sm:py-24 sm:pb-28 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="mb-6 text-2xl font-semibold text-white">Certifications</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="cert-card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaReact className="text-2xl text-blue-400" />
                  <div className="text-white/90 font-medium">React.js Bootcamp</div>
                </div>
                <div className="text-sm text-white/60">LetsUpgrade • Apr 2025</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="cert-card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaGitAlt className="text-2xl text-orange-500" />
                  <div className="text-white/90 font-medium">Git & GitHub Bootcamp</div>
                </div>
                <div className="text-sm text-white/60">LetsUpgrade • Jun 2025</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="cert-card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">📊</div>
                  <div className="text-white/90 font-medium">Power BI Real-Time Projects</div>
                </div>
                <div className="text-sm text-white/60">NoviTech • Apr 2025</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="cert-card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">📈</div>
                  <div className="text-white/90 font-medium">Google Analytics Certification</div>
                </div>
                <div className="text-sm text-white/60">Skillshop • Jan 2025 – Expires Jan 2026</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="cert-card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">🔬</div>
                  <div className="text-white/90 font-medium">Data Science Foundations</div>
                </div>
                <div className="text-sm text-white/60">Great Learning • Aug 2024</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="cert-card"
              >
                <div className="flex items-center gap-3 mb-2">
                  <SiPython className="text-2xl text-green-400" />
                  <div className="text-white/90 font-medium">Python Fundamentals</div>
                </div>
                <div className="text-sm text-white/60">Great Learning • Aug 2024</div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center py-16 sm:py-24 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="mb-6 text-2xl font-semibold text-white">Contact Me</h2>
            <div className="neon-card">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2 text-white/80">
                  <div>Email: <a className="underline hover:no-underline" href="mailto:sankeethsithamparanathan@gmail.com">sankeethsithamparanathan@gmail.com</a></div>
                  <div>Phone: <a className="underline hover:no-underline" href="tel:+94783882050">+94783882050</a></div>
                  <div>LinkedIn: <a className="underline hover:no-underline" href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a" target="_blank" rel="noreferrer">linkedin.com/in/sankeeth-sithamparanathan-83765a30a</a></div>
                  <div>GitHub: <a className="underline hover:no-underline" href="https://github.com/SkSankeeth" target="_blank" rel="noreferrer">github.com/SkSankeeth</a></div>
                </div>
                <div className="mt-2 flex items-center gap-3 sm:mt-0">
                  <a className="icon-neon" href="mailto:sankeethsithamparanathan@gmail.com" aria-label="Email"><MdEmail size={20} /></a>
                  <a className="icon-neon" href="tel:+94783882050" aria-label="Phone"><FaPhone size={20} /></a>
                  <a className="icon-neon" href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                  <a className="icon-neon" href="https://github.com/SkSankeeth" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="text-center text-xs text-white/60">© 2025 Sankeeth | Built with 💜 React & Tailwind</div>
      </footer>
    </div>
  )
}

export default App
