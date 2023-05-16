import { useState, useEffect } from 'react';
import { Cursor } from './components/Cursor';
import { Button } from './components/Button';
import { Background } from './components/Background';
import './App.css';

function App() {
  const [enabled, setEnabled] = useState(false);

  // Toggle cursor on/off
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [enabled]);

  return (
    <main>
      <Cursor enabled={enabled} />
      <Background enabled={enabled} />
      <Button enabled={enabled} setEnabled={setEnabled} />
    </main>
  );
}

export default App;
