import { useEffect } from 'react';
import { Howl } from 'howler';

const sound = new Howl({ src: ['/success.mp3'] });

export default function SuccessIndicator() {
  useEffect(() => { sound.play(); }, []);
  return <div style={{ border: '5px solid green', padding: '20px', color: 'green', backgroundColor: '#eaffea' }}>✅ Kehadiran Berjaya!</div>;
}
