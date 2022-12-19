import {useState} from "react";
function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num>=0)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e: any)=>{
   setNum(e.target.value);
  }
   return(
    <>
    <div className="col-xl-1">
    <div className="input-group">
  <div className="input-group-prepend">
    <button className="btn btn-outline-primary" type="button" onClick={decNum}>Decrement</button>
  </div>
  <input type="text" className="form-control" value={num} onChange={handleChange}/>
  <div className="input-group-prepend">
    <button className="btn btn-outline-primary" type="button" onClick={incNum}>Increment</button>
  </div>
</div>
</div>
   </>
  );
}
export default IncDecCounter;