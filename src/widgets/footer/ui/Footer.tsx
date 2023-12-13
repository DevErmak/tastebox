import { Button, Typography } from '@/shared/ui';
import './footer.scss';
import { ReactComponent as SvgCaretDown } from '@/shared/ui/svg/caret-down.svg';
import { ReactComponent as SvgArrowUpRight } from '@/shared/ui/svg/arrow-up-right.svg';
import { ReactComponent as SvgUser } from '@/shared/ui/svg/user.svg';
import { ReactComponent as SvgList } from '@/shared/ui/svg/list.svg';

type Props = {};
export const Footer: React.FC<any> = ({}: Props) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <div>
            <Typography type="text-md" className={'footer-text'}>
              tastebox
            </Typography>
          </div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <Typography type="display-2xl" className={'text-title'}>
        tastebox
      </Typography>
    </div>
  );
};
