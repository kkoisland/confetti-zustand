import { Confetti } from './Confetti';
import { Settings } from './Settings';
import { useConfettiStore } from './store';

// Confettiのボタンとコンポーネントを配置し、アクションをトリガーする
export default function App() {
  const trigger = useConfettiStore((s) => s.trigger);

  return (
    <div style={{ padding: 40 }}>
      <h1>Zustand + Confetti Settings</h1>
      <Settings />
      <button onClick={trigger}>Click Me!</button>
      <Confetti />
    </div>
  );
}
