import { Typography } from '@/shared/ui';
import { Header } from '@/widgets/header';

type Props = {};
export const Section1: React.FC<any> = ({}: Props) => {
  return (
    <div className="section1">
      <Header />
      <Typography type="display-2xl" className={'text-title'}>
        tastebox
      </Typography>
    </div>
  );
};
