import useWitdh from '@/hooks/use-width';
import MobileFooter from './footer-mobile';
import SideFooter from './footer-side';

const Footer: React.FC = () => {
  const { width } = useWitdh();

  return (
    <>
      {width < 900 && <MobileFooter />}
      {width >= 900 && <SideFooter />}
    </>
  );
};

export default Footer;
