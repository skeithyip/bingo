import * as React from 'react';

import styles from './bingo.module.scss';
import { icecreams, Item, savouries, snacks, sweets } from '../enum';
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
  const dragItem = React.useRef<Item | null>(null);

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
      <LeftSide dragItem={dragItem} selected={selected} />
      <RightSide dragItem={dragItem} selected={selected} />
      <div className={styles.center}>
        <Control
          lock={lock}
          onClear={onClear}
          setCheck={setCheck}
          setLock={setLock}
          setText={setText}
          table={props.table}
          text={text}
        />
        <div className={clsx(styles.text, lock && styles.locked)}>{text}</div>
        <div className={styles.bingo}>
          {Array.from({ length: 25 }).map((_, index) => (
            <BingoItem
              key={index}
              index={index}
              selected={state.get(index)}
              onChange={onChange}
              isCalled={check && called.includes(state.get(index) as Item)}
              dragItem={dragItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type LeftSideProps = {
  dragItem: React.MutableRefObject<Item | null>;
  selected: string[];
};

const LeftSide = (props: LeftSideProps) => {
  return (
    <div className={styles.left}>
      <GroupItem {...props} group={sweets} title="Sweets 🍬" />
      <GroupItem {...props} group={savouries} title="Savouries 😋" />
      <GroupItem {...props} group={icecreams} title="Ice Creams 🍦" />
    </div>
  );
};

const RightSide = (props: LeftSideProps) => {
  return (
    <div className={styles.right}>
      <GroupItem {...props} group={snacks} title="Snacks" />
    </div>
  );
};

type GroupItemProps = {
  group: Item[];
  title: string;
  selected: string[];
  dragItem: React.MutableRefObject<Item | null>;
};
const GroupItem = (props: GroupItemProps) => {
  const { title, group, selected, dragItem } = props;

  if (group.every((e) => selected.includes(e))) {
    return null;
  }

  return (
    <fieldset>
      <legend>{title}</legend>
      {group.map((e) =>
        selected.includes(e) ? null : (
          <div
            key={e}
            className={styles.item}
            draggable
            onDragStart={() => {
              dragItem.current = e;
            }}
          >
            {e}
          </div>
        )
      )}
    </fieldset>
  );
};

type BingoItemProps = {
  index: number;
  selected: string | undefined;
  onChange: (index: number, value: ItemExtended) => void;
  isCalled: boolean;
  dragItem: React.MutableRefObject<Item | null>;
};
const BingoItem = (props: BingoItemProps) => {
  const { index, onChange, selected } = props;
  const { isCalled, dragItem } = props;
  const container = React.useRef<React.ElementRef<'div'>>(null);
  const output = React.useRef<React.ElementRef<'p'>>(null);

  return (
    <div
      ref={container}
      className={clsx(styles.bingoItem, isCalled && styles.called)}
      onDragOver={(e) => {
        e.preventDefault();
        e.currentTarget.dataset.dragover = 'true';
      }}
      onDragLeave={(e) => {
        delete e.currentTarget.dataset.dragover;
      }}
      onDrop={(e) => {
        if (dragItem.current !== null) {
          onChange(index, dragItem.current);
        }
        delete e.currentTarget.dataset.dragover;
      }}
      onClick={() => {
        if (typeof selected !== 'undefined') {
          onChange(index, '-');
        }
      }}
    >
      <p ref={output} style={{ fontSize: getFontSize(selected?.length) }}>
        {selected}
      </p>
    </div>
  );
};

type ControlProps = {
  text: string;
  setText: (val: string) => void;
  lock: boolean;
  setLock: (value: React.SetStateAction<boolean>) => void;
  table: number;
  setCheck: (val: boolean) => void;
  onClear: () => void;
};
const Control = (props: ControlProps) => {
  const { text, setText, lock, setLock, setCheck, onClear } = props;

  return (
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
      <div>
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
