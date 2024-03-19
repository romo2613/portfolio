import Marquee from "react-fast-marquee";

export default function({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <Marquee>
      {children}
    </Marquee>
  )
}