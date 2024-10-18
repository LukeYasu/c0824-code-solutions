type Props = {
  items: string[];
  index: number;
};

export function Indicators(props: Props) {
  const indicators = [];
  for (let i = 0; i < props.items.length; i++) {
    if (i === props.index) {
      indicators.push(
        <button style={{ backgroundColor: 'blue' }}>{i + 1}</button>
      );
    } else {
      indicators.push(<button>{i + 1}</button>);
    }
  }
  return <div>{indicators}</div>;
}
