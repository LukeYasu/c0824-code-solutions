type Props = {
  handleNext: () => void;
};

export function NextButton(props: Props) {
  return <button onClick={props.handleNext}>Next</button>;
}
