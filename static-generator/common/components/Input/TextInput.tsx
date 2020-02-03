import * as React from 'react'
import TextField from '@material-ui/core/TextField';

export interface TextInputProps {
  error?: boolean
  fullWidth?: boolean
  value?: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  label?: string
  helperText?: string
  variant?: 'filled' | 'outlined'
}

const TextInput: React.SFC<TextInputProps> = ({ variant, fullWidth = true, ...others}) => {
  return (
    <TextField
      variant={variant as any}
      fullWidth
      {...others} />
  );
}

export default TextInput;