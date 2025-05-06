// libraries
import { type FC } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string;
  link: string;
  style: string;
};

const LinkButton: FC<ButtonProps> = ({ text, link, style }) => {
  return (
    <Link className={`btn-link ${style}`} to={link}>
      {text}
    </Link>
  );
};

export default LinkButton;
