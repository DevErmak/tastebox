import { Typography } from '@/shared/ui';
import './faq-card.scss';

interface IFaqCardProps {
  children: React.ReactNode;
  title: string;
  onClick?: () => void;
}

export const FaqCard: React.FC<IFaqCardProps> = ({ title, children, onClick }: IFaqCardProps) => {
  return (
    <div className="faq-card" onClick={onClick}>
      <div className="faq-card-frame-title">
        <Typography type="display-md" className="faq-card-q">
          Q
        </Typography>
        <Typography type="text-lg" className="faq-card-title">
          {title}
        </Typography>
      </div>
      <Typography type="text-md" className="faq-card-description">
        {children}
      </Typography>
    </div>
  );
};
