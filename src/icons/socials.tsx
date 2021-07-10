import { IconsType } from '@/models';
import { GitHub } from './github';
import { Linkedin } from './linkedin';
import { Twitter } from './twitter';

interface SocialsProps {
  media: IconsType;
  className?: string;
}

export const Socials: React.FC<SocialsProps> = ({ media, className }) => {
  switch (media) {
    case IconsType.GITHUB:
      return <GitHub className={className} />;
    case IconsType.LINKEDIN:
      return <Linkedin className={className} />;
    case IconsType.TWITTER:
      return <Twitter className={className} />;
  }
};
