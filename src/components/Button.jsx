// eslint-disable-next-line react/prop-types
export function Button({ enabled, setEnabled }) {
  return (
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Disable' : 'Enable'}
    </button>
  );
}
