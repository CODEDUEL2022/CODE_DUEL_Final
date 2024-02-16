import styled from './index.module.scss';

export type Props = {
  label?: string;
  placeholder: string;
};

// TODO: エラー時のスタイルを追加する
export const TextInput: React.FC<Props> = ({ label, placeholder }) => {
  return (
    <div className={styled.wrapper}>
      {label && <label className={styled.label}>{label}</label>}
      <input type="text" placeholder={placeholder} className={styled.input} />
    </div>
  );
};
