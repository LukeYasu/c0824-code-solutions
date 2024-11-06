import { ReactNode } from 'react';

type Props = {
  onClick: () => void;
  appearance: ReactNode;
};

export function Buttons({ onClick, appearance }: Props) {
  return <button onClick={onClick}>{appearance}</button>;
}
