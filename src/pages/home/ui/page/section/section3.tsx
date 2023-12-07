import { dataHealthyTasty } from '@/shared/data/data-healthy-tasty';
import { Typography } from '@/shared/ui';
import { ReactComponent as SvgCenterDot } from '@/shared/ui/svg/center-dot.svg';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { typeDataHealthyTasty } from '@/shared/data/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
type Props = {};

export const Section3: React.FC<any> = ({}: Props) => {
  const [activeTab, setActiveTab] = useState<typeDataHealthyTasty>('MainDish');
  const handleClickSection3MenuElement = (index: typeDataHealthyTasty) => {
    setActiveTab(index);
  };
  return (
    <div className="section3">
      <div className="section3-frame-title">
        <Typography type="display-xl" className={'section3-title'}>
          healthy & tasty
        </Typography>
        <Typography type="text-md" className={'section3-under-title'}>
          You can mix and match as you like depending on the occasion and mood. Over 40 original
          recipes.
        </Typography>
      </div>
      <div className="section3-menu-container">
        <div className={'MainDish' === activeTab ? 'section3-menu-active-container' : ''}>
          <Typography
            type="text-md"
            className={['section3-menu', 'MainDish' === activeTab ? 'section3-menu-active' : '']}
            onClick={() => handleClickSection3MenuElement('MainDish')}
          >
            main Dish
          </Typography>
          {'MainDish' === activeTab ? <SvgCenterDot /> : null}
        </div>

        <div className={'Soup' === activeTab ? 'section3-menu-active-container' : ''}>
          <Typography
            type="text-md"
            className={['section3-menu', 'Soup' === activeTab ? 'section3-menu-active' : '']}
            onClick={() => handleClickSection3MenuElement('Soup')}
          >
            soup
          </Typography>
          {'Soup' === activeTab ? <SvgCenterDot /> : null}
        </div>

        <div className={'Salad' === activeTab ? 'section3-menu-active-container' : ''}>
          <Typography
            type="text-md"
            className={['section3-menu', 'Salad' === activeTab ? 'section3-menu-active' : '']}
            onClick={() => handleClickSection3MenuElement('Salad')}
          >
            salad
          </Typography>
          {'Salad' === activeTab ? <SvgCenterDot /> : null}
        </div>

        <div className={'Smoothie' === activeTab ? 'section3-menu-active-container' : ''}>
          <Typography
            type="text-md"
            className={['section3-menu', 'Smoothie' === activeTab ? 'section3-menu-active' : '']}
            onClick={() => handleClickSection3MenuElement('Smoothie')}
          >
            smoothie
          </Typography>
          {'Smoothie' === activeTab ? <SvgCenterDot /> : null}
        </div>

        <div className={'SetMenu' === activeTab ? 'section3-menu-active-container' : ''}>
          <Typography
            type="text-md"
            className={['section3-menu', 'SetMenu' === activeTab ? 'section3-menu-active' : '']}
            onClick={() => handleClickSection3MenuElement('SetMenu')}
          >
            set menu
          </Typography>
          {'SetMenu' === activeTab ? <SvgCenterDot /> : null}
        </div>
      </div>
      <div className="size-swiper">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {dataHealthyTasty[activeTab].map((data, i) => (
            <SwiperSlide key={i}>
              <div className="section3-under-menu-container">
                <img src={data.image} alt="dishes" className="section3-under-menu-png" />
                <div className="section3-under-menu-text-container">
                  <Typography type="text-2xl" className="section3-under-menu-title">
                    {data.title}
                  </Typography>
                  <Typography type="text-sm" className="section3-under-menu-title">
                    {data.description}
                  </Typography>
                </div>
                <div className="section3-under-characteristic-container">
                  <div className="section3-under-characteristic-element">
                    <Typography type="text-xs" className="section3-under-characteristic-name">
                      Calorie
                    </Typography>
                    <Typography type="text-lg" className="section3-under-characteristic-meaning">
                      {data.calorie}{' '}
                      <Typography
                        type="text-sm"
                        className="section3-under-characteristic-measurement"
                      >
                        kcal
                      </Typography>
                    </Typography>
                  </div>
                  <div className="section3-under-characteristic-element">
                    <Typography type="text-xs" className="section3-under-characteristic-name">
                      Protein
                    </Typography>
                    <Typography type="text-lg" className="section3-under-characteristic-meaning">
                      {data.calorie}{' '}
                      <Typography
                        type="text-sm"
                        className="section3-under-characteristic-measurement"
                      >
                        g_
                      </Typography>
                    </Typography>
                  </div>
                  <div className="section3-under-characteristic-element">
                    <Typography type="text-xs" className="section3-under-characteristic-name">
                      Vegetables
                    </Typography>
                    <Typography type="text-lg" className="section3-under-characteristic-meaning">
                      {data.calorie}{' '}
                      <Typography
                        type="text-sm"
                        className="section3-under-characteristic-measurement"
                      >
                        kinds
                      </Typography>
                    </Typography>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
