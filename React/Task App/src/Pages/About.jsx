import "../components/header.css";
function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Lumovy Technology</h1>
        <p className="about-tagline">
          Building smart, simple, and reliable digital solutions for growing businesses.
        </p>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Lumovy Technology is a software development company focused on building
          modern web applications that help businesses manage their work efficiently.
          This Task Management App is one of our projects — designed to help teams
          and individuals organize, track, and complete their tasks with ease.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Custom websites and web applications built with modern technologies like React.</p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>Clean, user-friendly interfaces designed to make your product easy to use.</p>
          </div>
          <div className="service-card">
            <h3>App Maintenance</h3>
            <p>Ongoing support and updates to keep your application running smoothly.</p>
          </div>
          <div className="service-card">
            <h3>Custom Software</h3>
            <p>Tailored software solutions built around your specific business needs.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To make technology simple and accessible — building tools that save time,
          reduce complexity, and help people focus on what matters most.
        </p>
      </section>

      <section className="about-section">
        <h2>Contact</h2>
        <p>Email: contact@lumovytechnology.com</p>
        <p>Location: Lahore, Pakistan</p>
      </section>
    </div>
  );
}

export default About;