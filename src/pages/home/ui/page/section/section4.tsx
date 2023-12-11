import { dataSection4 } from '@/shared/data/data-section4';

type Props = {};
export const Section4: React.FC<any> = ({}: Props) => {
  return (
    <div className="section4">
      {dataSection4.map((dataLine, i) => (
        <div key={i + 'section4data'} className={'section4-items-wrap'}>
          <div
            className={
              i % 2 === 0
                ? 'section4-items marquee-img-line'
                : 'section4-items marquee-img-line reverse'
            }
          >
            {dataLine.map((dataImg, i) => (
              <div className="section4-div-img" key={i + 'section4dataDivImg'}>
                <img key={i + 'section4dataImg'} src={dataImg} alt="dishes" loading="lazy" />
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className={
              i % 2 === 0
                ? 'section4-items marquee-img-line'
                : 'section4-items marquee-img-line reverse'
            }
          >
            {dataLine.map((dataImg, i) => (
              <div className="section4-div-img" key={i + 'section4dataDivImg'}>
                <img key={i + 'section4dataImg'} src={dataImg} alt="dishes" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
