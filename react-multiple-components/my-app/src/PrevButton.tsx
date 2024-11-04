type Props = {
  handlePrev: () => void;
};

export function PrevButton(props: Props) {
  return <button onClick={props.handlePrev}>Prev</button>;
}
