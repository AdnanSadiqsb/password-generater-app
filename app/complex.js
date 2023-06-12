import styles from "./complex.css";
import { useState } from "react";

export default function Simple(props) {
  const {getAllPAsswords, AddPassword} =props
  const [password, setPassword] = useState("");
  function generateRandomString(length) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      randomString += chars.charAt(randomIndex);
    }
    setPassword (randomString);
    AddPassword(randomString,'complex')
    getAllPAsswords('complex')
  }
  
const copyToClipBoard=()=>{
    password? navigator.clipboard.writeText(password):navigator.clipboard.writeText('Welcome')
}


  return (
  <div class="pw-container">
      <div class="pw-header">

          <div class="pw">
              <p id="pw"> {password ? password:'Welcome'}</p>
              <button id="copy" onClick={copyToClipBoard}>Copy</button>
          </div>

      </div>
      <div class="pw-body">
          <button id="generate" onClick={()=>generateRandomString(12)} class="generate">Generate Password</button>
      </div>

  </div>
  );
}
