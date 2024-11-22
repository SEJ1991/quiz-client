interface Props {
  children?: React.ReactNode;
}
export default function ContentsWrapper({ children }: Props) {
  return <div className='size-full flex flex-col justify-center items-center'>{children}</div>;
}
