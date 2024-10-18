type Props = {
  item: string;
};

export function Banner(props: Props) {
  const item = props.item;
  return <h1>{item}</h1>;
}
