import { Snow } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import { Outlet } from 'react-router-dom';

type Props = {};
export const DefaultLayout: React.FC<any> = ({}: Props) => {
  return (
    <>
      {/* <Snow /> */}
      <Outlet />
      <Footer />
    </>
  );
};
