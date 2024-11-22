import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  children?: React.ReactNode;
}
/**
 * flex-direction: column을 기본으로 제공하는 contents wrapper 컴포넌트
 * @property {string} className tailwind class
 * @property {React.ReactNode} children
 */
export default function ContentsWrapper({ className, children }: Props) {
  const basicClassName = 'size-full flex flex-col justify-center items-center';
  const mergeClassName = twMerge(basicClassName, className);

  return <div className={mergeClassName}>{children}</div>;
}
