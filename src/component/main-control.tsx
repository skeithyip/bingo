import * as React from 'react';

import { Item, items } from '../enum';

import styles from './main-control.module.scss';

type MainControlProps = {
  called: Item[];
  setCalled: React.Dispatch<React.SetStateAction<Item[]>>;
};
export const MainControl = (props: MainControlProps) => {
  const { called, setCalled } = props;
  const remaining = items.filter((i) => !called.includes(i));
  const uncalledRef = React.useRef<React.ElementRef<'select'>>(null);
  const [selectedUncalled, setSelectedUncalled] = React.useState<Item[]>([]);
  const [selectedCalled, setSelectedCalled] = React.useState<Item[]>([]);
  const [lastResult, setLastResult] = React.useState<Item | undefined>(
    undefined
  );
  const intervalRef = React.useRef<number | null>(null);

  const handleAdd = () => {
    setCalled((prev) => {
      return [...prev, ...selectedUncalled];
    });
    setSelectedUncalled([]);
  };

  const handleRemove = () => {
    setCalled((prev) => {
      return prev.filter((e) => !selectedCalled.includes(e));
    });
    setSelectedCalled([]);
  };

  const handleClear = () => {
    setCalled([]);
    setLastResult(undefined);
  };

  const onMouseDown = () => {
    if (remaining.length) {
      if (intervalRef.current) {
        return;
      }
      intervalRef.current = setInterval(() => {
        const index = Math.floor(Math.random() * remaining.length);

        setLastResult(remaining[index]);
      }, 50);
    }
  };

  const onMouseUp = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      if (lastResult) {
        setCalled((prev) => {
          if (prev.includes(lastResult)) {
            return prev;
          }
          return [...prev, lastResult];
        });
      }

      setSelectedUncalled([]);
    }
  };

  return (
    <div className={styles.mainControl}>
      <div className={styles.content}>
        <div className={styles.dice}>
          <span
            className={styles.rollBtn}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            ROLL
          </span>
          <div className={styles.result}>
            <span>{lastResult}</span>
          </div>
        </div>
        <div className={styles.uncalled}>
          <label>Uncalled</label>
          <select
            ref={uncalledRef}
            name="Uncalled"
            multiple
            size={20}
            onChange={(e) =>
              setSelectedUncalled(
                Array.from(e.target.selectedOptions).map((a) => a.value as Item)
              )
            }
          >
            {remaining.map((e) => {
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.buttons}>
          <button className={styles.callBtn} type="button" onClick={handleAdd}>
            &gt;&gt;
          </button>
          <button
            className={styles.callBtn}
            type="button"
            onClick={handleRemove}
          >
            &lt;&lt;
          </button>
          <button
            className={styles.callBtn}
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
        <div className={styles.called}>
          <label>Called</label>
          <select
            name="called"
            multiple
            size={20}
            onChange={(e) =>
              setSelectedCalled(
                Array.from(e.target.selectedOptions).map((a) => a.value as Item)
              )
            }
          >
            {called.map((e) => {
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};
