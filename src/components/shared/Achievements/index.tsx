// libraries
import { type FC } from 'react';
import CountUp from 'react-countup';
import { useAchievementsSectionCounter } from 'components/shared/Achievements/config';

const Achievements: FC = () => {
  const achievementsSectionCounter = useAchievementsSectionCounter();

  return (
    <div className="container achievements-bg">
      <div className="achievements-wrapper">
        {achievementsSectionCounter.map(({ id, number, label, suffix }) => (
          <div key={id} className="achievements-item item-border">
            <span className="achievements-label">{label}</span>
            <span className="achievements-number">
              <CountUp end={number} duration={3} suffix={suffix} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
