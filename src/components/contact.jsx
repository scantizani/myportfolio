import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate(); // Hook para redirecionamento
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Função para atualizar os dados do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    
    // Redireciona para a Home após o envio
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Me</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />

        <label style={styles.label}>Phone (Optional):</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={styles.input} />

        <label style={styles.label}>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required style={styles.textarea} />

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
}

// Estilos da página
const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
  },
  header: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontSize: "1.2em",
    textAlign: "left",
  },
  input: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ddd",
    height: "100px",
  },
  button: {
    padding: "10px",
    fontSize: "1.2em",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
