import React from 'react'
import MButton from '@material-ui/core/Button';
export interface ButtonProps extends React.DOMAttributes<Element> {
  className?: string
  disabled?: boolean
  disableElevation?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  size?: 'small' | 'medium' | 'large'
  color?: 'default' | 'inherit' | 'primary' | 'secondary'
  variant?: 'outlined' | 'text' | 'contained'
  label?: string
}

const Button: React.SFC<ButtonProps> = ({ label, className, ...others }) => {
  return (
    <MButton
      className={className}
      aria-label={label}
      {...others}
    />);
}

export default Button;