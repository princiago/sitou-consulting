
import { useEffect, useMemo, useState } from "react";

export default function App() {
  const nav = useMemo(() => ([
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "industries", label: "Industries" },
    { id: "contact", label: "Contact" },
  ]), []);

  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = "home";
      nav.forEach(n => {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) current = n.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [nav]);

  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#0b0b0c", color: "white" }}>
      <header style={{ padding: 20, borderBottom: "1px solid #222", position: "sticky", top: 0, background: "#0b0b0c" }}>
        <strong>Sitou Consulting</strong>
        <nav style={{ float: "right" }}>
          {nav.map(n => (
            <button key={n.id} onClick={() => go(n.id)} style={{ marginLeft: 10, background: "none", color: "white", border: "none" }}>
              {n.label}
            </button>
          ))}
        </nav>
      </header>

      <section id="home" style={{ padding: 60 }}>
        <h1>Corporate Consulting & Management Services</h1>
        <p>Executive-level strategy, operations, and management consulting across all industries.</p>
      </section>

      <section id="about" style={{ padding: 60, background: "white", color: "#111" }}>
        <h2>About Us</h2>
        <p>Sitou Consulting partners with organizations to improve performance, leadership, and operational efficiency.</p>
      </section>

      <section id="services" style={{ padding: 60 }}>
        <h2>Services</h2>
        <ul>
          <li>Business Strategy</li>
          <li>Management Consulting</li>
          <li>Process Optimization</li>
        </ul>
      </section>

      <section id="industries" style={{ padding: 60, background: "white", color: "#111" }}>
        <h2>Industries</h2>
        <p>Professional Services, Healthcare, Real Estate, Technology, Finance, Public & Nonprofit</p>
      </section>

      <section id="contact" style={{ padding: 60 }}>
        <h2>Contact</h2>
        <p>1201 W Peachtree St NW, Suite 2625, Atlanta, GA 30309</p>
        <p>(404) 452-7751</p>
        <p>contact@sitouconsulting.com</p>
      </section>

      <footer style={{ padding: 20, borderTop: "1px solid #222", textAlign: "center" }}>
        © {new Date().getFullYear()} Sitou Consulting
      </footer>
    </div>
  );
}
