import { IconProps } from '@/models';

export function Arrow({ className }: IconProps): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M17.586 11l-5.293-5.293a1 1 0 1 1 1.414-1.414l7 7c.63.63.184 1.707-.707 1.707H4a1 1 0 0 1 0-2h13.586zm-.75 3.253a1 1 0 1 1 1.328 1.494l-4.5 4a1 1 0 1 1-1.328-1.494l4.5-4z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
