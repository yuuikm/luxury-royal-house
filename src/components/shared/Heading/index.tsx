// libraries
import { type FC } from 'react';
import SmTitle from 'components/shared/SmTitle';

type HeadingProps = {
  title: string;
  highlighted: string;
  style: string;
};

const Heading: FC<HeadingProps> = ({ title, highlighted, style }) => {
  return (
    <div className={`container heading-bg ${style}`}>
      <div className="heading-wrapper">
        <div className="heading-overlay">
          <SmTitle />
          <h2 className="heading-title">
            <span className="heading-highlighted-title">{highlighted}</span>
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Heading;
