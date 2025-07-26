import { Confetti } from './Confetti';
import { Settings } from './Settings';
import { useConfettiStore } from './store';

function GravitySubscribedDisplay() {
  const gravity = useConfettiStore((s) => s.gravity);
  console.log('Subscribed display rendered');
  return (
    <p>
      <strong>Subscribed gravity:</strong> {gravity}
    </p>
  );
}

function GravityStaticDisplay() {
  const gravity = useConfettiStore.getState().gravity;
  console.log('Static display rendered');
  return (
    <p>
      <strong>Static gravity:</strong> {gravity}
    </p>
  );
}

export default function App() {
  const trigger = useConfettiStore((s) => s.trigger);

  return (
    <div style={{ padding: 40 }}>
      <h1>Zustand + Confetti Settings</h1>
      <GravitySubscribedDisplay />
      <GravityStaticDisplay />
      <Settings />
      <button onClick={trigger}>Click Me!</button>
      <Confetti />
    </div>
  );
}
