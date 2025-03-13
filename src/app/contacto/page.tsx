"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xqapkaka", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setIsSubmitting(false);

    if (response.ok) {
      setShowSuccess(true);
      setTimeout(() => {
        router.push("/"); // Redirige a la página principal después de 3 segundos
      }, 2000);
    } else {
      alert("Hubo un error al enviar el formulario. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="contact-container">
      <h1>Contáctame</h1>
      <p>Déjame un mensaje y te responderé pronto.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {showSuccess && (
        <div className="success-popup">
          <p>¡Mensaje enviado con éxito!</p>
          <p>Regresando a la página principal...</p>
        </div>
      )}

      <style jsx>{`
        .contact-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        p {
          margin-bottom: 2rem;
          color: #ccc;
          font-size: 1rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        label {
          font-weight: bold;
          color: #fff;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        input,
        textarea {
          padding: 0.75rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        input:focus,
        textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
        }
        textarea {
          min-height: 120px;
          resize: none;
        }
        button {
          padding: 0.75rem;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:disabled {
          background: #0056b3;
          cursor: not-allowed;
        }
        button:hover:not(:disabled) {
          background: #0056b3;
        }
        .success-popup {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 1.2rem;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}