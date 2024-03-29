import { Socials } from '@/icons';
import { IconsType } from '@/models';
import { EMAIL, socialMedia } from '@/utils';

function MobileFooter(): JSX.Element {
  return (
    <footer className="bottom-0 flex flex-row w-full m-auto mb-5 gap-7">
      <div className="w-full separator-x" />
      {socialMedia.map(({ url, name }, index) => (
        <a
          key={index}
          aria-label={name}
          title={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          <Socials media={name} className="svg-link hover-link" />
        </a>
      ))}
      <a
        aria-label="Email"
        title="Email"
        href={`mailto:${EMAIL}`}
        target="_blank"
        rel="noopener noreferrer">
        <Socials media={IconsType.EMAIL} className="svg-link hover-link" />
      </a>
      <div className="w-full separator-x" />
    </footer>
  );
}

export default MobileFooter;
