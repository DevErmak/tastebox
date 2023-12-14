import { Button, Typography } from '@/shared/ui';
import './header.scss';
import { ReactComponent as SvgArrowDown } from '@/shared/ui/svg/caret-down.svg';
import { ReactComponent as SvgArrowUpRight } from '@/shared/ui/svg/arrow-up-right.svg';
import { ReactComponent as SvgUser } from '@/shared/ui/svg/user.svg';
import { ReactComponent as SvgList } from '@/shared/ui/svg/list.svg';
import head1PNG from '@/shared/image/head/head1.png';
import head2PNG from '@/shared/image/head/head2.png';
import head3PNG from '@/shared/image/head/head3.png';
import head4PNG from '@/shared/image/head/head4.png';
import { ReactComponent as SvgArrowRight } from '@/shared/ui/svg/arrow-right.svg';
import { Link } from '@/shared/ui/link/Link';
import { useState } from 'react';
import { ReactComponent as SvgInstagram } from '@/shared/ui/svg/instagram.svg';
import { ReactComponent as SvgPinterest } from '@/shared/ui/svg/pinterest.svg';
import { ReactComponent as SvgTwitter } from '@/shared/ui/svg/twitter.svg';
import { ReactComponent as SvgTiktok } from '@/shared/ui/svg/tiktok.svg';

import classNames from 'classnames';

type Props = {};
export const Header: React.FC<any> = ({}: Props) => {
  const [isActiveProduct, setIsActiveProduct] = useState(false);
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  return (
    <div className="header">
      <div
        // className={
        //   isActiveProduct
        //     ? 'header-container-menu-active header-container-menu'
        //     : 'header-container-menu'
        // }
        className={classNames('header-container-menu', {
          'header-container-menu-active': isActiveProduct,
        })}
      >
        <div className="header__menu">
          <Button
            type="outline"
            className={'dropdown-button'}
            onClick={() => setIsActiveProduct(!isActiveProduct)}
          >
            <Typography type="text-md" className={isActiveProduct ? 'product-active' : 'product'}>
              product{' '}
              <SvgArrowDown className={isActiveProduct ? 'arrow-down-active' : 'arrow-down'} />
            </Typography>
          </Button>
          <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
            <Typography
              type="text-md"
              className={isActiveProduct ? 'our-story-active' : 'our-story'}
            >
              our story
            </Typography>
          </Link>
          <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
            <Typography type="text-md" className={isActiveProduct ? 'faq-active' : 'faq'}>
              faq{' '}
              <SvgArrowUpRight
                className={isActiveProduct ? 'arrow-up-right-active' : 'arrow-up-right'}
              />
            </Typography>
          </Link>
        </div>
        {isActiveProduct ? (
          <Typography type="text-lg" className="header-text-tastebox">
            tastebox
          </Typography>
        ) : (
          ''
        )}
        <div className="header__login-menu">
          <Button
            type="outline"
            className={isActiveProduct ? 'header__login header__login-active' : 'header__login'}
          >
            <SvgUser className={isActiveProduct ? 'login-icon login-icon-active' : 'login-icon'} />
            <Typography type="text-md" className={isActiveProduct ? 'login-active login' : 'login'}>
              log in
            </Typography>
          </Button>
          <Button
            type="primary"
            className={isActiveProduct ? 'header__burger-active header__burger' : 'header__burger'}
            onClick={() => setIsActiveBurger(!isActiveBurger)}
          >
            <SvgList className={isActiveProduct ? 'svg-list-active svg-list' : 'svg-list'} />
          </Button>
        </div>
      </div>
      <div
        className={
          isActiveProduct ? 'dropdown-content dropdown-content-active' : 'dropdown-content'
        }
      >
        <div className="header-list-photo">
          <img src={head1PNG} alt="dishes" loading="lazy" />
          <img src={head2PNG} alt="dishes" loading="lazy" />
          <img src={head3PNG} alt="dishes" loading="lazy" />
          <img src={head4PNG} alt="dishes" loading="lazy" />
        </div>
        <div className="header-all-product">
          <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
            <Typography type="text-lg" className="section3-all-products">
              ALL PRODUCTS <SvgArrowRight className="section3-all-products-arrow-right" />
            </Typography>
          </Link>
        </div>
      </div>
      <div
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
    </div>
  );
};
