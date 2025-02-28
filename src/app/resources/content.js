import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Yoshimar",
  lastName: "Badillo",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Ingenierio de Datos",
  avatar: "/images/yo.jpg",
  location: "México/CDMX", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
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
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:example@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
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
    link: "https://cal.com",
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
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Chatbot Conversacional con NLP",
        timeframe: "2023 - 2024",
        role: "Machine Learning y Deep Learning",
        achievements: [
          <>
            Desarrollo de chatbot conversacional: Dise˜no e implementaci´on de un asistente virtual utilizando Python 
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
        images: [],
      },
    ],
  },
      {
        company: "Universidad Autónoma Metropolitana",
        timeframe: "2020 - 2024",
        role: "Profesor adjunto, Departamento de Sistemas, División de Ciencias Básicas e Ingeniería",
        achievements: [
          <>
            Gestión educativa: Coordinación y enseñanza de asignaturas como Introducción a la Programación, 
            Administración y Diseño de Sistemas de Información, Gráficas por Computadora, y Programación 
            con Python (Posgrado), optimizando metodologías de enseñanza para grupos de hasta 150 estudiantes.
          </>,
          <>
            Análisis de rendimiento académico: Diseño de un tablero interactivo en Power BI, mostrando métricas clave como
            promedios de calificación, tasas de aprobación/reprobación, y correlaciones entre asistencia y 
            rendimiento académico en diversas asignaturas. Segmentación por curso, grupo y periodo académico para 
            identificar tendencias y patrones en el desempeño estudiantil.
          </>,
          <>
            Predicción del desempeño estudiantil: Desarrollo de un modelo de predicción integrado en Power BI 
            utilizando técnicas de machine learning en Python, permitiendo visualizar en tiempo real la probabilidad 
            de éxito o riesgo de cada estudiante según sus calificaciones y asistencia. Configuración de alertas 
            y visualizaciones para la detección temprana de estudiantes en riesgo.
          </>,
        ],
        images: [],
      },
    ],
  },
          {
        company: "Tiempo UAM",
        timeframe: "2016 - 2019",
        role: "Coordinador de revista digital Tiempo UAM, Divisi´on de Ciencias Sociales y Humanidades",
        achievements: [
          <>
            Análisis de temas en tendencia en ciencias sociales: Creación de un sistema de visualización en Power BI 
            que utiliza Google News API y Google Cloud Platform para extraer temas en tendencia en sociología a nivel 
            estatal en México, implementando un mapa interactivo con actualización regular que muestra los temas más 
            mencionados en cada región, apoyando en la planificación editorial de artículos con temas de alto interés social.
          </>,
          <>
            Recopilación y análisis de datos en la nube: Configuración de un flujo de trabajo en Python que recolecta 
            datos desde fuentes de noticias y los almacena en BigQuery, permitiendo análisis avanzados y consultas SQL en 
            la nube para identificar y segmentar temas en tendencias.
          </>,
        ],
        images: [],
      },
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
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Machine Learning y Deep Learning",
        description: <>Python (Scikit-learn, Tensorflow, Pytorch), NLP (mT5, Hugging Face, Transformers), 
        fine-tuning, MLOps (Optimización de modelos en GCP), Web scraping</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Noticias que considero importantes en el ámbito de la tecnología, la ciencia y la IA",
  description: `Read what ${person.name} has been up to recently`,
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
