import { Socials } from '@/icons';
import { IconsType } from '@/models';
import { email, socialMedia } from '@/utils';

const MobileFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 flex flex-row w-full m-auto mb-5 gap-7">
      <div className="block w-full h-px my-auto bg-separator-secondary" />
      {socialMedia.map(({ url, name }, index) => (
        <a
          key={index}
          aria-label={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer">
          <Socials media={name} className="svg-link hover-link" />
        </a>
      ))}
      <a
        aria-label="Email"
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer">
        <Socials media={IconsType.EMAIL} className="svg-link hover-link" />
      </a>
      <div className="block w-full h-px my-auto bg-separator-secondary" />
    </div>
  );
};

export default MobileFooter;
