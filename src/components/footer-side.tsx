import { Socials } from '@/icons';
import { email, socialMedia } from '@/utils';

const SideLink: React.FC = ({ children }) => {
  return (
    <div className="fixed bottom-0 z-10 w-10 mx-5 text-secondary ">
      {children}
      <div className="block w-px h-24 mx-auto mt-5 bg-separator-secondary" />
    </div>
  );
};

const SideFooter: React.FC = () => {
  return (
    <div className="flex flex-row w-full max-w-5xl">
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
            aria-label="email"
            href={`mailto:${email}`}
            className="p-3 text-xs tracking-widest horizontal-tb font-fira hover-link">
            {email}
          </a>
        </SideLink>
      </div>
    </div>
  );
};

export default SideFooter;
