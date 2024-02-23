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
  return (
    <div className={styled.wrapper}>
      {label && (
        <label
          style={{
            color: error !== undefined ? `${variable.error}` : `${variable.white}`,
          }}
        >
          {label} {required && <span className={styled.required}>(必須)</span>}
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={styled.input}
        required={required}
        value={value}
        onChange={handleChange}
        aria-invalid={error !== undefined}
        aria-describedby="error-message"
        style={{
          borderColor: error !== undefined ? `${variable.error}` : `${variable.white}`,
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
