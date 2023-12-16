import { Button, Typography } from '@/shared/ui';
import './header.scss';
import { ReactComponent as SvgArrowDown } from '@/shared/ui/svg/caret-down.svg';
import { ReactComponent as SvgArrowUpRight } from '@/shared/ui/svg/arrow-up-right.svg';
import { ReactComponent as SvgUser } from '@/shared/ui/svg/user.svg';
import { ReactComponent as SvgList } from '@/shared/ui/svg/list.svg';
import { ReactComponent as SvgX } from '@/shared/ui/svg/x.svg';
import { Link } from '@/shared/ui/link/Link';
import { useState } from 'react';

import classNames from 'classnames';
import { DownMenu } from './DownMenu';
import { BurgerMenu } from './BurgerMenu';
import { createPortal } from 'react-dom';

type Props = {};
export const Header: React.FC<any> = ({}: Props) => {
  const [isActiveProduct, setIsActiveProduct] = useState(false);
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  return (
    <div
      className={classNames('header', {
        'header-active': isActiveProduct,
      })}
    >
      <div className="header__menu">
        <Button
          type="outline"
          className={'dropdown-button'}
          onClick={() => {
            setIsActiveProduct(!isActiveProduct);
            setIsActiveBurger(false);
          }}
        >
          <Typography
            type="text-md"
            className={classNames('product', {
              'product-active': isActiveProduct && !isActiveBurger,
            })}
          >
            product{' '}
            <SvgArrowDown
              className={classNames('arrow-down', {
                'arrow-down-active': isActiveProduct && !isActiveBurger,
              })}
            />
          </Typography>
        </Button>
        <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
          <Typography
            type="text-md"
            className={classNames('our-story', {
              'our-story-active': isActiveProduct,
            })}
          >
            our story
          </Typography>
        </Link>
        <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
          <Typography
            type="text-md"
            className={classNames('faq', {
              'faq-active': isActiveProduct,
            })}
          >
            faq{' '}
            <SvgArrowUpRight
              className={classNames('arrow-up-right', {
                'arrow-up-right-active': isActiveProduct,
              })}
            />
          </Typography>
        </Link>
      </div>
      {isActiveProduct && !isActiveBurger ? (
        <Typography type="text-lg" className="header-text-tastebox">
          tastebox
        </Typography>
      ) : (
        ''
      )}
      <div className="header__login-menu">
        <Button
          type="outline"
          className={classNames('header__login', {
            'header__login-active': isActiveProduct || isActiveBurger,
          })}
        >
          <SvgUser
            className={classNames('login-icon', {
              'login-icon-active': isActiveProduct || isActiveBurger,
            })}
          />
          <Typography
            type="text-md"
            className={classNames('login', {
              'login-active': isActiveProduct || isActiveBurger,
            })}
          >
            log in
          </Typography>
        </Button>
        <Button
          type="primary"
          className={classNames('header__burger', {
            'header__burger-active': isActiveProduct || isActiveBurger,
          })}
          onClick={() => {
            setIsActiveBurger(!isActiveBurger);
            setIsActiveProduct(false);
          }}
        >
          {isActiveBurger ? (
            <SvgX
              className={classNames('svg-x', {
                'svg-x-active': isActiveBurger,
              })}
            />
          ) : (
            <SvgList
              className={classNames('svg-list', {
                'svg-list-active': isActiveProduct,
              })}
            />
          )}
        </Button>
      </div>
      {isActiveBurger
        ? ''
        : createPortal(<DownMenu isActiveProduct={isActiveProduct} />, document.body)}
      {createPortal(<BurgerMenu isActiveBurger={isActiveBurger} />, document.body)}
    </div>
  );
};
