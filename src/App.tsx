// src/App.tsx
import { useConfettiStore } from './store';
import { Confetti } from './Confetti';

// Confettiのボタンとコンポーネントを配置し、アクションをトリガーする
export default function App() {
  const trigger = useConfettiStore((s) => s.trigger);

  return (
    <div style={{ padding: 40 }}>
      <h1>Zustand + react-confetti</h1>
      <button onClick={trigger}>Click Me!</button>
      <Confetti />
    </div>
  );
}
