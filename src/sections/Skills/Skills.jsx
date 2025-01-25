import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Premire Pro" />
        <SkillList src={checkMarkIcon} skill="Primary Cutting"/>
        <SkillList src={checkMarkIcon} skill="Background Score" />
        <SkillList src={checkMarkIcon} skill="StoryTelling" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Direction" />
        <SkillList src={checkMarkIcon} skill="Photoshop" />
        <SkillList src={checkMarkIcon} skill="Short Form Content" />
        <SkillList src={checkMarkIcon} skill="Documentaries" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Color Grading" />
        <SkillList src={checkMarkIcon} skill="Vlogs"/>
        <SkillList src={checkMarkIcon} skill="Short Films" />
      </div>
    </section>
  );
}

export default Skills;
