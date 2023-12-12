import { dataSection8 } from '@/shared/data/data-section8';
import { Button, Typography } from '@/shared/ui';
import { ReactComponent as SvgArrowRight } from '@/shared/ui/svg/arrow-right.svg';
import { ReactComponent as SvgArrowLeft } from '@/shared/ui/svg/arrow-left.svg';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

type Props = {};
export const Section8: React.FC<any> = ({}: Props) => {
  const swiperRef = useRef<any>();

  return (
    <div className="section8">
      <div className="section8-title">
        <Typography type="display-sm" className={'section8-news'}>
          News
        </Typography>
        <div className={'section8-buttons-slide'}>
          <Button
            type="outline"
            className={'section8-nav-right'}
            onClick={() => swiperRef?.current?.slideNext()}
          >
            <SvgArrowRight />
          </Button>
          <Button
            type="outline"
            className={'section8-nav-left'}
            onClick={() => swiperRef?.current?.slidePrev()}
          >
            <SvgArrowLeft />
          </Button>
        </div>
      </div>
      <div>
        <div className="section8-container-card">
          <Swiper
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={'auto'}
            spaceBetween={20}
            className="swiper-section8"
          >
            {dataSection8.map((data, i) => (
              <SwiperSlide key={i}>
                <div className="section8-card">
                  <img src={data.image} alt="dishes" className="section8-card-img" />
                  <Typography type="text-sm" className="section8-card-date">
                    {data.date}
                  </Typography>
                  <Typography type="text-lg" className="section8-card-description">
                    {data.description}
                  </Typography>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div></div>
    </div>
  );
};
