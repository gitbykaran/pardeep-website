import styles from './HeroStyles.module.css';
import heroImg from '../../assets/PardeepPhoto.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/instagram_icon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import youtubeLight from '../../assets/youtube_light.svg';

import CV from '../../assets/pardeepresume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme === 'light' ? instagramLight : instagramLight;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const youtubeIcon = theme === 'light' ? youtubeLight : youtubeLight;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Pardeep Singh"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Pardeep
          <br />
          Singh
        </h1>
        <h2>Video Story Teller</h2>
        <span>
          <a href="https://www.youtube.com/@WorkofPardeepSingh/videos" target="_blank">
            <img src={youtubeIcon} alt="Youtube icon" />
          </a>
          <a href="https://www.instagram.com/pardeeprayat_/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://linkedin.com/in/pardeepsingh8373" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Crafting Stories Frame by Frame - Let Your Vision Come to Life
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
