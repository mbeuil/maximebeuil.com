import MobileFooter from '@/components/footer-mobile';
import SideFooter from '@/components/footer-side';
import { useWidth } from '@/hooks';
import { BREAKPOINT } from '@/utils';

function Footer(): JSX.Element {
  const { width } = useWidth();

  return (
    <>
      {width < BREAKPOINT && <MobileFooter />}
      {width >= BREAKPOINT && <SideFooter />}
    </>
  );
}

export default Footer;
