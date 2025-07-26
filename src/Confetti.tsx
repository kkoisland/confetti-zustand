import { useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { useConfettiStore } from './store';

export const Confetti = () => {
  const { width, height } = useWindowSize();
  const show = useConfettiStore((s) => s.show);
  const reset = useConfettiStore((s) => s.reset);
  const colors = useConfettiStore((s) => s.colors);
  const gravity = useConfettiStore((s) => s.gravity);
  const numberOfPieces = useConfettiStore((s) => s.numberOfPieces);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => reset(), 5000);
      return () => clearTimeout(timeout);
    }
  }, [show, reset]);

  return show ? (
    <ReactConfetti
      width={width}
      height={height}
      gravity={gravity}
      numberOfPieces={numberOfPieces}
      {...(colors.length > 0 ? { colors } : {})}
    />
  ) : null;
};
