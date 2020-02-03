import React from 'react'
import MButton from '@material-ui/core/Button';
export interface ButtonProps {
  disabled?: boolean
  disableElevation?: boolean
  onClick?: React.MouseEventHandler<Element>
  size?: 'small' | 'medium' | 'large'
  color?: 'default' | 'inherit' | 'primary' | 'secondary'
  variant?: 'outlined' | 'text' | 'contained'
  label?: string
}

const Button: React.SFC<ButtonProps> = ({ label, ...others}) => {
  return (
    <MButton
      aria-label={label}
      {...others}
    />);
}

export default Button;