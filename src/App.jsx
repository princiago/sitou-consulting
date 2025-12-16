
export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '20px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img src="/logo-sitou-consulting.jpeg" alt="Sitou Consulting Logo" style={{ height: '50px' }} />
        <h2>Sitou Consulting</h2>
      </header>

      <main style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
        <h1>Business Consulting & Management Services</h1>
        <p>
          Sitou Consulting provides professional consulting and management services across all industries.
          We help organizations improve operations, strengthen leadership, and achieve sustainable growth.
        </p>

        <h2>Our Services</h2>
        <ul>
          <li>Business strategy & planning</li>
          <li>Management consulting</li>
          <li>Operational efficiency</li>
          <li>Process optimization</li>
        </ul>

        <h2>Contact</h2>
        <p>1201 W Peachtree St NW, Suite 2625, Atlanta, GA 30309</p>
        <p>Phone: (404) 452-7751</p>
        <p>Email: contact@sitouconsulting.com</p>
      </main>

      <footer style={{ padding: '20px', borderTop: '1px solid #ddd', textAlign: 'center' }}>
        © {new Date().getFullYear()} Sitou Consulting
      </footer>
    </div>
  )
}
