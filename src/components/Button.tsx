import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
/**
 * 버튼 컴포넌트
 * @property {string} className tailwind class
 * @property {React.ReactNode} children
 * @property {boolean} disabled default: false
 * @property {() => void} onClick 콜백 onClick
 */
export default function Button({ className, children, disabled = false, onClick }: Props) {
  const basicClassName = 'px-2 py-1 border border-black rounded-md text-sm';
  const mergeClassName = twMerge(basicClassName, className);

  return (
    <button className={mergeClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
