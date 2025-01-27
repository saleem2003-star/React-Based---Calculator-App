import { useState } from "react";
import './Numbers.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function Numbers()
{
    const[num1, setnum1]=useState(0)
    const[num2,setnum2]=useState(0)
    const[sum,setsum]=useState('',num1+num2)
    const[sub,setsub]=useState('',num1-num2)
    const[mul,setmul]=useState('',num1*num2)
    const[div,setdiv]=useState('',num1/num2)
    
    function Addition(){
        setsum(num1+num2)
    }
    function Addition(){
        setsum(num1+num2)
    }
    function Subtraction(){
        setsub(num1-num2)
    }
    function Multiplication(){
        setmul(num1*num2)
    }
    function Division(){
        setdiv(num1/num2)
    }
    function CalculateAll(){
        setsum(num1+num2)
        setsub(num1-num2)
        setmul(num1*num2)
        setdiv(num1/num2)
    }
    function ClearAll(){
       
        setsum('')
        setsub('')
        setmul('')
        setdiv('')
    }

    
    return(
        <div>
            <div class="in1">
            <input  class="form-control"  width="100px" placeholder="enter the number" type="number" onChange={(e)=>setnum1(+e.target.value)}></input>
            </div><br></br>
            <div class="in2">
            <input  class="form-control"  placeholder="enter the number" type="number" onChange={(e)=>setnum2(+e.target.value)}></input>
            </div><br></br>
            <div class="one">
            <button onClick={Addition} class="btn btn-primary" id="add">Addition={sum}</button>
            <button  onClick={Subtraction} class="btn btn-secondary" id="sub">Subtraction={sub}</button>
            <button onClick={Multiplication} class="btn btn-success" id="mul">Multiplication={mul}</button>
            <button onClick={Division} class="btn btn-info" id="div">Division={div}</button>
            </div><br></br>
            <button  class="btn btn-primary btn-lg" onClick={CalculateAll}>Calculate All</button><br></br><br></br>
            <button class="btn btn-danger" id="clearall" onClick={ClearAll}>Clear All</button>
            
        </div>
    );
}