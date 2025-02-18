import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";

import ProjectImg1 from "../assets/projects/mdp.jpg";
import ProjectImg2 from "../assets/projects/todo-list.jpg";
import ProjectImg3 from "../assets/projects/ecommerce.jpg";


const ProjectData = [
  {
    name: "MULTIPLE DISEASE PREDICTOR",
    description: "diagnose diseases such as breast cancer, Parkinson’s disease, heart failure, and diabetes.",
    image: ProjectImg1,
    previewLink: "https://github.com/kapoorkhushi03/RFTechnologies-Internship"
    
  },
  {
    name: "todo-list",
    description: "webapp to store your day to day tasks",
    image: ProjectImg2,
    previewLink: "https://github.com/kapoorkhushi03/Multiple_disease_Predictor"
  },
];
const ProjectData2 = [
  {
    name: "Ecommerce website",
    description: "Complete Responsive website using React js and Tailwind CSS",
    image: ProjectImg3,
    previewLink: "https://shopsy-tcj.netlify.app/",
  },
  
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="My Portfolio" />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      <Page number={6}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={7}>
        <Projects ProjectData={ProjectData2} />
      </Page>
      <Page number={8}>
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
