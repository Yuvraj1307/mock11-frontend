import { useState } from "react"




function Form(){
 const [{name,email,destination,NoOftravellers,BudgetPerPerson},showDetail]=useState({name:"",email:"",destination:"",NoOftravellers:0,BudgetPerPerson:0})
 
function handelChage(e){
    console.log(e.target.className)
    if(e.target.className==="name"){
        showDetail({name:e.target.value,email,destination,NoOftravellers,BudgetPerPerson})
       
    }else if(e.target.className==="email"){
        showDetail({name,email:e.target.value,destination,NoOftravellers,BudgetPerPerson})
       
    }else if(e.target.className==="destination"){
        showDetail({name,email,destination:e.target.value,NoOftravellers,BudgetPerPerson})
       
    }
    else if(e.target.className==="NoOftravellers"){
        showDetail({name,email,destination,NoOftravellers:e.target.value,BudgetPerPerson})
       
    } else if(e.target.className==="BudgetPerPerson"){
        showDetail({name,email,destination,NoOftravellers,BudgetPerPerson:e.target.value})
       
    }
}
console.log(name,email,destination,NoOftravellers,BudgetPerPerson)

 async function fieldForm(){
    let obj={
        name,email,destination,NoOftravellers,BudgetPerPerson
    }

    let res=await fetch(`http://localhost:4500/post`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)

    })
    console.log(res)
    console.log(obj)
     
 }
 
    return (
        <div>
            <input onChange={handelChage} className="name" type="text" placeholder="name"/>
            <input onChange={handelChage} className="email" type="text" placeholder="email" />
            <select onChange={handelChage} className="destination">
                   <option value="">select an option</option>
                   <option value="India">India</option>
                   <option value="Africa">Africa</option>
                   <option value="Europe">Europe</option>
                   <option value="America ">America </option>
            </select>
            <input onChange={handelChage} className="NoOftravellers" type="text" placeholder="No of travellers"/>
            <input onChange={handelChage} className="BudgetPerPerson" type="text" placeholder="Budget per person" />
            <button onClick={(e)=>fieldForm(e)}>submit</button>
            </div>
    ) 
}



export default Form