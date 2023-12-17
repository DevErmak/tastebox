import { dataSection8 } from '@/shared/data/data-section8';
import { Button, Typography } from '@/shared/ui';
import { ReactComponent as SvgArrowRight } from '@/shared/ui/svg/arrow-right.svg';
import { ReactComponent as SvgArrowLeft } from '@/shared/ui/svg/arrow-left.svg';
import { useEffect, useRef, useState } from 'react';

type Props = {};
export const Section8: React.FC<any> = ({}: Props) => {
  const cardSection8 = useRef<HTMLDivElement>(null);
  const section8 = useRef<HTMLDivElement>(null);
  const [isActiveRight, setIsActiveRight] = useState(false);
  const [isActiveLeft, setIsActiveLeft] = useState(false);
  // const [isAdd, setIsAdd] = useState(false);
  const [numberSlide, setNumberSlide] = useState(0);
  useEffect(() => {
    if (cardSection8.current && section8.current) {
      const z = cardSection8.current.clientWidth / 372;
      const x = section8.current.clientWidth / 372;
      console.log('', z);
      console.log('z', z);
      console.log('x', x);
      console.log('dataSection8.length', dataSection8.length);
      cardSection8.current.style.transform = `translateX(-${numberSlide * 385}px)`;
      console.log('asd', dataSection8.length - x - numberSlide);

      if (dataSection8.length - x - numberSlide - 1 < 0) setIsActiveRight(false);
      else setIsActiveRight(true);

      console.log('z', z);
      console.log('x', x);

      if (numberSlide > 0) setIsActiveLeft(true);
      else setIsActiveLeft(false);
      // if (numberSlide > x - 1) setIsActiveRight(false);
      // else setIsActiveRight(true);
      // if()
    }
  }, [numberSlide]);
  const goRight = () => {
    if (section8.current && cardSection8.current) {
      const z = cardSection8.current.clientWidth / 380;
      const x = section8.current.clientWidth;
      console.log('numberSlide < dataSection8.length', numberSlide < dataSection8.length);
      if (isActiveRight)
        if (numberSlide < dataSection8.length) {
          setNumberSlide(numberSlide + 1);
          // setIsActiveRight(true);
          // } else {
          // setNumberSlide(z - x);
          // setIsAdd(true);
          // cardSection8.current.style.transform = `translateX(-${z - x + 125}px)`;
          // setIsActiveRight(false);
        }
    }
    console.log(numberSlide);
  };
  const goLeft = () => {
    if (cardSection8.current) {
      // console.log(isAdd);
      // if (isAdd) {
      // setNumberSlide(numberSlide - 95);
      // setIsAdd(false);
      // }
      if (numberSlide > 0) {
        setNumberSlide(numberSlide - 1);
      }
    }
    console.log(numberSlide);
  };
  return (
    <div ref={section8} className="section8">
      <div className="section8-title">
        <Typography type="display-sm" className={'section8-news'}>
          News
        </Typography>
        <div className={'section8-buttons-slide'}>
          <Button
            type="outline"
            className={['section8-nav-right', isActiveRight ? '' : 'section8-nav-no-active']}
            onClick={() => goRight()}
          >
            <SvgArrowRight />
          </Button>
          <Button
            type="outline"
            className={['section8-nav-left', isActiveLeft ? '' : 'section8-nav-no-active']}
            onClick={() => goLeft()}
          >
            <SvgArrowLeft />
          </Button>
        </div>
      </div>
      <div className="section8-slide-container">
        <div ref={cardSection8} className="section8-container-card">
          {dataSection8.map((data, i) => (
            <div key={i + 'section8-card'} className="section8-card">
              <img
                key={i + 'section8-cardImg'}
                src={data.image}
                alt="dishes"
                className="section8-card-img"
              />
              <Typography
                key={i + 'section8-cardDate'}
                type="text-sm"
                className="section8-card-date"
              >
                {data.date}
              </Typography>
              <Typography
                key={i + 'section8-cardDescription'}
                type="text-lg"
                className="section8-card-description"
              >
                {data.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className="section8-read-more">
        <Typography type="text-lg" className="section8-read-more-text">
          READ MORE <SvgArrowRight className="section8-read-more-arrow-right" />
        </Typography>
      </div>
    </div>
  );
};
