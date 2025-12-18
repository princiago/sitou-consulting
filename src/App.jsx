
export default function App() {
  return (
    <div className="page">
      <style>{css}</style>

      <header className="header">
        <div className="container header-inner">
          <Logo />
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <h1>Executive Consulting. Measurable Results.</h1>
        <p>
          Sitou Consulting delivers high-level business consulting and management
          services across all industries.
        </p>
      </section>

      <section id="about" className="section">
        <h2>About Sitou Consulting</h2>
        <p>
          We help organizations sharpen strategy, optimize operations, and
          execute with confidence through tailored consulting solutions.
        </p>
      </section>

      <section id="services" className="section navy">
        <h2>Our Services</h2>
        <ul>
          <li>Business Strategy</li>
          <li>Management Consulting</li>
          <li>Process Optimization</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>1201 W Peachtree St NW, Suite 2625, Atlanta, GA 30309</p>
        <p>(404) 452-7751</p>
        <p>contact@sitouconsulting.com</p>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Sitou Consulting
      </footer>
    </div>
  )
}

function Logo() {
  return (
    <div className="logo">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="42" height="42" rx="10"
          stroke="white" strokeWidth="2" />
        <text x="50%" y="58%" textAnchor="middle"
          fontSize="18" fontWeight="700" fill="white"
          fontFamily="Arial, sans-serif">S</text>
      </svg>
      <div>
        <strong>Sitou Consulting</strong>
        <div className="sub">Strategy • Operations • Execution</div>
      </div>
    </div>
  )
}

const css = `
body { margin:0; font-family:Arial, sans-serif; background:#0b1f3a; color:white; }
a { color:white; text-decoration:none; margin-left:20px; }
.page { min-height:100vh; }
.container { max-width:1100px; margin:auto; padding:20px; }

.header { position:sticky; top:0; background:rgba(11,31,58,.9); }
.header-inner { display:flex; justify-content:space-between; align-items:center; }

.logo { display:flex; align-items:center; gap:12px; }
.logo .sub { font-size:12px; opacity:.7; }

.hero { padding:120px 20px; text-align:center; animation:fade 1s ease; }
.hero h1 { font-size:48px; margin-bottom:20px; }

.section { padding:80px 20px; background:white; color:#0b1f3a; }
.section.navy { background:#0b1f3a; color:white; }
.section ul { list-style:none; padding:0; }
.section li { margin:10px 0; }

.footer { padding:30px; text-align:center; background:#071426; }

@keyframes fade {
  from { opacity:0; transform:translateY(20px); }
  to { opacity:1; transform:translateY(0); }
}
`
