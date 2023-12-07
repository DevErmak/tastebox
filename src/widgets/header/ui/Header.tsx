import { Button, Typography } from '@/shared/ui';
import './header.scss';
import { ReactComponent as SvgCaretDown } from '@/shared/ui/svg/caret-down.svg';
import { ReactComponent as SvgArrowUpRight } from '@/shared/ui/svg/arrow-up-right.svg';
import { ReactComponent as SvgUser } from '@/shared/ui/svg/user.svg';
import { ReactComponent as SvgList } from '@/shared/ui/svg/list.svg';

type Props = {};
export const Header: React.FC<any> = ({}: Props) => {
  return (
    <div className="header">
      <div className="header__menu">
        <Typography type="text-md" className={'product'}>
          product <SvgCaretDown className="caret-down" />
        </Typography>
        <Typography type="text-md" className={'our-story'}>
          our story
        </Typography>
        <Typography type="text-md" className={'faq'}>
          faq <SvgArrowUpRight className="arrow-up-right" />
        </Typography>
      </div>
      <div className="header__login-menu">
        <Button type="outline" className={'header__login'}>
          <SvgUser />
          <Typography type="text-md" className={'faq'}>
            log in
          </Typography>
        </Button>
        <Button type="primary" className={'header__burger'}>
          <SvgList />
        </Button>
      </div>
    </div>
  );
};
