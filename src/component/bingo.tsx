import * as React from 'react';

import styles from './bingo.module.scss';
import { Item, items } from '../enum';
import clsx from 'clsx';

type ItemExtended = Item | '-';
type BingoProps = {
  called: Item[];
  table: number;
};
export const Bingo = (props: BingoProps) => {
  const { called } = props;
  const [state, setState] = React.useState(new Map<number, ItemExtended>());
  const [lock, setLock] = React.useState(false);
  const [text, setText] = React.useState('');
  const [check, setCheck] = React.useState(false);

  const onChange = (index: number, value: ItemExtended) => {
    setState((prev) => {
      if (value === '-') {
        prev.delete(index);
      } else {
        prev.set(index, value);
      }
      return new Map(prev);
    });
  };

  const onClear = () => {
    setState(new Map());
  };

  const selected: string[] = [];
  for (const a of state.values()) {
    selected.push(a);
  }

  return (
    <div className={styles.container}>
      <div className={styles.bingo}>
        {Array.from({ length: 25 }).map((_, index) => (
          <BingoItem
            key={index}
            index={index}
            availableOptons={items.filter(
              (e) => state.get(index) === e || !selected.includes(e)
            )}
            selected={state.get(index)}
            onChange={onChange}
            locked={lock}
            isCalled={check && called.includes(state.get(index) as Item)}
          />
        ))}
      </div>
      <div className={styles.control}>
        <div>
          <label className={styles.input}>
            <input
              type="text"
              name="team"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Lock Table {props.table}
            <input
              type="checkbox"
              checked={lock}
              onChange={() => setLock((prev) => !prev)}
            />
          </label>
        </div>
        <div className={styles.clearBtn}>
          <button
            type="button"
            onMouseDown={() => setCheck(true)}
            onMouseUp={() => setCheck(false)}
            onMouseLeave={() => setCheck(false)}
          >
            Check
          </button>
        </div>
        <div className={styles.clearBtn}>
          <button type="button" onClick={onClear}>
            Clear
          </button>
        </div>
      </div>
      <div className={clsx(styles.text, lock && styles.locked)}>{text}</div>
    </div>
  );
};

type BingoItemProps = {
  index: number;
  availableOptons: string[];
  selected: string | undefined;
  onChange: (index: number, value: ItemExtended) => void;
  locked: boolean;
  isCalled: boolean;
};
const BingoItem = (props: BingoItemProps) => {
  const { availableOptons, index, onChange, selected, locked } = props;
  const { isCalled } = props;
  const container = React.useRef<React.ElementRef<'div'>>(null);
  const output = React.useRef<React.ElementRef<'p'>>(null);

  return (
    <div
      ref={container}
      className={clsx(styles.bingoItem, isCalled && styles.called)}
    >
      {locked ? (
        <p ref={output} style={{ fontSize: getFontSize(selected?.length) }}>
          {selected}
        </p>
      ) : (
        <select
          value={selected || '-'}
          onChange={(e) => onChange(index, e.target.value as ItemExtended)}
        >
          {availableOptons.toSpliced(0, 0, '-').map((e) => {
            return (
              <option key={e} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

const getFontSize = (textLength: number | undefined) => {
  const baseSize = 9;
  if (typeof textLength === 'undefined') {
    return `${baseSize}vw`;
  }

  if (textLength < 9) {
    return `${3}vw`;
  }

  if (textLength >= baseSize) {
    textLength = baseSize - 2;
  }
  const fontSize = baseSize - textLength;

  return `${fontSize}vw`;
};
