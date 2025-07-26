import { useConfettiStore } from './store';

export const Settings = () => {
  const setColors = useConfettiStore((s) => s.setColors);
  const setGravity = useConfettiStore((s) => s.setGravity);
  const setNumberOfPieces = useConfettiStore((s) => s.setNumberOfPieces);

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Settings</h2>
      <span>Color:</span>
      {['', 'red', 'blue', 'green', 'white'].map((value) => {
        const palettes: Record<string, string[]> = {
          red: ['#ff0a54', '#ff477e', '#ff7096'],
          blue: ['#0aafff', '#47b7ff', '#70c4ff'],
          green: ['#0aff91', '#47ffb2', '#70ffcc'],
          white: ['#ffffff'],
        };

        return (
          <label key={value} style={{ marginRight: '1em' }}>
            <input
              type="radio"
              name="color"
              value={value}
              onChange={() => {
                setColors(palettes[value] ?? []);
              }}
            />
            {value === '' ? 'Default' : value.charAt(0).toUpperCase() + value.slice(1)}
          </label>
        );
      })}

      <br />
      <label>
        Gravity:
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          defaultValue={0.3}
          onChange={(e) => setGravity(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        Pieces:
        <input
          type="range"
          min="20"
          max="300"
          step="10"
          defaultValue={200}
          onChange={(e) => setNumberOfPieces(parseInt(e.target.value))}
        />
      </label>
    </div>
  );
};
