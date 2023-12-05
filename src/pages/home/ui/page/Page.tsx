import { Typography } from '@/shared/ui';
import './page.scss';
import { Header } from '@/widgets/header';
type Props = {};
export const Home: React.FC<any> = ({}: Props) => {
  return (
    <>
      <div className="section1">
        <Header />
        <Typography type="display-2xl" className={'text-title'}>
          tastebox
        </Typography>
      </div>
      <div className="section2"></div>
    </>
  );
};
