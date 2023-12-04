import { Outlet } from 'react-router-dom';

type Props = {};
export const DefaultLayout: React.FC<any> = ({}: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};
