// libraries
import { type FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Title: FC<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Title;
