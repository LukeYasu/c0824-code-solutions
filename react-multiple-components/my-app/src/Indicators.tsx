type Props = {
  onClick: (index: number) => void;
  itemsLength: number;
  index: number;
};

export function Indicators(props: Props) {
  const indicators = [];
  for (let i = 0; i < props.itemsLength; i++) {
    indicators.push(
      <button
        onClick={() => props.onClick(i)}
        style={{ backgroundColor: i === props.index ? 'blue' : '#1a1a1a' }}>
        {i + 1}
      </button>
    );
  }
  return <div>{indicators}</div>;
}
