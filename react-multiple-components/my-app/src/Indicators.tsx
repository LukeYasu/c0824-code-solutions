export function Indicators() {
  const items = [1, 2, 3, 4, 5, 6];
  const indicators = [];
  const isSelected = true;
  const buttonColor = 'blue';
  for (let i = 0; i < items.length; i++) {
    if ((i = 3)) {
      indicators.push(
        <button style={{ backgroundColor: 'blue' }}>{items[i]}</button>
      );
    }
    indicators.push(
      <button >{items[i]}</button>
    );
  }
  return <div>{indicators}</div>;
}
