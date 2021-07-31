import { Socials } from '@/icons';
import { EMAIL, socialMedia } from '@/utils';

interface SideLinkProps {
  children: React.ReactNode;
}

function SideLink({ children }: SideLinkProps): JSX.Element {
  return (
    <div className="fixed bottom-0 z-10 w-10 mx-5 text-primary">
      {children}
      <div className="block w-px h-24 mx-auto mt-5 bg-separator-secondary" />
    </div>
  );
}

function SideFooter(): JSX.Element {
  return (
    <footer className="flex flex-row w-full max-w-5xl">
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
            href={`mailto:${EMAIL}`}
            className="p-3 font-mono text-xs tracking-widest horizontal-tb hover-link">
            {EMAIL}
          </a>
        </SideLink>
      </div>
    </footer>
  );
}

export default SideFooter;
