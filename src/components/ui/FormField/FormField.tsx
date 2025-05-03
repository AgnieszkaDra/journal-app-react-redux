import { ReactNode } from 'react';
import { StyledTextArea } from './FormField.styled';

// import { ErrorText } from '../ErrorText/ErrorText.styled';
// import { StyledIcon } from '../Icon/Icon.styled';

type FormFieldProps = {
  label: string;
  type: string;
  nameInput: string;
  errors?: Record<string, { message?: string }>;
  touched?: Record<string, boolean>;
  rows?: number;
  icon?: ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export const FormField = ({
  type,
  nameInput,
  rows,
  ...rest
}: FormFieldProps) => {
  const isTextArea = type === 'textarea';
  
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {isTextArea ? (
        <StyledTextArea
          id={nameInput}
          rows={rows}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        ''
      )}
    </div>
  );
};