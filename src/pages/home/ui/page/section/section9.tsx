import { Button, Typography } from '@/shared/ui';

type Props = {};
export const Section9: React.FC<any> = ({}: Props) => {
  return (
    <div className="section9">
      <div className="section9-title">
        <Typography type="display-lg" className="section9-title-text">
          Love yourself, always.
        </Typography>
        <Typography type="display-2xs" className="section9-title-about">
          A life where you can continue to love yourself.
        </Typography>
      </div>
      <Button type="primary" className="section9-button">
        <Typography type="text-2xl" className="section9-text-button">
          Start today
        </Typography>
      </Button>
    </div>
  );
};
