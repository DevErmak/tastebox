import React from 'react';

type Props = {
  onClick: () => void;
  title: string;
  icon: any;
  className?: string;
  type?: 'submit';
  disabled?: boolean;
};

export const Button: React.FC<any> = ({
  onClick,
  title,
  icon,
  className,
  disabled,
  type,
}: Props) => {
  return (
    <button type={type} disabled={disabled} className={className} onClick={onClick}>
      {title ? title : icon}
    </button>
  );
};
