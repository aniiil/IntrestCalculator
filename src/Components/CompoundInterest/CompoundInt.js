import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';


const CompoundInt = () => {

  const[input ,setInput] =useState({ Principle:"", Rate: "", Time: ""});
  const[result, setResult]=useState("");
  const[total, setTotal]=useState("");
     const [err,setErr]=useState("");
  const[compundGraph, setCompoundGraph]= useState([]);
  const{Principle, Rate ,Time}=input;
  let value, name;
  const handleInput=(e)=>{
    value=  e.target.value;
    name= e.target.name;
    setInput({...input,[name]:value});
  }
  const addInterest=(e)=>{


   e.preventDefault();
   if(!Principle || !Rate || !Time){
        setErr("All Field are required");
   }else{
      const comInterest=Principle*(Math.pow((1+Rate/100),Time)) - Principle
      setResult(comInterest.toFixed(2))
     
      const tamount= (Number(Principle)+Number(comInterest)).toFixed(2);
      setTotal(tamount);
      setErr("");
       const data= {name:"CI",uv:comInterest}
       setCompoundGraph([...compundGraph,data])
   }
  }
     const handleReset=(e)=>{
    e.preventDefault();
    setInput({ Principle:"", Rate: "", Time: ""});
    setResult("");
    setTotal("");
           setErr("");


   }
  return (
    <>
     <div className="title">
        <h1 className="">Simple and Compound Interest Calculator</h1>
        <p>
          Use our tool to calculate simple and compound interest for investments
          and loans.
        </p>
      </div>
       <div className="simple-wrapper">
        <form action="" className="form-box">
            <div className="header">
                <p className="head">Calculate Compound Interest </p>
                <p className="link"> calculate simple interest <NavLink to="/">click here</NavLink></p>
            </div>
            <div className="input-box">
            <label htmlFor="" >
              Principle(&#8377;):
            </label>
            <div className="input-field">
            <input type="number" name="Principle" value={input.Principle} onChange={handleInput} />
            </div>
            <label htmlFor="" >
              Rate of intrest(%):
            </label>
            <br />
            <div className="input-field">
            <input type="number" name="Rate" value={input.Rate} onChange={handleInput}   />
            </div>
            <label htmlFor="" >
              Timeperiod(Years):
            </label>
            <br />
            <div className="input-field">
            <input type="number" name="Time" value={input.Time}  onChange={handleInput} />
            </div>
            </div>
            <div className="btn-box">
                              <p className="error">{err}</p>

                <button className="submit" onClick={addInterest}>Calculate</button>
                <button className="reset" onClick={handleReset}>Reset</button>

            </div>
        
        </form>
          <div className="graph-box">
          <div className="result">
          <h1 className="res-title">Results:</h1>
            <p className="result-amount">Principle Amount: &#8377;  <br /> <p className="inner-res"> {Principle}</p></p>
            <p className="result-intrest">Simple Interest: &#8377; <br /> 
            <p className="inner-res">  {result}</p></p>
            <p className="result-total">Total Amount: &#8377;  <br />  <p className="inner-res"> {total}</p></p>
         </div>
       
        <ComposedChart
          width={450}
          height={400}
          data={compundGraph}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="blue" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" fill='blue' />
        </ComposedChart>
           </div>
      </div>
    
    </>
  )
}

export default CompoundInt;
