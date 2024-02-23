import styled from './index.module.scss';
import variable from '@/styles/variable.module.scss';

export type Props = {
  label?: string;
  required?: boolean;
  placeholder: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export const TextInput: React.FC<Props> = ({
  label,
  required,
  placeholder,
  value,
  handleChange,
  error,
}) => {
  const isError = error !== undefined && error !== '';

  return (
    <div className={styled.wrapper}>
      {label && (
        <label
          htmlFor={placeholder}
          style={{
            color: isError ? `${variable.error}` : `${variable.white}`,
          }}
        >
          {label} {required && <span className={styled.required}>(必須)</span>}
        </label>
      )}
      <input
        type="text"
        id={placeholder}
        placeholder={placeholder}
        className={styled.input}
        required={required}
        value={value}
        onChange={handleChange}
        aria-invalid={isError}
        aria-describedby={isError ? 'error-message' : undefined}
        style={{
          borderColor: isError ? `${variable.error}` : `${variable.white}`,
        }}
      />
      {error && (
        <p className={styled.error} id="error-message">
          {error}
        </p>
      )}
    </div>
  );
};
