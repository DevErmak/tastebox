import { Typography } from '@/shared/ui';
import './header.scss';
import head1PNG from '@/shared/image/head/head1.png';
import head2PNG from '@/shared/image/head/head2.png';
import head3PNG from '@/shared/image/head/head3.png';
import head4PNG from '@/shared/image/head/head4.png';
import { ReactComponent as SvgArrowRight } from '@/shared/ui/svg/arrow-right.svg';
import { Link } from '@/shared/ui/link/Link';

import classNames from 'classnames';

type Props = { isActiveProduct: boolean };
export const DownMenu: React.FC<any> = ({ isActiveProduct }: Props) => {
  isActiveProduct
    ? (document.body.style.overflowY = 'hidden')
    : (document.body.style.overflowY = 'scroll');
  return (
    <div
      className={classNames('dropdown-content', {
        'dropdown-content-active': isActiveProduct,
      })}
    >
      <div className="header-list-photo">
        <img src={head1PNG} alt="dishes" loading="lazy" />
        <img src={head2PNG} alt="dishes" loading="lazy" />
        <img src={head3PNG} alt="dishes" loading="lazy" />
        <img src={head4PNG} alt="dishes" loading="lazy" />
      </div>
      <div className="header-all-product">
        <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
          <Typography type="text-lg" className="down-menu-all-products">
            ALL PRODUCTS <SvgArrowRight className="down-menu-all-products-arrow-right" />
          </Typography>
        </Link>
      </div>
    </div>
  );
};
