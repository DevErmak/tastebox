import { dataSection5 } from '@/shared/data/data-section5';
import { Typography } from '@/shared/ui';
import { ReactComponent as Snowflake } from '@/shared/ui/svg/snow-flake.svg';
import { ReactComponent as SvgArrowRight } from '@/shared/ui/svg/arrow-right.svg';
import { useRef } from 'react';

type Props = {};
export const Section5: React.FC<any> = ({}: Props) => {
  const card = useRef<HTMLDivElement>(null);
  let numberSlide = 0;
  setInterval(() => {
    if (card.current) {
      const x = card.current.clientWidth / 1153;
      card.current.style.transform = `translateX(-${1153 * numberSlide}px)`;
      numberSlide < x - 1 ? numberSlide++ : (numberSlide = 0);
    }
  }, 2000);
  return (
    <div className="section5">
      <Typography type="text-2xl" className="section5-features">
        Features
      </Typography>
      <div ref={card} className="section5-card-container">
        {dataSection5.map((data, i) => (
          <div key={i} className="section5-card">
            <img src={data.image} alt="dishes" loading="lazy" className="section5-img" />
            <div className="section5-description-card">
              <Typography type="text-md" className="section5-description-card-special">
                <Snowflake />
              </Typography>
              <Typography type="display-2xs" className="section5-description-card-title">
                Flash frozen ingredients Delivered directly to your home
              </Typography>
              <Typography type="text-md" className="section5-description-card-description">
                More than 120 types of ingredients that are flash-frozen to lock in nutrients are
                delivered directly to your home. If you stock it is the freezer, you’ll always have
                a nutritious meal right there.
              </Typography>
              <Typography type="text-lg" className="section5-description-card-promise">
                Promise of food production{' '}
                <SvgArrowRight className="section5-description-card-promise-arrow-right " />
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
