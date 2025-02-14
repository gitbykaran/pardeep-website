import styles from './ProjectsStyles.module.css';
import warismind from '../../assets/warismind.png';
import fatehburj from '../../assets/chaparchiri.png';
import IIT from '../../assets/Samridhi.png';
import PRESTATE from '../../assets/PRESTATE.png';
import dollarwargi from '../../assets/Pind_1.png';
import maruti from '../../assets/car.png';
import teradurni from '../../assets/Durni.png';
import mundepindde from '../../assets/mundepindde.png';
import chamkilasong from '../../assets/chamkilasong.png';
import panchiwin from '../../assets/panchiwin.png';
import sidhutribute from '../../assets/sidhutribute.png';
import college1 from '../../assets/PGGC46.png';
import jalianwala from '../../assets/jalianwala.png';
import aevytv from '../../assets/aevytv.png';






import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard
          src={aevytv}
          link="https://drive.google.com/file/d/1Nxk5tmWfVggHr0TmYKkPUA8l2ZqELTnP/view?usp=sharing"
          h3="Aevy TV (YT)"
          p="Explainer"
        />
       <ProjectCard
          src={jalianwala}
          link="https://drive.google.com/file/d/1psh9WuAv7swJ4tSJnAjwwQgh4e8SMPdB/view?usp=sharing"
          h3="Jallianwala Incident"
          p="Explainer"
        />
        <ProjectCard
          src={warismind}
          link="https://www.youtube.com/watch?v=377QAQw83_c"
          h3="Waris's Mind"
          p="Documenting"
        />
        <ProjectCard 
          src={fatehburj}
          link="https://www.youtube.com/watch?v=Fin6sRi09aE"
          h3="Fateh Burj"
          p="Trip"
        />
        <ProjectCard
          src={IIT}
          link="https://www.youtube.com/watch?v=sSea2zvMHsg"
          h3="IIT Ropar Event"
          p="Samridhi 2.0"
        />
        <ProjectCard
          src={PRESTATE}
          link="https://www.youtube.com/shorts/ETAOXHChBng"
          h3="Promotional Reel"
          p="Pr Estate"
        />
        <ProjectCard
          src={dollarwargi}
          link="https://www.youtube.com/watch?v=pBMfVZvhY1U"
          h3="Hometown Diaries"
          p="Trip"
        />
        <ProjectCard
          src={maruti}
          link="https://www.youtube.com/watch?v=YuBCAzj-GL0"
          h3="Dad's Whip"
          p="Documenting"
        />
        <ProjectCard
          src={teradurni}
          link="https://www.youtube.com/watch?v=rX7TA1zF2Z8"
          h3="Pind Vibes"
          p="Documenting"
        />
        <ProjectCard
          src={mundepindde}
          link="https://www.youtube.com/watch?v=08s11TGWZeA"
          h3="Munde Pind De"
          p="Documenting"
        />
        <ProjectCard
          src={sidhutribute}
          link="https://drive.google.com/file/d/1wQahLErlVLVifvFs0oEW7-96cRBmkZkU/view"
          h3="Sidhu Tribute"
          p="Documentary"
        />
        <ProjectCard
          src={chamkilasong}
          link="https://www.youtube.com/watch?v=eROo-WfEeio"
          h3="90s Panjab"
          p="Documenting"
        />
        <ProjectCard
          src={panchiwin}
          link="https://www.youtube.com/shorts/EkfjqgJCvJ4"
          h3="Dad's Victory"
          p="Politics"
        />
        <ProjectCard
          src={college1}
          link="https://www.youtube.com/shorts/NJfJ5a-ytYo"
          h3="PGGC 46"
          p="Documenting"
        />
        
       
      </div>
    </section>
  );
}

export default Projects;
