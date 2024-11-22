interface Props {
  children?: React.ReactNode;
}
export default function ContentsWrapper({ children }: Props) {
  return <div className='flex flex-col justify-center items-center'>{children}</div>;
}
