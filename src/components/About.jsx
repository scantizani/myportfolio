import React from 'react';
import SilvanaImage from '../assets/silvana.jpg';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>

      {/* Exibindo a imagem */}
      <img 
        src={SilvanaImage} 
        alt="Silvana Rondina" 
        style={{ width: '200px', borderRadius: '10px', marginBottom: '20px' }} 
      />

      <p>
        I am a Cyber Security Analyst with over ten years of experience, specializing in 
        risk assessment, compliance, and IT governance.
      </p>
      <p>
        I have worked with frameworks like <strong>NIST, ITIL, and ISO 27001</strong>, helping organizations 
        improve security and data governance.
      </p>
      <p>
        Currently, I am studying <strong>Software Engineering at Centennial College</strong> and expanding my knowledge 
        in cybersecurity and software development.
      </p>

      {/* Botão para baixar o Resume */}
      <a 
        href="/Silvana-Rondina-Resume.pdf" 
        download="Silvana-Rondina-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold"
        }}
      >
        📄 Download Resume
      </a>
    </div>
  );
}
