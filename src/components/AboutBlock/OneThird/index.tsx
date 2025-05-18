import { type FC } from 'react';
import SmTitle from 'components/shared/SmTitle';
import Socials from 'components/shared/Socials';

interface OneThirdProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  hasSocials?: boolean;
}

const OneThird: FC<OneThirdProps> = ({
  title,
  description,
  backgroundImage,
  hasSocials = true,
}) => {
  const blockClass = `about-block-one-third${backgroundImage ? ' about-block-img' : ''}`;

  return (
    <div className={blockClass}>
      {title && <h4 className="about-block-title">{title}</h4>}
      {title && <SmTitle color="gold" />}
      {description && <p className="about-block-description">{description}</p>}
      {hasSocials && <Socials style="white" />}
    </div>
  );
};

export default OneThird;
