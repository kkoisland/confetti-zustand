import { useStore } from './store';
import Confetti from 'react-confetti';

function App() {
  const quantity = useStore((s) => s.quantity);
  const setQuantity = useStore((s) => s.setQuantity);

  const isVisible = useStore((s) => s.isVisible);
  const setIsVisible = useStore((s) => s.setIsVisible);

  const step = useStore((s) => s.step);
  const setStep = useStore((s) => s.setStep);

  const showConfetti = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleConfetti = () => {
    for (let i = 0; i < quantity; i++) {
      setTimeout(() => {
        showConfetti();
      }, i * 5000); // ← 5000ms 間隔（確実に見える）
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎉 Confetti Demo</h1>

      {/* ナビゲーション */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setStep('settings')}>Settings</button>
        <button onClick={() => setStep('result')}>Result</button>
      </div>

      {/* settings 画面 */}
      {step === 'settings' && (
        <div>
          <h2>設定</h2>
          <label>
            Quantity:{' '}
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </label>
          <br />
          <button
            onClick={() => {
              setStep('result');
              handleConfetti();
            }}
          >
            次へ
          </button>
        </div>
      )}

      {/* result 画面 */}
      {step === 'result' && (
        <>
          <p>Quantity is: {quantity}</p>
          {isVisible && <Confetti />}
        </>
      )}
    </div>
  );
}

export default App;
