import React from 'react';
import './button.scss';
import cn from 'classnames';
type ButtonTypes = 'submit' | 'reset';
type ButtonSizes = 'lg' | 'md' | 'sm';
type type = 'primary' | 'outline';

interface IButtonProps {
  children: React.ReactNode;
  type: type;
  size?: ButtonSizes;
  ButtonType?: ButtonTypes;
  disabled?: boolean;
  className?: string | string[];
  form?: string;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  type,
  ButtonType,
  children,
  onClick,
  disabled,
  form,
  size,
}) => {
  return (
    <button
      type={ButtonType}
      className={cn('button', `button_${type}`, `button_${size}`, className)}
      onClick={onClick}
      disabled={disabled}
      form={form}
    >
      {children}
    </button>
  );
};
