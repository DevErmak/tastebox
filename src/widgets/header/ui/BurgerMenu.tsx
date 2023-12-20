import { Button, Typography } from '@/shared/ui';
import './header.scss';
import head1PNG from '@/shared/image/head/head1.png';
import head2PNG from '@/shared/image/head/head2.png';
import head3PNG from '@/shared/image/head/head3.png';
import head4PNG from '@/shared/image/head/head4.png';
import { ReactComponent as SvgInstagram } from '@/shared/ui/svg/instagram.svg';
import { ReactComponent as SvgPinterest } from '@/shared/ui/svg/pinterest.svg';
import { ReactComponent as SvgTwitter } from '@/shared/ui/svg/twitter.svg';
import { ReactComponent as SvgTiktok } from '@/shared/ui/svg/tiktok.svg';
import { Link } from '@/shared/ui/link/Link';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';

type Props = {
  isActiveBurger: boolean;
  setIsActiveBurger: React.Dispatch<React.SetStateAction<boolean>>;
};
export const BurgerMenu: React.FC<any> = ({ isActiveBurger, setIsActiveBurger }: Props) => {
  const useScrollbarWidth = () => {
    const didCompute = useRef(false);
    const widthRef = useRef(0);

    if (didCompute.current) return widthRef.current;

    const outer = document.createElement('div');

    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    // @ts-ignore
    outer.style.msOverflowStyle = 'scrollbar';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode?.removeChild(outer);
    didCompute.current = true;
    widthRef.current = scrollbarWidth;
    return scrollbarWidth;
  };

  const scrollbarWidth = useScrollbarWidth();

  if (isActiveBurger) {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  } else {
    document.body.style.overflowY = 'scroll';
    document.body.style.paddingRight = `unset`;
  }
  const clickOutside = (e: MouseEvent) => {
    if (burgerRef.current && !burgerRef.current.contains(e.target as Node)) {
      setIsActiveBurger(false);
    }
  };
  const burgerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  });
  return (
    <div
      ref={burgerRef}
      className={classNames('burger-menu-container', {
        'burger-menu-container-active': isActiveBurger,
      })}
    >
      <div
        className={
          isActiveBurger
            ? 'burger-menu-all-product burger-menu-all-product-active'
            : 'burger-menu-all-product'
        }
      >
        <Typography type="display-xs" className={'burger-menu-text'}>
          ALL PRODUCTS
        </Typography>
        <div className="burger-menu-photo-line">
          <img src={head1PNG} alt="dishes" loading="lazy" />
          <img src={head2PNG} alt="dishes" loading="lazy" />
          <img src={head3PNG} alt="dishes" loading="lazy" />
        </div>
        <div className="burger-menu-photo-line">
          <img src={head4PNG} alt="dishes" loading="lazy" />
        </div>
      </div>
      <div className="burger-menu-text-line">
        <Typography type="display-xs" className={'burger-menu-text'}>
          ALL PRODUCTS
        </Typography>
        <Typography type="display-xs" className={'burger-menu-text'}>
          PROMISE
        </Typography>
      </div>
      <div className="burger-menu-text-line">
        <Typography type="display-xs" className={'burger-menu-text'}>
          NEWS
        </Typography>
        <Typography type="display-xs" className={'burger-menu-text'}>
          FAQ
        </Typography>
      </div>
      <div className="burger-menu-contact-line">
        <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
          <Button type="primary" className={'burger-menu-button-circle'}>
            <SvgInstagram className="burger-menu-contact" />
          </Button>
        </Link>
        <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
          <Button type="primary" className={'burger-menu-button-circle'}>
            <SvgTwitter className="burger-menu-contact" />
          </Button>
        </Link>
        <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
          <Button type="primary" className={'burger-menu-button-circle'}>
            <SvgPinterest className="burger-menu-contact" />
          </Button>
        </Link>
        <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
          <Button type="primary" className={'burger-menu-button-circle'}>
            <SvgTiktok className="burger-menu-contact" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
