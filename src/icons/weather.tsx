import { Theme } from '@/models';
import { Moon } from './moon';
import { Sun } from './sun';

interface SocialsProps {
  theme: Theme;
  className?: string;
}

export const Weather: React.FC<SocialsProps> = ({ theme, className }) => {
  switch (theme) {
    case Theme.DARK:
      return <Moon className={className} />;
    case Theme.LIGHT:
      return <Sun className={className} />;
  }
};
