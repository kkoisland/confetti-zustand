import { useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { useConfettiStore } from './store';
import { useWindowSize } from 'react-use';

export const Confetti = () => {
  const { width, height } = useWindowSize();
  const show = useConfettiStore((s) => s.show);
  const reset = useConfettiStore((s) => s.reset);

  // fireを監視し、Confetti を表示してから 3 秒後に reset()
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        reset();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [show, reset]);

  return show ? <ReactConfetti width={width} height={height} /> : null;
};
