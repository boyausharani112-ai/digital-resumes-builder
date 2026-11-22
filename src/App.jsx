
import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    objective: "",
    education: "",
    skills: "",
    projects: "",
    experience: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      <h1>Digital Resume Builder</h1>

      <div className="resume-layout">

        {/* Resume Input Form */}
        <div className="form-section">
          <h2>Enter Your Details</h2>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
          />

          <textarea
            name="objective"
            placeholder="Career Objective"
            value={form.objective}
            onChange={handleChange}
          />

          <textarea
            name="education"
            placeholder="Education Details"
            value={form.education}
            onChange={handleChange}
          />

          <textarea
            name="skills"
            placeholder="Technical Skills"
            value={form.skills}
            onChange={handleChange}
          />

          <textarea
            name="projects"
            placeholder="Projects"
            value={form.projects}
            onChange={handleChange}
          />

          <textarea
            name="experience"
            placeholder="Experience / Internship"
            value={form.experience}
            onChange={handleChange}
          />

          <button onClick={handlePrint}>
            Download Resume / Print PDF
          </button>
        </div>

        {/* Resume Preview */}
        <div className="preview-section">
          <h2>Resume Preview</h2>

          <div className="resume">

            <h1>{form.name || "Your Name"}</h1>

            <p>
              {form.email || "Email Address"} |
              {" "}{form.phone || "Phone Number"}
            </p>

            <p>{form.address || "Your Address"}</p>

            <hr />

            <h3>Career Objective</h3>
            <p>{form.objective || "Your career objective will appear here."}</p>

            <h3>Education</h3>
            <p>{form.education || "Your education details will appear here."}</p>

            <h3>Technical Skills</h3>
            <p>{form.skills || "Your skills will appear here."}</p>

            <h3>Projects</h3>
            <p>{form.projects || "Your projects will appear here."}</p>

            <h3>Experience / Internship</h3>
            <p>{form.experience || "Your experience will appear here."}</p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
