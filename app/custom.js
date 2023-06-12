import styles from "./complex.css";
import { useState } from "react";
import axios from "axios";
export default function Custom(props) {
    const {getAllPAsswords, AddPassword} =props
  const [passwordMain, setPassword] = useState("");
  const upperLetters = 'ABCDEFGHIJKLMANOPQRSTUVWXYZ';
  const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '1234567890';
  const symbols = '!@#$%^&*()}[]{/';

  const [data,setData]=useState({length:6,UpAlphabet:false, LoAlphabet:false, number:true, symbols:false})
  const onChangeHandler=(e)=>{
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setData({ ...data, [name]: newValue });
    console.log(data);
  }
  
  function getuppercase() {
      return upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }
  function getlowercase() {
      return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  }
  function getnumber() {
      return numbers[Math.floor(Math.random() * numbers.length)];
  }
  
  function getsymbols() {
      return symbols[Math.floor(Math.random() * symbols.length)];
  
  }
  function generateX() {
      const xslist = []
      if (data.UpAlphabet) {
          xslist.push(getuppercase())
      }
      if (data.LoAlphabet) {
          xslist.push(getlowercase())
      }
      if (data.number) {
          xslist.push(getnumber())
      }
      if (data.symbols) {
          xslist.push(getsymbols())
      }
      return xslist[Math.floor(Math.random() * xslist.length)]
  }
  function generatepassword() {
      const length = Number(data.length);
      let password = '';
      for (let i = 0; i < length; i++) {
  
          const x = generateX();
          password += x;
      }
  

      setPassword (password);
      AddPassword(password,'custom')
      getAllPAsswords('custom')
  }
  
  const copyToClipBoard=()=>{
    passwordMain? navigator.clipboard.writeText(passwordMain):navigator.clipboard.writeText('Welcome')
}


  return (
    <div class="pw-container">
    <div class="pw-header">
        <div class="pw">
            <p id="pw"> {passwordMain ? passwordMain:'Welcome'}</p>
            <button id="copy" onClick={copyToClipBoard}>Copy</button>
        </div>
    </div>
    <div class="pw-body">
        <div class="form-control"><label for="length">Password Length</label><input name="length" value={data.length} onChange={onChangeHandler} type="number" min="4" max="20" /></div>
        <div class="form-control"><label for="upper">Contain Upper Case Letters</label><input name="UpAlphabet" value={data.UpAlphabet} onChange={onChangeHandler} type="checkbox"/></div>
        <div class="form-control"><label for="lower">Contain lower Case Letters</label><input name="LoAlphabet" value={data.LoAlphabet} onChange={onChangeHandler} type="checkbox"/></div>
        <div class="form-control"><label for="number">Contain numbers</label><input name="number" checked={data.number} onChange={onChangeHandler} type="checkbox"/></div>
        <div class="form-control"><label for="symbol">Contain symbols</label><input name="symbols" value={data.symbols} onChange={onChangeHandler} type="checkbox"/></div>
        <button id="generate" class="generate" onClick={generatepassword}>Generate Password</button>
    </div>

</div>
  );
}
