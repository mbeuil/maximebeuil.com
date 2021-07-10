import { Language } from '@/models';
import { FlagEnUs } from './flag-en-us';
import { FlagFr } from './flag-fr';

interface FlagProps {
  language: Language;
  className?: string;
}

export const Flags: React.FC<FlagProps> = ({ language, className }) => {
  switch (language) {
    case Language.EN:
      return <FlagEnUs className={className} />;
    case Language.FR:
      return <FlagFr className={className} />;
  }
};
