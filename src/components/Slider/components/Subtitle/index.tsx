// libraries
import { type FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Subtitle: FC<Props> = ({ children }) => {
  return <h2>{children}</h2>;
};

export default Subtitle;
