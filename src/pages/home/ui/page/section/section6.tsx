import { Typography } from '@/shared/ui';
import sandwichPNG from '@/shared/image/section6/sandwich.png';

type Props = {};
export const Section6: React.FC<any> = ({}: Props) => {
  return (
    <div className="section6">
      <div className="section6-description">
        <Typography type="display-md" className={'section6-title'}>
          How to use
        </Typography>
        <div className="section6-description-content">
          <div className="section6-frame-description-title">
            <Typography type="text-lg" className={'section6-title-number'}>
              01.
            </Typography>
            <Typography type="display-xs" className={'section6-description-title'}>
              Create Your Box
            </Typography>
          </div>
          <Typography type="text-lg" className={'section6-description-title-about'}>
            Choose your products and order your own box!
          </Typography>
        </div>
        <div className="section6-description-content">
          <div className="section6-frame-description-title">
            <Typography type="text-lg" className={'section6-title-number'}>
              02.
            </Typography>
            <Typography type="display-xs" className={'section6-description-title'}>
              Deliver to Home
            </Typography>
          </div>
          <Typography type="text-lg" className={'section6-description-title-about'}>
            Deliver individual flash-frozen ingredients to your home
          </Typography>
        </div>
        <div className="section6-description-content">
          <div className="section6-frame-description-title">
            <Typography type="text-lg" className={'section6-title-number'}>
              03.
            </Typography>
            <Typography type="display-xs" className={'section6-description-title'}>
              Make in One-step
            </Typography>
          </div>

          <Typography type="text-lg" className={'section6-description-title-about'}>
            Put it on your favorite plate and microwave it! When heating in the microwave, be sure
            to use a heat-resistant container.
          </Typography>
        </div>
      </div>
      <img src={sandwichPNG} alt="dishes" loading="lazy" className="section6-img" />
    </div>
  );
};
