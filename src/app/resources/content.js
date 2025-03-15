import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Yoshimar",
  lastName: "Badillo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Ingenierio de Datos",
  avatar: "/images/avatar.jpg",
  location: "America/Mexico_City", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "Inglés"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  /*{
    name: "GitHub",
    icon: "github",
    link: "https://github.com/",
  },*/

  {
    name: "Email",
    icon: "email",
    link: "mailto:yoshimar.h_ba@yahoo.com.mx",
  },
];

const home = {
  label: "Inicio",
  title: `Portafolio`,
  description: `Sitio web personal donde muestro mi trabajo en análisis de datos, 
  inteligencia artificial y desarrollo de software.`,
  headline: <>Ingeniero de datos</>,
  subline: (
    <>
      Hola, soy Yoshimar, y aquí comparto mis proyectos desde su concepción hasta su implementación 
      haciendo uso de distintas tecnologías.
    </>
  ),
};

const about = {
  label: "Acerca de mí",
  title: "Acerca de mí",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "/contacto",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Ingeniero en computación con más de 10 años de experiencia en análisis de datos, Machine Learning y desarrollo de
        modelos predictivos. Con experiencia en la implementación de soluciones en la nube y el desarrollo de modelos con Python. 
        Amplio conocimiento en la creación de dashboards dinámicos en Power BI para la
        toma de decisiones estratégicas.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiencia laboral",
    experiences: [
      {
        company: "Independiente",
        timeframe: "2023 - 2024",
        role: "Modelo de Riesgo Crediticio (Machine Learning)",
        achievements: [
          <>
            Desarrollo e implementación de modelo predictivo de riesgo crediticio utilizando técnicas de Machine Learning (Random
            Forest, XGBoost) en Python, logrando una precisión del 85% en la identificación de buenos pagadores y 73% en
            la detección de impagos.
          </>,
          <>
            Optimización de modelos mediante técnicas avanzadas de balanceo de datos (SMOTE) y ajuste de hiperparámetros
            (GridSearchCV), mejorando el AUC-ROC de 0.65 a 0.69..
          </>,
          <>
            Feature Engineering y análisis predictivo de más de 25 variables crediticias, identificando los 3 indicadores 
            más influyentes en el comportamiento de pago: índice de capacidad crediticia, historial de pagos y nivel de ingresos.
          </>,
          <>
            Desarrollo de pipeline completo de ML: desde limpieza de datos hasta implementación de modelo en producción,
            incluyendo validación cruzada y evaluación de métricas (precisión, recall, F1-score).
          </>,
        ],
      },
      {
        company: "Chatbot Conversacional con NLP",
        timeframe: "2023 - 2024",
        role: "Machine Learning y Deep Learning",
        achievements: [
          <>
            Desarrollo de chatbot conversacional: Diseño e implementación de un asistente virtual utilizando Python 
            y el modelo mT5, mejorando la experiencia de usuario.
          </>,
          <>
            Procesamiento de lenguaje natural: Desarrollo de soluciones NLP para mejorar la comprensión contextual del chatbot,
            incluyendo análisis de sentimientos y extracción de entidades usando técnicas de ML.
          </>,
          <>
            Infraestructura cloud y MLOps: Configuración y gestión de máquinas virtuales con GPUs en Compute Engine (GCP)
            acelerando el proceso de entrenamiento y fine tuning del modelo, incluyendo ajuste de hiperparámetros y pruebas en
            producción.
          </>,
        ],
      }
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educación",
    institutions: [
      {
        name: "Universidad Autónoma Metropolitana",
        description: <>Ingeniería en computación</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades técnicas",
    skills: [
      {
        title: "Análisis de Datos y Business Intelligence",
        description: <>Power BI (Power Query, Service, DAX), Google Cloud Platform (BigQuery, Compute Engine, Cloud Storage), 
        Análisis de datos en SQL.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "Machine Learning y Deep Learning",
        description: <>Python (Scikit-learn, Tensorflow, Pytorch), NLP (mT5, Hugging Face, Transformers), 
        fine-tuning, MLOps (Optimización de modelos en GCP), Web scraping</>,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Noticias, recursos y técnicas",
  description: `Aquí puedes leer noticias que considero importantes sobre distintos temas`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Trabajos",
  title: "Mis proyectos",
  description: `Proyectos a lo largo de mi trayectoria laboral ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
