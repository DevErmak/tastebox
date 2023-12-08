import { dataSection4 } from '@/shared/data/data-section4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

type Props = {};
export const Section4: React.FC<any> = ({}: Props) => {
  return (
    <div className="section4">
      {dataSection4.map((dataLine) => (
        <Swiper
          slidesPerView={'auto'}
          slidesOffsetBefore={30}
          slidesOffsetAfter={30}
          spaceBetween={20}
          autoplay={{
            delay: 200,
            disableOnInteraction: true,
          }}
          speed={100}
          loop={true}
          modules={[Autoplay, FreeMode]}
          className="swiper-section4"
        >
          {dataLine.map((dataImg, i) => (
            <SwiperSlide key={i}>
              <img src={dataImg} alt="dishes" className="section4-image" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
};
