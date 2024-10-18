type Prop = {
  onChange: (currentInput: string) => void;
};

export function SearchBar({ onChange }: Prop) {
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search"></input>
  );
}
