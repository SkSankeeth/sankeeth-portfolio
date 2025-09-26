import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaChartBar, FaPhone, FaBars, FaTimes } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens, SiPandas, SiPython, SiNumpy } from 'react-icons/si'
import { useState } from 'react'

function App() {
  const [certificateModal, setCertificateModal] = useState({ open: false, title: '', subtitle: '', image: '' })
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const openCertificate = (data) => {
    setCertificateModal({ open: true, ...data })
  }
  const closeCertificate = () => setCertificateModal({ open: false, title: '', subtitle: '', image: '' })
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
          <button className="sm:hidden icon-neon" aria-label="Open menu" onClick={() => setMobileNavOpen(true)}>
            <FaBars size={18} />
          </button>
          <div className="hidden sm:flex items-center gap-3">
            <a href="https://github.com/SkSankeeth" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/80 hover:text-white"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileNavOpen && (
        <div className="drawer-overlay" onClick={() => setMobileNavOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-white text-lg font-semibold">Menu</div>
              <button className="icon-neon" aria-label="Close menu" onClick={() => setMobileNavOpen(false)}>
                <FaTimes size={16} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { href:'#home', label:'Home' },
                { href:'#about', label:'About' },
                { href:'#skills', label:'Skills' },
                { href:'#projects', label:'Projects' },
                { href:'#experience', label:'Experience' },
                { href:'#education', label:'Education' },
                { href:'#certifications', label:'Certifications' },
                { href:'#contact', label:'Contact' },
              ].map((item) => (
                <a key={item.href} href={item.href} className="neon-card text-white/90" onClick={() => setMobileNavOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a className="icon-neon" href="https://github.com/SkSankeeth" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
              <a className="icon-neon" href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
            </div>
          </div>
        </div>
      )}

      <section id="home" className="relative overflow-hidden pl-[20px]">
          <div className="hero-bg"></div>
          <div className="grid w-full h-[85vh] sm:h-screen grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2">
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

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        

        <section id="about" className="min-h-screen flex items-center justify-center py-12 pb-16 sm:py-16 sm:pb-20 md:py-24 md:pb-28 pl-[20px] pr-[20px]">
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
        
        <section id="skills" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-24 pl-[20px] pr-[20px]">
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

        <section id="projects" className="min-h-screen flex items-center justify-center py-12 pb-16 sm:py-16 sm:pb-20 md:py-24 md:pb-28 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="mb-6 text-2xl font-semibold text-white">Projects</h2>
            <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* MediLink Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="project-card"
              >
                <div className="project-inner h-64">
                  <div className="project-face">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🏥</span>
                      <div className="project-title">MediLink – Doctor Appointment Booking</div>
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
                    <div className="text-white/90 space-y-1 text-sm">
                      <div>• Multi-role auth (Patient/Doctor/Admin)</div>
                      <div>• JWT auth, Bcrypt hashing, RBAC</div>
                      <div>• Scheduling with date/time slot management</div>
                      <div>• Admin dashboard: users & appointment tracking</div>
                      <div>• Responsive UI + file uploads via Multer</div>
                    </div>
                    <a className="github-btn mt-4" href="https://github.com/SkSankeeth/Medlink-Doctor-Appointment-System.git" target="_blank" rel="noreferrer">
                      <FaGithub /> View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* AuthFlow Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="project-card"
              >
                <div className="project-inner h-64">
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
                    <div className="text-white/90 space-y-1 text-sm">
                      <div>• Secure auth with protected routes</div>
                      <div>• JWT sessions and Bcrypt password hashing</div>
                      <div>• Card-flip UI, responsive Tailwind design</div>
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
                <div className="project-inner h-64">
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
                    <div className="text-white/90 space-y-1 text-sm">
                      <div>• Clean, modular data cleaning and EDA</div>
                      <div>• Insights on stores and customer trends</div>
                      <div>• Visualized results with clear charts</div>
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

        <section id="experience" className="min-h-screen flex items-center justify-center py-12 pb-16 sm:py-16 sm:pb-20 md:py-24 md:pb-28 pl-[20px] pr-[20px]">
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
                  <div className="text-white/90">Software Engineer Intern – YugaYatra Retail OPC Private Limited <span className="text-white/50">(Remote • Aug 2025 – present)</span></div>
                  <div className="mt-2 text-sm text-white/70 space-y-1">
                    <div>• Built web apps using Cursor AI, Firebase Studio, and AI tools</div>
                    <div>• Designed responsive UI/UX with Canva</div>
                    <div>• Contributed to freelance projects on Upwork and e-commerce portals</div>
                    <div>• Collaborated via Google Workspace in an Agile workflow</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="timeline-item"
              >
                <div className="timeline-card">
                  <div className="text-white/90">Artificial Intelligence Intern – NoviTech R&D Pvt Ltd <span className="text-white/50">(Remote • Nov–Dec 2024)</span></div>
                  <div className="mt-2 text-sm text-white/70">Learned AI fundamentals and implemented beginner ML models; explored data science workflows.</div>
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
                  <div className="text-white/90">Data Analytics Intern – NoviTech R&D Pvt Ltd <span className="text-white/50">(Remote • Nov–Dec 2024)</span></div>
                  <div className="mt-2 text-sm text-white/70">Analyzed datasets using Python, Pandas, Matplotlib, Seaborn; delivered insights via EDA and dashboards.</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="education" className="min-h-screen flex items-center justify-center py-12 pb-16 sm:py-16 sm:pb-20 md:py-24 md:pb-28 pl-[20px] pr-[20px]">
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

        <section id="certifications" className="min-h-screen flex items-center justify-center py-12 pb-16 sm:py-16 sm:pb-20 md:py-24 md:pb-28 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="mb-6 text-2xl font-semibold text-white">Certifications</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="cert-card cursor-pointer"
                onClick={() => openCertificate({ title: 'React.js Bootcamp', subtitle: 'LetsUpgrade • Apr 2025', image: '/React.js Bootcamp.png' })}
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
                className="cert-card cursor-pointer"
                onClick={() => openCertificate({ title: 'Git & GitHub Bootcamp', subtitle: 'LetsUpgrade • Jun 2025', image: '/Git & GitHub Bootcamp.png' })}
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
                className="cert-card cursor-pointer"
                onClick={() => openCertificate({ title: 'Power BI Real-Time Projects', subtitle: 'NoviTech • Apr 2025', image: '/Power BI Real-Time Projects.png' })}
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
                className="cert-card cursor-pointer"
                onClick={() => openCertificate({ title: 'Google Analytics Certification', subtitle: 'Skillshop • Jan 2025 – Expires Jan 2026', image: '/Google Analytics Certification.jpg' })}
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
                className="cert-card cursor-pointer"
                onClick={() => openCertificate({ title: 'Data Science Foundations', subtitle: 'Great Learning • Aug 2024', image: '/Data Science Foundations_page-0001 GL.jpg' })}
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
                className="cert-card cursor-pointer"
                onClick={() => openCertificate({ title: 'Python Fundamentals', subtitle: 'Great Learning • Aug 2024', image: '/Python fundamentals for beginners GL_page-0001.jpg' })}
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

        <section id="contact" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-24 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="mb-6 text-2xl font-semibold text-white">Contact Me</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                className="neon-card flex items-center justify-between"
                onClick={async () => { try { await navigator.clipboard.writeText('sankeethsithamparanathan@gmail.com') } catch(_) {} }}
                aria-label="Copy email"
              >
                <div className="flex items-center gap-3">
                  <span className="icon-neon"><MdEmail size={20} /></span>
                  <div className="text-left">
                    <div className="text-white/90 font-medium">Email</div>
                    <div className="text-white/60 text-sm">Tap to copy</div>
                  </div>
                </div>
                <span className="text-white/50 text-sm">sankeethsithamparanathan@gmail.com</span>
              </button>

              <a
                className="neon-card flex items-center justify-between"
                href="tel:+94783882050"
                aria-label="Call phone"
              >
                <div className="flex items-center gap-3">
                  <span className="icon-neon"><FaPhone size={20} /></span>
                  <div className="text-left">
                    <div className="text-white/90 font-medium">Phone</div>
                    <div className="text-white/60 text-sm">Tap to call</div>
                  </div>
                </div>
                <span className="text-white/50 text-sm">+94 78 388 2050</span>
              </a>

              <a
                className="neon-card flex items-center justify-between"
                href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a"
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn"
              >
                <div className="flex items-center gap-3">
                  <span className="icon-neon"><FaLinkedin size={20} /></span>
                  <div className="text-left">
                    <div className="text-white/90 font-medium">LinkedIn</div>
                    <div className="text-white/60 text-sm">Opens profile</div>
                  </div>
                </div>
                <span className="text-white/50 text-sm">/sankeeth-sithamparanathan-83765a30a</span>
              </a>

              <a
                className="neon-card flex items-center justify-between"
                href="https://github.com/SkSankeeth"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub"
              >
                <div className="flex items-center gap-3">
                  <span className="icon-neon"><FaGithub size={20} /></span>
                  <div className="text-left">
                    <div className="text-white/90 font-medium">GitHub</div>
                    <div className="text-white/60 text-sm">Open profile</div>
                  </div>
                </div>
                <span className="text-white/50 text-sm">@SkSankeeth</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Certificate Modal */}
      {certificateModal.open && (
        <div className="modal-overlay" onClick={closeCertificate}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-white text-lg font-semibold">{certificateModal.title}</div>
              <button className="btn-primary" onClick={closeCertificate}>Close</button>
            </div>
            <div className="text-white/70 mb-4 text-sm">{certificateModal.subtitle}</div>
            {certificateModal.image ? (
              <img src={certificateModal.image} alt={certificateModal.title} className="w-full h-auto rounded-lg" />
            ) : (
              <div className="neon-card text-white/70 text-sm">
                Certificate preview not available. Add an image to public/ and wire its path here.
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="text-center text-xs text-white/60">© 2025 Sankeeth | Built with 💜 React & Tailwind</div>
      </footer>
    </div>
  )
}

export default App
