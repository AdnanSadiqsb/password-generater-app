"use client";

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Simple from './simple';
import Complex from './complex';
import Custom from './custom';
import axios from 'axios'
export default function Page() {
  const [passwords, setPasswords]=useState([])
  const getAllPAsswords=(type='simple')=>{
    
     axios.get(`http://localhost:4000/passwords/${type}`)
    .then(response => {
      // Handle the response
      console.log('Response:', response.data);
      setPasswords(response.data.passwords)
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
  }
  const AddPassword=(password, type)=>{
    
    axios.post('http://localhost:4000/add/password', {password,type })
  .then(response => {
    // Handle the response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
}
const copyToClipBoard=(pass)=>{
  navigator.clipboard.writeText(pass)
}
  const [selected, setSelected] = useState(1);
useEffect(()=>{
  if(selected===2){
    getAllPAsswords('complex')
  }
  if(selected===1){
    getAllPAsswords()
  }
  if(selected===3){
    getAllPAsswords('custom')
  }
  
},[selected])
  return (
    <>
    <h1>Password Generator</h1>
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
      {selected === 1 ? <Simple getAllPAsswords={getAllPAsswords} AddPassword={AddPassword} /> : selected === 2 ? <Complex getAllPAsswords={getAllPAsswords} AddPassword={AddPassword}/> : selected === 3 ? <Custom getAllPAsswords={getAllPAsswords} AddPassword={AddPassword}/> : null}
      </div>
      
      <div className={styles.history}>
        <h1> Password History</h1>
        <ul>
          {
            passwords.map((item, index)=>(
              <>
              <li><p> {item.password}</p>  <button onClick={()=>copyToClipBoard(item.password)}>Copy</button> </li>
               <hr className={styles.hr} />
              </>
            ))
          }
          
          
         
        </ul>
        
      </div>
    </div>
    </>
  );
}
