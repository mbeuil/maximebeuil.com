import MobileFooter from '@/components/footer-mobile';
import SideFooter from '@/components/footer-side';
import { useWidth } from '@/hooks';

function Footer(): JSX.Element {
  const { width } = useWidth();

  return (
    <>
      {width < 950 && <MobileFooter />}
      {width >= 950 && <SideFooter />}
    </>
  );
}

export default Footer;
