import { Button, Typography } from '@/shared/ui';
import './footer.scss';
import { Link } from '@/shared/ui/link/Link';
import { ReactComponent as SvgInstagram } from '@/shared/ui/svg/instagram.svg';
import { ReactComponent as SvgPinterest } from '@/shared/ui/svg/pinterest.svg';
import { ReactComponent as SvgTwitter } from '@/shared/ui/svg/twitter.svg';
import { ReactComponent as SvgTiktok } from '@/shared/ui/svg/tiktok.svg';

type Props = {};
export const Footer: React.FC<any> = ({}: Props) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <Typography type="text-xl" className={'footer-name-column'}>
            Product
          </Typography>
          <div className="footer-link-container">
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                main dish
              </Typography>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                soup
              </Typography>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                SALAD
              </Typography>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                SMOOTHIE
              </Typography>
            </Link>
          </div>
        </div>

        <div className="footer-column">
          <Typography type="text-xl" className={'footer-name-column'}>
            about
          </Typography>
          <div className="footer-link-container">
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                OUR STORY{' '}
              </Typography>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                GREEN PROMISE
              </Typography>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                NEWS
              </Typography>
            </Link>
          </div>
        </div>

        <div className="footer-column">
          <Typography type="text-xl" className={'footer-name-column'}>
            STORE
          </Typography>
          <div className="footer-link-container">
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                SUBSCRIPTION{' '}
              </Typography>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                GIFT
              </Typography>
            </Link>
          </div>
        </div>

        <div className="footer-column">
          <Typography type="text-xl" className={'footer-name-column'}>
            help
          </Typography>
          <div className="footer-link-container">
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                faq
              </Typography>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Typography type="text-md" className={'footer-text-link'}>
                contact
              </Typography>
            </Link>
          </div>
        </div>

        <div className="footer-column-contact">
          <Typography type="text-xl" className={'footer-name-column'}>
            follow us
          </Typography>
          <div className="footer-link-container-contact">
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Button type="primary" className={'footer-button-circle'}>
                <SvgInstagram className="footer-contact" />
              </Button>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Button type="primary" className={'footer-button-circle'}>
                <SvgTwitter className="footer-contact" />
              </Button>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Button type="primary" className={'footer-button-circle'}>
                <SvgPinterest className="footer-contact" />
              </Button>
            </Link>
            <Link href="https://developer.mozilla.org/ru/docs/Learn/CSS/Styling_text/Styling_links">
              <Button type="primary" className={'footer-button-circle'}>
                <SvgTiktok className="footer-contact" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Typography type="display-2xl" className={'text-title'}>
        tastebox
      </Typography>
    </div>
  );
};
