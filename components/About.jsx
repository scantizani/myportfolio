import React from "react";

export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>
      <p style={styles.text}>
        Hello! My name is <strong>Silvana Rondina</strong>, and I am a Cyber Security Analyst with experience in risk assessment, security compliance, and IT governance.
      </p>
      <p style={styles.text}>
        Passionate about technology, I enjoy learning new security strategies and working on innovative solutions to enhance cybersecurity.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  text: {
    fontSize: "1.2em",
    color: "#555",
    lineHeight: "1.6",
  },
};
