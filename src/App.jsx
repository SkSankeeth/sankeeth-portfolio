import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowRight, FaChartBar } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens, SiPandas, SiPython, SiNumpy } from 'react-icons/si'

function App() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-50 nav-glow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="glow-brand text-lg font-semibold tracking-tight text-white">Sankeeth</a>
          <nav className="hidden items-center gap-5 sm:flex">
            <a href="#home" className="text-sm text-white/80 hover:text-white">Home</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
            <a href="#skills" className="text-sm text-white/80 hover:text-white">Skills</a>
            <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#experience" className="text-sm text-white/80 hover:text-white">Experience</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com" aria-label="GitHub" className="text-white/80 hover:text-white"><FaGithub size={20} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white/80 hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <section id="home" className="relative grid min-h-[calc(100dvh-72px)] grid-cols-1 items-center gap-10 py-10 sm:py-10 md:grid-cols-2">
          <div className="hero-bg"></div>
          <div style={{position:'relative', zIndex:1}}>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="neon-text text-4xl font-extrabold leading-tight sm:text-6xl"
            >
              Sankeeth Sithamparanathan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 text-lg text-white/80"
            >
              <span className="typing">Full Stack Developer | Data Enthusiast</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a href="/resume.pdf" download className="btn-primary">Download Resume</a>
              <a href="#projects" className="card"><span className="text-white/90">View Projects</span></a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden h-[60dvh] rounded-2xl border border-white/5 md:block"
            style={{overflow:'hidden'}}
          >
            <div className="particle" style={{left:'12%', top:'68%', animationDelay:'0s'}}></div>
            <div className="particle alt" style={{left:'72%', top:'22%', animationDelay:'-3s'}}></div>
            <div className="particle" style={{left:'40%', top:'36%', animationDelay:'-6s'}}></div>
            <div className="particle alt" style={{left:'85%', top:'75%', animationDelay:'-9s'}}></div>
          </motion.div>
        </section>

        <section id="about" className="py-16 sm:py-24">
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
                <img src="/profile.jpg" alt="Sankeeth profile" className="h-full w-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
            >
              <div className="neon-card">
                <p className="text-white/80">
                  ICT undergraduate at the University of Sri Jayewardenepura with hands-on experience in MERN stack development and data analysis.
                  Skilled in building responsive web apps and dashboards. Completed projects like <strong>AuthFlow</strong> (authentication system) and
                  <strong> Sales Analysis Dashboard</strong> (Python, Pandas, visualization). Actively seeking internship opportunities.
                </p>
              </div>

              {/* floating tech icons */}
              <div className="tech-float" style={{left:'-14px', top:'-14px'}} title="React">⚛︎</div>
              <div className="tech-float alt" style={{right:'-16px', top:'-10px'}} title="Node">🟩</div>
              <div className="tech-float" style={{left:'-10px', bottom:'-12px'}} title="DB">🗄️</div>
              <div className="tech-float alt" style={{right:'-12px', bottom:'-14px'}} title="Chart">📈</div>
            </motion.div>
          </div>
        </section>
        
        <section id="skills" className="py-16 sm:py-24">
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
        </section>

        <section id="projects" className="py-16 sm:py-24">
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
                  <div className="project-title">AuthFlow – Full Stack Login & Registration</div>
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
                  <a className="github-btn mt-4" href="https://github.com/" target="_blank" rel="noreferrer">
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
                  <div className="project-title">Sales Analysis Dashboard</div>
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
                  <a className="github-btn mt-4" href="https://github.com/" target="_blank" rel="noreferrer">
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-16 sm:py-24">
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
        </section>

        <section id="contact" className="py-16 sm:py-24">
          <h2 className="mb-6 text-2xl font-semibold text-white">Contact Me</h2>
          <div className="neon-card">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2 text-white/80">
                <div>Email: <a className="underline hover:no-underline" href="mailto:sankeethsithamparanathan@gmail.com">sankeethsithamparanathan@gmail.com</a></div>
                <div>LinkedIn: <a className="underline hover:no-underline" href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a" target="_blank" rel="noreferrer">linkedin.com/in/sankeeth-sithamparanathan-83765a30a</a></div>
                <div>GitHub: <a className="underline hover:no-underline" href="https://github.com/SkSankeeth" target="_blank" rel="noreferrer">github.com/SkSankeeth</a></div>
              </div>
              <div className="mt-2 flex items-center gap-3 sm:mt-0">
                <a className="icon-neon" href="mailto:sankeethsithamparanathan@gmail.com" aria-label="Email"><MdEmail size={20} /></a>
                <a className="icon-neon" href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                <a className="icon-neon" href="https://github.com/SkSankeeth" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
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
