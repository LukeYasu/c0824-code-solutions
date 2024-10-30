import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
type Props = {
  isOpen: boolean;
  onClose: () => void;
  positionTo?: HTMLElement | null;
  children: ReactNode;
};

export function Popup({ isOpen, positionTo, onClose, children }: Props) {
  const positions = positionTo?.getBoundingClientRect();
  const top = positions ? positions.top + positions.height : '50%';
  const left = positions ? positions.left + positions.width / 2 : '50%';

  return createPortal(
    <>
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            top: '0',
            width: '100vw',
            height: '100vh',
            filter: 'opacity(50%)',
            backgroundColor: 'black',
          }}>
          <div
            className="absolute"
            style={{
              top,
              left,
            }}>
            {children}
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
