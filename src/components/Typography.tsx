import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
  element?: Tags;
  children?: React.ReactNode;
}
/**
 * 타이포그래피 컴포넌트
 * @property {string} className tailwind class
 * @property {Tags} element 문자 관련 마크업 element (default: span)
 * @property {React.ReactNode} children
 */
export default function Typography({ className, element = 'span', children }: Props) {
  const basicClassName = 'text-sm';
  const mergeClassName = twMerge(basicClassName, className);

  switch (element) {
    case 'span':
      return <span className={mergeClassName}>{children}</span>;

    case 'p':
      return <p className={mergeClassName}>{children}</p>;

    case 'h1':
      return <h1 className={mergeClassName}>{children}</h1>;

    case 'h2':
      return <h2 className={mergeClassName}>{children}</h2>;

    case 'h3':
      return <h3 className={mergeClassName}>{children}</h3>;

    case 'strong':
      return <strong className={mergeClassName}>{children}</strong>;
  }
}

type Tags = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'strong';
