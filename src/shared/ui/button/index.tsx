import React from 'react';

type Props = {
  onClick: () => void;
  title: string;
  icon: any;
  className?: string;
};

const Button: React.FC<any> = ({ onClick, title, icon, className }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {title ? title : icon}
    </button>
  );
};

export default Button;
