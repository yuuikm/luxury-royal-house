// libraries
import { type FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Wrapper: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Wrapper;
