import { Language } from '@/models';
import { FlagEnUs } from './flag-en-us';
import { FlagFr } from './flag-fr';

interface FlagProps {
  language: Language;
  className?: string;
}

export function Flags({ language, className }: FlagProps): JSX.Element {
  switch (language) {
    case Language.EN:
      return <FlagEnUs className={className} />;
    case Language.FR:
      return <FlagFr className={className} />;
  }
}
