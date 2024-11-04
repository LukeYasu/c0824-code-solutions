type Prop = {
  displayedQuotes: string[];
};

export function DisplayList({ displayedQuotes }: Prop) {
  const quoteLiElements = [];
  for (let i = 0; i < displayedQuotes.length; i++) {
    quoteLiElements.push(<li key={i}>{displayedQuotes[i]}</li>);
  }
  return <ul>{quoteLiElements}</ul>;
}
