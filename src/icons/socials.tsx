import { IconsType } from '@/models';
import { GitHub } from './github';
import { Linkedin } from './linkedin';
import { Twitter } from './twitter';
import { Email } from './email';

interface SocialsProps {
  media: IconsType;
  className?: string;
}

export function Socials({ media, className }: SocialsProps): JSX.Element {
  switch (media) {
    case IconsType.GITHUB:
      return <GitHub className={className} />;
    case IconsType.LINKEDIN:
      return <Linkedin className={className} />;
    case IconsType.TWITTER:
      return <Twitter className={className} />;
    case IconsType.EMAIL:
      return <Email className={className} />;
  }
}
