
import styles from "./complex.css";
import { useState } from 'react';

export default function Simple(props) {
    const {getAllPAsswords, AddPassword}=props
    const [password, setPassword] = useState("");
    function generateRandomNumber(length) {
        var min = Math.pow(10, length - 1);
        var max = Math.pow(10, length) - 1;
        var pass=Math.floor(Math.random() * (max - min + 1)) + min
        setPassword (pass)
        AddPassword(pass, 'simple')
        getAllPAsswords('simple')
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
                <button id="generate" onClick={()=>generateRandomNumber(6)} class="generate">Generate Password</button>
            </div>

        </div>

  )
}
