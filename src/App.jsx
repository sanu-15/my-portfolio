import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(null);

  const projects = [
    {
      title: "Netflix Clone (MERN)",
      desc: "Full-stack Netflix UI with authentication, movies database, and responsive design.",
      tags: ["React", "Node.js", "MongoDB", "Bootstrap"],
      live: "#",
      code: "#",
    },
    {
      title: "Chat App (MERN)",
      desc: "Real-time chat application with server-side conversation handling and socket.io integration.",
      tags: ["React", "Express", "Socket.io", "Node.js"],
      live: "#",
      code: "#",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Java",
    "PHP",
    "MySQL",
  ];

  const education = [
    { year: "2023-Present", degree: "BCA (2nd Year)", institute: "LN College" },
    { year: "2021-2023", degree: "HSC (55%)", institute: "OCCM College" },
  ];

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent("✅ Message sent — thank you!");
        setForm({ name: "", email: "", message: "" });
      } else setSent("❌ Server error — try later.");
    } catch (err) {
      console.error(err);
      setSent("⚠️ Network error — check backend.");
    }
  };

  return (
    <div className="bg-dark-green text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-green">
        <div className="container">
          <span className="navbar-brand"></span>
        </div>
      </nav>

      <div className="container py-5">
        {/* Hero Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold glow-text">
              Hi, I'm Saniya Paswan
            </h1>
            <p className="lead glow-text">
              Fresher IT student learning MERN stack. Passionate about building
              modern web apps & learning new tech.
            </p>
            <a href="#projects" className="btn glow-btn me-2">
              See Projects
            </a>
            <a href="#contact" className="btn glow-btn">
              Contact
            </a>
          </div>
          <div className="col-md-6 text-center">
            <div className="hero-img-wrapper">
              <img
                src="https://media-bom5-2.cdn.whatsapp.net/v/t61.24694-24/589016855_1159760656296206_2095369894030976992_n.jpg?ccb=11-4&oh=01_Q5Aa3AGU-Umo5QFmCCviwQPDOxMUREm-pSzwfZFLz9Pgaek75Q&oe=69381B15&_nc_sid=5e03e0&_nc_cat=105"
                alt="Saniya"
                className="img-fluid rounded-circle shadow hero-img glow-img"
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-5 p-4 rounded shadow about-card glow-card">
          <h2>About Me</h2>
          <p>
            I am an enthusiastic and motivated aspiring Full-Stack Developer,
            eager to start my career through a JavaScript Full-Stack internship.
            I have hands-on knowledge of web development technologies and a
            strong desire to learn, contribute, and grow in a professional
            environment. I am passionate about building efficient and
            user-friendly web applications and continuously improving my skills
            to become a competent full-stack developer.
          </p>
          <h4>Skills</h4>
          <div className="mb-3">
            {skills.map((skill, idx) => (
              <span key={idx} className="badge glow-badge">
                {skill}
              </span>
            ))}
          </div>
          <h4>Education</h4>
          <ul>
            {education.map((edu, idx) => (
              <li key={idx}>
                {edu.year} — {edu.degree}, {edu.institute}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div id="projects" className="mb-5 text-center">
          <h2 className="glow-text">Projects</h2>
          <div className="row justify-content-center">
            {projects.map((p, i) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card card-3d h-100 project-card glow-card">
                  <div className="card-body">
                    <h5 className="card-title glow-text">{p.title}</h5>
                    <p className="card-text">{p.desc}</p>
                    <div className="mb-2">
                      {p.tags.map((t, idx) => (
                        <span key={idx} className="badge glow-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={p.live} className="btn glow-btn me-2">
                      Live
                    </a>
                    <a href={p.code} className="btn glow-btn">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mb-5 text-center">
          <h2 className="glow-text mb-3">Message Me</h2>
          <p>
            Feel free to reach out for projects, or just a friendly hello! 😄
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6 mb-4">
              <form
                onSubmit={handleSubmit}
                className="mx-auto"
                style={{ maxWidth: "420px" }}
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-control glow-input mb-3"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="form-control glow-input mb-3"
                  required
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="form-control glow-input mb-3"
                  rows="4"
                  required
                ></textarea>
                <button type="submit" className="btn glow-btn mb-2">
                  Send Message
                </button>
                {sent && <div className="glow-text mt-2">{sent}</div>}
              </form>
            </div>

            {/* Contact Info Box */}
            <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center">
              <div className="p-4 rounded shadow glow-card text-center">
                <h4 className="glow-text mb-3">Connect with Me</h4>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:saniyapaswan5@gmail.com"
                    className="glow-text"
                  >
                    saniyapaswan5@gmail.com
                  </a>
                  <br />
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919321761433" className="glow-text">
                    +91 9321761433
                  </a>
                  <br />
                  <strong>Location:</strong> Mumbai, Maharashtra
                </p>
                <div className="d-flex justify-content-center gap-2 mt-2">
                  <a
                    href="https://www.linkedin.com/in/saniya-paswan-b16305274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm glow-btn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/sanu-15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm glow-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Footer */}
      <footer className="text-center py-3 glow-text">
        Built by <strong>SANIYA PASWAN</strong>
      </footer>
    </div>
  );
}
