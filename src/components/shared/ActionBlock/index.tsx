// libraries
import { type FC } from 'react';
import SmTitle from 'components/shared/SmTitle';
import LinkButton from 'components/shared/LinkButton';
import { LINKS } from 'constants/routes';

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
        <span className="quote-text">{quote}</span>
        <LinkButton text={callToAction} link={LINKS.portfolioLink} style="secondary"></LinkButton>
      </div>
    </div>
  </div>
);

export default ActionBlock;
