import { Outlet } from 'react-router-dom';

type Props = {};
const DefaultLayout: React.FC<any> = ({}: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
