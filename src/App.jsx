import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaArrowRight, FaChartBar, FaPhone, FaTimes } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJsonwebtokens, SiPandas, SiPython, SiNumpy } from 'react-icons/si'

function App() {
  const [flippedCert, setFlippedCert] = useState(null)
  const [openCert, setOpenCert] = useState(null)
  const [pdfErrors, setPdfErrors] = useState({})
  
  const handlePdfError = (certId) => {
    setPdfErrors(prev => ({ ...prev, [certId]: true }))
  }

  const openCertificate = (cert) => {
    setOpenCert(cert)
    setFlippedCert(cert.id)
  }

  const closeCertificate = () => {
    setOpenCert(null)
    setFlippedCert(null)
    document.body.style.overflow = 'auto'
  }

  // Handle Escape key to close modal
  useEffect(() => {
    if (!openCert) return
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenCert(null)
        setFlippedCert(null)
        document.body.style.overflow = 'auto'
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [openCert])
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-50 nav-glow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="glow-brand text-2xl font-bold tracking-tight text-white sm:text-3xl">Sankeeth</a>
          <nav className="hidden items-center gap-6 sm:flex">
            <a href="#home" className="nav-link text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative">
              Home
            </a>
            <a href="#about" className="nav-link text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative">
              About
            </a>
            <a href="#skills" className="nav-link text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative">
              Skills
            </a>
            <a href="#projects" className="nav-link text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative">
              Projects
            </a>
            <a href="#experience" className="nav-link text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative">
              Experience
            </a>
            <a href="#education" className="nav-link text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative">
              Education
            </a>
            <a href="#certifications" className="nav-link text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative">
              Certifications
            </a>
            <a href="#contact" className="nav-link text-sm font-medium text-white/80 hover:text-white transition-all duration-300 relative">
              Contact
            </a>
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
              <a href="/SANKEETH_SITHAMPARANATHAN.pdf" download className="btn-primary">Download Resume</a>
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
            <h2 className="section-title">About Me</h2>
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
            <h2 className="section-title">Skills</h2>
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-sm font-medium text-white/70">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {label:'HTML5', icon:'🟧'},
                    {label:'CSS3', icon:'🔷'},
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
                    {label:'JWT', icon:'🔐'},
                    {label:'bcrypt', icon:'🔒'},
                  ].map((s) => (
                    <span key={s.label} className="skill-badge"><span>{s.icon}</span>{s.label}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-medium text-white/70">Database</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {label:'MongoDB', icon:'🍃'},
                    {label:'MySQL', icon:'🗄️'},
                    {label:'PHP', icon:'🐘'},
                  ].map((s) => (
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
                    {label:'Postman', icon:'📮'},
                    {label:'Firebase', icon:'🔥'},
                    {label:'Canva', icon:'🎨'},
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
            <h2 className="section-title">Projects</h2>
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

              {/* MediLink– Doctor Appointment Booking System Card */}
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
                      <span className="text-2xl">⚕️</span>
                      <div className="project-title">MediLink– Doctor Appointment Booking System</div>
                    </div>
                    <div className="mt-3 tech-row text-white/80">
                      <span className="skill-badge"><FaReact />React</span>
                      <span className="skill-badge"><FaNodeJs />Node.js</span>
                      <span className="skill-badge"><SiExpress />Express.js</span>
                      <span className="skill-badge"><SiMongodb />MongoDB</span>
                      <span className="skill-badge"><SiTailwindcss />Tailwind</span>
                      <span className="skill-badge"><SiJsonwebtokens />JWT</span>
                      <span className="skill-badge"><SiJsonwebtokens />bcrypt</span>
                    </div>
                  </div>
                  <div className="project-face back">
                    <div className="text-white/90">
                      Features: Role-based auth, time-slot scheduling, admin dashboard, responsive Tailwind UI with file uploads.
                    </div>
                    <a className="github-btn mt-4" href="https://github.com/SkSankeeth/Medlink-Doctor-Appointment-System.git" target="_blank" rel="noreferrer">
                      <FaGithub /> View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Portfolio Website Card */}
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
                      <span className="text-2xl">💼</span>
                      <div className="project-title">Portfolio Website</div>
                    </div>
                    <div className="mt-3 tech-row text-white/80">
                      <span className="skill-badge"><FaReact />React</span>
                      <span className="skill-badge"><SiTailwindcss />Tailwind</span>
                      <span className="skill-badge">Framer Motion</span>
                      <span className="skill-badge">Vite</span>
                    </div>
                  </div>
                  <div className="project-face back">
                    <div className="text-white/90">
                      Features: Modern portfolio with flip animations, PDF certificate viewer, responsive design, glassmorphism effects, and smooth animations.
                    </div>
                    <a className="github-btn mt-4" href="https://github.com/SkSankeeth/sankeeth-portfolio" target="_blank" rel="noreferrer">
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
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
            <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="timeline-item"
              >
                <div className="timeline-card">
                  <div className="text-white/90 font-medium">Software Engineer Intern (Remote) – Yuga Yatra Retail (OPC) Pvt Ltd</div>
                  <div className="mt-1 text-sm text-white/60">Aug 2025– Oct 2025 • Bengaluru, Karnataka, India</div>
                  <div className="mt-3 text-sm text-white/70 space-y-1">
                    <div> Contributed to web application development using AI-assisted tools and Firebase, supporting real-time features and deployments.</div>
                    <div> Worked on real-time client projects and freelancing workflows.</div>
                    <div> Collaborated with team members using Google Workspace.</div>
                    <div> Gained exposure to deployment, client requirements, and production workflows.</div>
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
                  <div className="text-white/90">Data Analytics Intern (Remote) – NoviTech R&D Pvt Ltd</div>
                  <div className="mt-1 text-sm text-white/60">Nov 2024– Dec 2024 • Coimbatore, Tamilnadu, India</div>
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
                  <div className="text-white/90">Artificial Intelligence Intern (Remote) – NoviTech R&D Pvt Ltd</div>
                  <div className="mt-1 text-sm text-white/60">Nov 2024– Dec 2024 • Coimbatore, Tamilnadu, India</div>
                  <div className="mt-2 text-sm text-white/70">Learned fundamentals of AI, implemented beginner ML models.</div>
                </div>
              </motion.div>

              
            </div>
          </div>
        </section>

        <section id="education" className="min-h-screen flex items-center justify-center py-16 pb-20 sm:py-24 sm:pb-28 pl-[20px] pr-[20px]">
          <div className="w-full">
            <h2 className="section-title">Education</h2>
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
            <h2 className="section-title">Certifications</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 'react',
                  title: 'React.js Bootcamp',
                  issuer: 'LetsUpgrade',
                  date: 'Apr 2025',
                  icon: <FaReact className="text-2xl text-blue-400" />,
                  pdf: '/React.js bootcamp LUP.pdf'
                },
                {
                  id: 'git',
                  title: 'Git & GitHub Bootcamp',
                  issuer: 'LetsUpgrade',
                  date: 'Jun 2025',
                  icon: <FaGitAlt className="text-2xl text-orange-500" />,
                  pdf: '/Github bootcamp LUP.pdf'
                },
                {
                  id: 'powerbi',
                  title: 'Power BI Real-Time Projects',
                  issuer: 'NoviTech',
                  date: 'Apr 2025',
                  icon: <div className="text-2xl">📊</div>,
                  pdf: '/Solving Real-Time Projects on Power BI skilcamp.pdf'
                },
                {
                  id: 'analytics',
                  title: 'Google Analytics Certification',
                  issuer: 'Skillshop',
                  date: 'Jan 2025 – Expires Jan 2026',
                  icon: <div className="text-2xl">📈</div>,
                  pdf: '/Google Analytics Certification.pdf'
                },
                {
                  id: 'datascience',
                  title: 'Data Science Foundations',
                  issuer: 'Great Learning',
                  date: 'Aug 2024',
                  icon: <div className="text-2xl">🔬</div>,
                  pdf: '/Data Science Foundations GL.pdf'
                },
                {
                  id: 'python',
                  title: 'Python Fundamentals',
                  issuer: 'Great Learning',
                  date: 'Aug 2024',
                  icon: <SiPython className="text-2xl text-green-400" />,
                  pdf: '/Python fundamentals for beginners GL.pdf'
                }
              ].map((cert, index) => (
              <motion.div
                  key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="cert-card-flip"
                  onClick={() => openCertificate(cert)}
              >
                  <div className={`cert-inner ${flippedCert === cert.id ? 'flipped' : ''}`}>
                    <div className="cert-face">
                <div className="flex items-center gap-3 mb-2">
                        {cert.icon}
                        <div className="text-white/90 font-medium">{cert.title}</div>
                      </div>
                      <div className="text-sm text-white/60">{cert.issuer} • {cert.date}</div>
                      <div className="mt-3 text-xs text-white/50">Click to view certificate PDF</div>
                    </div>
                    <div className="cert-face back">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-white/80 text-center">
                          <div className="text-4xl mb-2">📄</div>
                          <div className="text-sm font-medium">Certificate Preview</div>
                          <div className="text-xs text-white/60 mt-1">Click card to view full certificate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate Modal Popup */}
        {openCert && (
          <div 
            className="cert-modal-overlay"
            onClick={closeCertificate}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="cert-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div className="flex items-center gap-3">
                  {openCert.icon}
                  <div>
                    <h3 className="text-white font-semibold text-lg">{openCert.title}</h3>
                    <p className="text-white/60 text-sm">{openCert.issuer} • {openCert.date}</p>
                  </div>
                </div>
                <button
                  onClick={closeCertificate}
                  className="cert-modal-close"
                  aria-label="Close modal"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="cert-modal-body">
                {pdfErrors[openCert.id] ? (
                  <div className="cert-pdf-error-modal">
                    <div className="text-white/80 text-center mb-4">
                      <div className="text-6xl mb-4">📄</div>
                      <div className="text-lg font-medium mb-2">PDF not available</div>
                      <div className="text-sm text-white/60">Certificate PDF not found at the specified path</div>
                    </div>
                    <div className="cert-pdf-actions">
                      <a 
                        href={openCert.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cert-action-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaArrowRight /> Try Opening PDF
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <iframe
                      src={`${openCert.pdf}#toolbar=1&navpanes=0&scrollbar=1&zoom=page-fit&view=FitH`}
                      className="cert-modal-pdf-viewer"
                      title={`${openCert.title} Certificate`}
                      onError={() => handlePdfError(openCert.id)}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                    <div className="cert-modal-actions">
                      <a 
                        href={openCert.pdf} 
                        download 
                        className="cert-modal-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaArrowRight className="rotate-[-45deg]" /> Download PDF
                      </a>
                      <a 
                        href={openCert.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cert-modal-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaArrowRight /> Open in New Tab
                      </a>
                    </div>
                  </>
                )}
              </div>
              </motion.div>
          </div>
        )}

        <section id="contact" className="min-h-screen flex items-center justify-center py-16 sm:py-24 pl-[20px] pr-[20px]">
          <div className="w-full max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="section-title mb-4">Get In Touch</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                Let's connect and build something amazing together!
              </p>
              </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="contact-card group"
              >
                <div className="contact-card-icon email-icon">
                  <MdEmail size={20} />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Email Me</h3>
                  <p className="contact-card-subtitle">Send me a message</p>
                  <a 
                    href="mailto:sankeethsithamparanathan@gmail.com" 
                    className="contact-card-link"
                  >
                    sankeethsithamparanathan@gmail.com
                  </a>
                </div>
                <div className="contact-card-action">
                  <a 
                    href="mailto:sankeethsithamparanathan@gmail.com"
                    className="contact-card-btn"
                  >
                    Send Email
                  </a>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="contact-card group"
              >
                <div className="contact-card-icon phone-icon">
                  <FaPhone size={20} />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">Call Me</h3>
                  <p className="contact-card-subtitle">Let's have a conversation</p>
                  <a 
                    href="tel:+94783882050" 
                    className="contact-card-link"
                  >
                    +94 78 388 2050
                  </a>
                </div>
                <div className="contact-card-action">
                  <a 
                    href="tel:+94783882050"
                    className="contact-card-btn"
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="contact-card group"
              >
                <div className="contact-card-icon linkedin-icon">
                  <FaLinkedin size={20} />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">LinkedIn</h3>
                  <p className="contact-card-subtitle">Connect professionally</p>
                  <a 
                    href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a" 
                    target="_blank" 
                    rel="noreferrer"
                    className="contact-card-link"
                  >
                    linkedin.com/in/sankeeth-sithamparanathan-83765a30a
                  </a>
                </div>
                <div className="contact-card-action">
                  <a 
                    href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card-btn"
                  >
                    Connect
                  </a>
                </div>
              </motion.div>

              {/* GitHub Card */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="contact-card group"
              >
                <div className="contact-card-icon github-icon">
                  <FaGithub size={20} />
                </div>
                <div className="contact-card-content">
                  <h3 className="contact-card-title">GitHub</h3>
                  <p className="contact-card-subtitle">Check out my work</p>
                  <a 
                    href="https://github.com/SkSankeeth" 
                    target="_blank" 
                    rel="noreferrer"
                    className="contact-card-link"
                  >
                    github.com/SkSankeeth
                  </a>
                </div>
                <div className="contact-card-action">
                  <a 
                    href="https://github.com/SkSankeeth"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card-btn"
                  >
                    Visit Profile
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Contact Icons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-4 mt-12"
            >
              <p className="text-white/60 text-sm font-medium">Or reach out via</p>
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:sankeethsithamparanathan@gmail.com" 
                  className="contact-quick-icon email-quick"
                  aria-label="Email"
                >
                  <MdEmail size={24} />
                </a>
                <a 
                  href="tel:+94783882050" 
                  className="contact-quick-icon phone-quick"
                  aria-label="Phone"
                >
                  <FaPhone size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/sankeeth-sithamparanathan-83765a30a" 
                  target="_blank" 
                  rel="noreferrer"
                  className="contact-quick-icon linkedin-quick"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="https://github.com/SkSankeeth" 
                  target="_blank" 
                  rel="noreferrer"
                  className="contact-quick-icon github-quick"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </motion.div>
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
