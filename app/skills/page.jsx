// pages/index.js
import SkillCard from '../components/SkillCard/SkillCard';
import styles from './skills.module.css'
const skills = [
  { label: 'HTML', percentage: 90 },
  { label: 'CSS', percentage: 85 },
  { label: 'JavaScript', percentage: 80 },
  // Add more skills here
];

const Skills = () => {
  return (
    <section className={styles.section}>
        <div className={styles.title}>
            <h1 className='font-bold text-2xl'>My Skills</h1>
            <h3>Frontend | Backend | UX Design | Graphic Design | 3D Enthusiast | Digital Marketing</h3>
        </div>

        <div className={styles.technologies}>
            <SkillCard title={'Frontend'}></SkillCard>
            <SkillCard title={'Backend'}></SkillCard>
            <SkillCard title={'UX'}></SkillCard>
            <SkillCard title={'Graphic'}></SkillCard>
        </div>

       <div class={styles.backgroundVideo}>
        <video loop autoplay="true" playsinline="true" muted="true" data-video-player-target="player" style={{ width: '100vw', height: '100vh' }} src="https://static.vecteezy.com/system/resources/previews/020/775/532/mp4/digital-data-network-big-data-high-tech-background-plexus-data-connection-and-network-background-plexus-line-moving-on-black-background-plexus-network-connection-moving-free-video.mp4" type="video/mp4">
        </video>
        </div>
    </section>
  );
};

export default Skills;
