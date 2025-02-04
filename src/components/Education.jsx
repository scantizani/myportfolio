import React from "react";
import "../styles/styles.css"; // Import global styles

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>

      {/* Centennial College */}
      <div className="education-card">
        <h2>Centennial College</h2>
        <p><strong>Program:</strong> Software Engineering</p>
        <p><strong>Duration:</strong> 2023 - Present</p>
        <p>
          Currently pursuing a **Software Engineering** degree, focusing on 
          secure software development, cloud computing, and cyber security. 
        </p>
      </div>

      {/* Cyber Security Certification */}
      <div className="education-card">
        <h2>Cyber Security Certification</h2>
        <p><strong>Institution:</strong> Online Certification Platform</p>
        <p><strong>Completed:</strong> 2022</p>
        <p>
          Specialized in **network security, penetration testing, and threat detection** 
          through an intensive cyber security training program.
        </p>
      </div>

      {/* High School */}
      <div className="education-card">
        <h2>High School Diploma</h2>
        <p><strong>Institution:</strong> São Paulo High School</p>
        <p><strong>Graduated:</strong> 2015</p>
        <p>
          Completed secondary education with a strong foundation in 
          mathematics, science, and technology.
        </p>
      </div>
    </div>
  );
};

export default Education;
