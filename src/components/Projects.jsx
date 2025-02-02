import React from 'react';
import CyberImage from '../assets/Cyber.jpg';
import ReactPortfolioImage from '../assets/reactPortfolio.jpg';
import EcommerceImage from '../assets/ecommerce.jpg';

const projects = [
  {
    title: 'Cyber Security Audit',
    description: 'Audited the security system of a global company.',
    result: 'Reduced critical vulnerabilities by 40% and improved ISO 27001 compliance.',
    image: CyberImage
  },
  {
    title: 'React Portfolio Website',
    description: 'Developed my personal portfolio using React and Vite.',
    result: 'Created a fully responsive and interactive website to showcase my skills.',
    image: ReactPortfolioImage
  },
  {
    title: 'E-commerce Security Enhancement',
    description: 'Implemented security measures for an online store.',
    result: 'Improved the platform’s security and prevented data leaks.',
    image: EcommerceImage
  }
];

export default function Projects() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} style={styles.projectCard}>
          <img src={project.image} alt={project.title} style={styles.image} />
          <div style={styles.projectDetails}>
            <h2 style={styles.title}>{project.title}</h2>
            <p style={styles.description}>{project.description}</p>
            <p style={styles.result}><strong>Result:</strong> {project.result}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '900px',
    margin: 'auto'
  },
  header: {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '20px'
  },
  projectCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
  },
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginRight: '20px'
  },
  projectDetails: {
    flex: 1,
    color: '#fff'
  },
  title: {
    fontSize: '1.5em',
    marginBottom: '10px'
  },
  description: {
    fontSize: '1em',
    marginBottom: '10px'
  },
  result: {
    fontSize: '1em',
    fontWeight: 'bold'
  }
};
