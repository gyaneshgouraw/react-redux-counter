"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import { useSelector, selectCount, counterAction, fetchUserById } from "@/lib/redux";
import { decreament, increment, incrementByCount, incrementIfOdd } from "@/lib/redux/rootReducer";
import { useDispatch } from "react-redux";
import styles from "./counter.module.css";


export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(0)

  const updateCounter = (action: string) => {
    switch (action) {
      case counterAction.DECREMENT:
        dispatch(decreament());
        break;
      case counterAction.INCREMENT:
        dispatch(increment());
        break;
      case counterAction.INCREMENT_BY_COUNT:
        dispatch(incrementByCount(incrementAmount));
        break;
      case counterAction.INCREMENT_IF_ODD:
        dispatch(incrementIfOdd(incrementAmount))
        break;
      default:
        break;
    }
  };

  // Create a state named incrementAmount
  const setCounterInputValue = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const inputVal = parseInt(event.target.value);
    if (inputVal) {
      setIncrementAmount(inputVal)
    }
  }


  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={updateCounter.bind(null, counterAction.DECREMENT)}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={updateCounter.bind(null, counterAction.INCREMENT)}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} value={incrementAmount} onChange={setCounterInputValue} aria-label="Set increment amount" />
        <button
          className={styles.button}
          onClick={updateCounter.bind(null, counterAction.INCREMENT_BY_COUNT)}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={updateCounter.bind(null, counterAction.INCREMENT_IF_ODD)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
