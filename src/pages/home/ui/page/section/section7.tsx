import { Typography } from '@/shared/ui';
import { FaqCard } from '../ui/faq-card/FaqCard';
import { ReactComponent as SvgRectangle } from '@/shared/ui/svg/rectangle.svg';

type Props = {};
export const Section7: React.FC<any> = ({}: Props) => {
  return (
    <div className="section7">
      <div className="section7-left">
        <Typography type="display-md" className={'section7-left-title'}>
          SELECT YOUR PLAN
        </Typography>
        <Typography type="display-2xs" className={'section7-left-description'}>
          It arrives regularly It's easy to keep up with it.
        </Typography>
      </div>
      <div className="section7-right">
        <div className="section7-options">
          <div className="section7-options-box">
            <Typography type="text-2xl" className={'section7-option-s-box'}>
              S BOX
            </Typography>
            <div className="section7-offer-container">
              <div className="section7-text-in-box-container">
                <SvgRectangle className="section7-box-meal" />
                <div className="section7-text-in-box-meal">
                  <Typography type="display-md" className={'section7-number-meal'}>
                    8
                  </Typography>
                  <Typography type="text-md" className={'section7-meal'}>
                    meal
                  </Typography>
                </div>
              </div>
              <Typography type="text-2xl" className={'section7-per-meal'}>
                Per Meal
              </Typography>
              <Typography type="text-2xl" className={'section7-special-offer-s-box'}>
                Special Offer
              </Typography>
              <div className="section7-price-container">
                <Typography type="text-2xl" className={'section7-price-dollar'}>
                  $
                </Typography>
                <Typography type="display-md" className={'section7-price-value'}>
                  75
                </Typography>
              </div>
            </div>
          </div>
          <div className="section7-options-box">
            <Typography type="text-2xl" className={'section7-option-m-box'}>
              M BOX
            </Typography>
            <div className="section7-offer-container">
              <div className="section7-text-in-box-container">
                <SvgRectangle className="section7-box-meal" />
                <div className="section7-text-in-box-meal">
                  <Typography type="display-md" className={'section7-number-meal'}>
                    12
                  </Typography>
                  <Typography type="text-md" className={'section7-meal'}>
                    meal
                  </Typography>
                </div>
              </div>
              <Typography type="text-2xl" className={'section7-per-meal'}>
                Per Meal
              </Typography>
              <Typography type="text-2xl" className={'section7-special-offer-m-box'}>
                Special Offer
              </Typography>
              <div className="section7-price-container">
                <Typography type="text-2xl" className={'section7-price-dollar'}>
                  $
                </Typography>
                <Typography type="display-md" className={'section7-price-value'}>
                  69
                </Typography>
              </div>
            </div>
          </div>
          <div className="section7-options-box">
            <Typography type="text-2xl" className={'section7-option-l-box'}>
              L BOX
            </Typography>
            <div className="section7-offer-container">
              <div className="section7-text-in-box-container">
                <SvgRectangle className="section7-box-meal" />
                <div className="section7-text-in-box-meal">
                  <Typography type="display-md" className={'section7-number-meal'}>
                    20
                  </Typography>
                  <Typography type="text-md" className={'section7-meal'}>
                    meal
                  </Typography>
                </div>
              </div>
              <Typography type="text-2xl" className={'section7-per-meal'}>
                Per Meal
              </Typography>
              <Typography type="text-2xl" className={'section7-special-offer-l-box'}>
                Special Offer
              </Typography>
              <div className="section7-price-container">
                <Typography type="text-2xl" className={'section7-price-dollar'}>
                  $
                </Typography>
                <Typography type="display-md" className={'section7-price-value'}>
                  67
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="section7-faq-container">
          <Typography type="text-2xl" className={'section7-faq'}>
            FAQ
          </Typography>
          <div className="section7-line-faq">
            <FaqCard title="When will I receive my first order?">
              Although it depends on the date of your order and the area of ​​delivery, your order
              will be delivered within 4 days at the earliest. From the second time onward, your
              order will be delivered at the delivery frequency you selected at the time of
              purchase.
            </FaqCard>
            <FaqCard title="Can I purchase it just once to try it out?">
              You can stop or cancel your subscription after the first delivery. Please complete the
              procedure from the FAQ before the deadline for changing your next order.
            </FaqCard>
          </div>
          <div className="section7-line-faq">
            <FaqCard title="Please tell me the size of the container">
              All products are available in pouch containers. Width: Approx. 15cm, Height: Approx.
              20cm, Thickness: Approx. 4cmPouches cannot be heated in the microwave. Be sure to
              transfer it to a heat-resistant plate before using it in the microwave.
            </FaqCard>
            <FaqCard title="Please tell me how to save">
              All products are frozen foods.Please store in a frozen environment below -18℃.Once
              thawed and refrozen, the flavor and quality may be lost.
            </FaqCard>
          </div>
        </div>
      </div>
    </div>
  );
};
