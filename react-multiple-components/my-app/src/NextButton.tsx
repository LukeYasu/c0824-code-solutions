type Props = {
  index: number;
};

export function NextButton(props: Props) {
  function handleClick() {
    props.index + 1;
  }

  return <button onClick={handleClick}>Next</button>;
}
