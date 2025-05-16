// libraries
import { type FC } from 'react';

type TitleProps = {
  color?: 'dark' | 'light' | 'gold';
};

const SmTitle: FC<TitleProps> = ({ color }) => {
  return <h3 className={`small-title small-title-${color}`}>Luxury Royal House</h3>;
};

export default SmTitle;
