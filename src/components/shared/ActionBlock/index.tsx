// libraries
import { type FC } from 'react';
import SmTitle from 'components/shared/SmTitle';

type ActionBlockProps = {
  title: string;
  highlighted: string;
  quote: string;
  callToAction: string;
};

const ActionBlock: FC<ActionBlockProps> = ({ title, highlighted, quote, callToAction }) => (
  <div className="container call-to-action-bg">
    <div className="call-to-action-wrapper">
      <div className="call-to-action-title-wrapper">
        <SmTitle />
        <h1 className="call-to-action-title">
          <span className="call-toaction-highlighted">{highlighted}</span>
          {title}
        </h1>
      </div>
      <div className="call-to-action-quote">
        <span>{quote}</span>
        <span>{callToAction}</span>
      </div>
    </div>
  </div>
);

export default ActionBlock;
