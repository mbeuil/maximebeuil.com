import { Socials } from '@/icons';
import { email, socialMedia } from '@/utils';

const SideLink: React.FC = ({ children }) => {
  return (
    <div className="fixed bottom-0 z-10 text-secondary w-10 mx-5 ">
      {children}
      <div className="block mt-5 w-px h-24 mx-auto bg-separator-secondary" />
    </div>
  );
};

const SideFooter: React.FC = () => {
  return (
    <div className="max-w-5xl flex flex-row w-full">
      <div>
        <SideLink>
          {socialMedia.map(({ url, name }, index) => (
            <div className="py-3" key={index}>
              <a
                href={url}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer">
                <Socials media={name} className="svg-link hover-link" />
              </a>
            </div>
          ))}
        </SideLink>
      </div>
      <div className="ml-footer">
        <SideLink>
          <a
            aria-label={'email'}
            href={`mailto:${email}`}
            className="horizontal-tb p-3 font-fira text-xs tracking-widest hover-link">
            {email}
          </a>
        </SideLink>
      </div>
    </div>
  );
};

export default SideFooter;
