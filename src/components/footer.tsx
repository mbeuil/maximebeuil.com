import useWitdh from '@/hooks/use-width';
import MobileFooter from './footer-mobile';
import SideFooter from './footer-side';

function Footer(): JSX.Element {
  const { width } = useWitdh();

  return (
    <>
      {width < 800 && <MobileFooter />}
      {width >= 800 && <SideFooter />}
    </>
  );
}

export default Footer;
