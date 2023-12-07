import './page.scss';
import { Section1 } from './section/section1';
import { Section2 } from './section/section2';
import { Section3 } from './section/section3';

type Props = {};
export const Home: React.FC<any> = ({}: Props) => {
  return (
    <div className="home-page">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};
