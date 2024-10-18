type Props = {
  index: number;
};

export function PrevButton(props: Props) {
  function handleClick() {
    props.index + 1;
  }
  return <button onClick={handleClick}>Prev</button>;
}
