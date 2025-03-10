import { useState } from "react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await fetch("https://formspree.io/f/xqapkaka", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            setSubmitted(true);
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
            <h2>Contáctame</h2>
            {submitted ? (
                <p>Gracias por tu mensaje. Te responderé pronto.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Correo Electrónico:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Mensaje:
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            )}
        </div>
    );
}
