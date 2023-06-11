"use client";

import styles from './page.module.css';
import { useState } from 'react';
import Simple from './simple';
import Complex from './complex';
import Custom from './custom';
export default function Page() {

  const [selected, setSelected] = useState(1);

  return (
    <div className={styles.container}>
      <div>

     
      <div className={styles.navigator}>
      <button
        type="button"
        className={`${styles.navigatorButtons} ${selected === 1 ? styles.activebtn : ''}`}
        onClick={() => setSelected(1)}
      >
        Simple
      </button>

        <button
          type="button"
          className={`${styles.navigatorButtons} ${selected === 2 ? styles.activebtn : ''}`}
          onClick={() => setSelected(2)}
        >
          Complex
        </button>
        <button
          type="button"
          className={`${styles.navigatorButtons} ${selected === 3 ? styles.activebtn : ''}`}
          onClick={() => setSelected(3)}
        >
          Custom
        </button>
      </div>
      {selected === 1 ? <Simple /> : selected === 2 ? <Complex /> : selected === 3 ? <Custom /> : null}
      </div>
      
      <div className={styles.history}>
        <h1>Simple Password History</h1>
        <ul>
          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />
          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />
          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />
          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />
          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />
          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />

          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />
          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />
          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />
          <li><p> 33534</p>  <button>Copy</button> </li>
          <hr className={styles.hr} />
         
        </ul>
        
      </div>
    </div>
  );
}
