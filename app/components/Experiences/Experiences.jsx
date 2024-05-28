import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './Experiences.module.css'; // Ensure this is the correct path to your CSS module
import Image from 'next/image'; // If you are using Next.js



export const Experiences = ({ experiences }) => {
  if (!experiences || experiences.length === 0) {
    return <p>No experiences available</p>;
  }

  return (
    <VerticalTimeline>
      {experiences.map((experience, index) => {
        console.log(experience); // Debugging line
        return (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: experience.background, color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid ${experience.background}` }}
            date={experience.date}
            iconStyle={{ background: experience.background, color: '#fff', overflow: 'hidden' }}
            icon={<Image src={experience.companyLogo} fill="true" objectFit="cover" alt={experience.company} />}
            visible={true}
            //lineColor={theme === 'white' ? '#000' : '#fff'  }
          >
            <h3 className={styles.verticalElementTitle}>{experience.company}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.role}</h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};
