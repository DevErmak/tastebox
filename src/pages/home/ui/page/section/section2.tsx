import { Typography } from '@/shared/ui';
import headPNG from '@/shared/image/section2/head.png';
import platePNG from '@/shared/image/section2/plate.png';
type Props = {};
export const Section2: React.FC<any> = ({}: Props) => {
  return (
    <div className="section2">
      <img src={headPNG} alt="vegetables" className="section2-head-png" />
      <div className="frame1">
        <div className="section2-text-left">
          <Typography type="text-md" className="tastebox-to-meal">
            Tastebox to meal!
          </Typography>
          <Typography type="display-xs" className="text-about-tastebox-to-meal">
            A healthy home-cooked meal with plenty of vegetables that comes straight from the
            ingredients.
          </Typography>
        </div>
        <img src={platePNG} alt="plate" className="section2-plate-png" />
        <div className="section2-text-right">
          <Typography type="text-lg">
            Even in your busy days,we want you to take care of your body and mind. We deliver
            home-cooked meals packed with vegetables that can be prepared in just a few moments to
            your home. Even easier. More delicious. More fun.I hope you continue to have a healthy
            diet.
          </Typography>
        </div>
      </div>
    </div>
  );
};
