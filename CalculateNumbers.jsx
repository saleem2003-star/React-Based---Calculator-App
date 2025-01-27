import { useState } from "react";
import Numbers from "./Numbers";
import './Numbers.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function CalculateNumbers(){
    return(
        <div  id="first">
            <div class="main">
            <h1>Simple Calculator</h1><br></br>
            <Numbers/>
            </div>
        </div>
    )
}