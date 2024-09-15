import * as React from 'react';

import styles from './App.module.css';
import { Bingo } from './component/bingo';
import { Item } from './enum';
import { MainControl } from './component/main-control';

function App() {
  const [called, setCalled] = React.useState<Item[]>([]);

  return (
    <div className={styles.container}>
      <MainControl called={called} setCalled={setCalled} />
      {Array.from({ length: 6 }).map((_, index) => (
        <Bingo key={index} called={called} table={index + 1} />
      ))}
    </div>
  );
}

export default App;
