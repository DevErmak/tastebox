import { dataSection8 } from '@/shared/data/data-section8';
import { Button, Typography } from '@/shared/ui';
import { ReactComponent as SvgArrowRight } from '@/shared/ui/svg/arrow-right.svg';
import { ReactComponent as SvgArrowLeft } from '@/shared/ui/svg/arrow-left.svg';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Props = {};
export const Section8: React.FC<any> = ({}: Props) => {
  const cardSection8 = useRef<HTMLDivElement>(null);
  const section8 = useRef<HTMLDivElement>(null);
  const [isActiveRight, setIsActiveRight] = useState(false);
  const [isActiveLeft, setIsActiveLeft] = useState(false);
  const [numberSlide, setNumberSlide] = useState(0);
  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const width = useWindowSize();
  useEffect(() => {
    if (cardSection8.current && section8.current) {
      const x = section8.current.clientWidth;
      cardSection8.current.style.transform = `translateX(-${numberSlide * 372}px)`;
      if (numberSlide * 372 + x > dataSection8.length * 372) {
        setIsActiveRight(false);
        cardSection8.current.style.transform = `translateX(-${
          dataSection8.length * 372 - x + 100
        }px)`;
      } else setIsActiveRight(true);

      if (numberSlide > 0) setIsActiveLeft(true);
      else setIsActiveLeft(false);
    }
  }, [numberSlide, width]);
  const goRight = () => {
    if (section8.current && cardSection8.current) {
      const x = section8.current.clientWidth;
      if (isActiveRight)
        if (numberSlide * 372 + x < dataSection8.length * 372) {
          setNumberSlide(numberSlide + 1);
        }
    }
    console.log(numberSlide);
  };
  const goLeft = () => {
    if (cardSection8.current) {
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
