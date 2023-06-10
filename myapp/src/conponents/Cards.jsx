import { useEffect, useState } from "react"








function Cards(){

let [data,setData]=useState([])

let [{destination,sort},setField]=useState({destination:"",sort:""})

useEffect(()=>{
    fetch(`http://localhost:4500/post`)
    .then(res=>res.json())
    .then(data=>setData(data.post))
    .catch(err=>console.log(err))
},[])
console.log(data)


async function delt(e){

    let res=await fetch(`http://localhost:4500/post/${e.target.dataset.id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        }
    })
    console.log(res)
    if(res.ok){
        window.location.reload()
    }
    // console.log(e.target.dataset.id)
}

async function handelChage(e){
    console.log(e.target.value,e.target.className)

    if(e.target.className==="destination"){
        setField({destination:e.target.value,sort})
    }else if(e.target.className==="sort"){
        setField({destination,sort:e.target.value})
    }
}
useEffect(()=>{
 function DataSet(){

     if(destination && !sort){
         
     fetch(`http://localhost:4500/post/${destination}`)
     .then(res=>res.json())
     .then(data=>setData(data.post))
     .catch(err=>console.log(err))
     
     // console.log("1")
    }else if(!destination && sort){
let way
if(sort==="asc"){
    way=1 
}else{
    
    way=-1
}
fetch(`http://localhost:4500/post/get/${way}`)
.then(res=>res.json())
.then(data=>setData(data.post))
.catch(err=>console.log(err))
// console.log("2")

}else if(destination && sort){
    let way
    if(sort==="asc"){
        way=1 
    }else{
        
        way=-1
    }
    fetch(`http://localhost:4500/post/get/${destination}/filt/${way}`)
    .then(res=>res.json())
    .then(data=>setData(data.post))
    .catch(err=>console.log(err))
    // console.log("3")
}

}

    DataSet()
})

// console.log(destination,sort)
console.log(data)
return (

    <div>
<select onChange={handelChage} className="destination">
                   <option value="">select an option to filter</option>
                   <option value="India">India</option>
                   <option value="Africa">Africa</option>
                   <option value="Europe">Europe</option>
                   <option value="America ">America </option>
            </select>


            <select onChange={handelChage} className="sort">
                   <option value="">select an option to sort</option>
                   
                   <option value="asc">asc</option>
                   <option value="desc ">desc </option>
            </select>
        <div className="cont">

        {
            data?.map((el,i)=>{
                return (
                    <div key={el._id}>
                        <h1>name: {el.name}</h1>
                        <h1>email: {el.email}</h1>
                        <h1>Destination: {el.destination}</h1>
                        <h1>No. of travellers: {el.NoOftravellers}</h1>
                        <h1>Budget Per Person: {el.BudgetPerPerson}</h1>
                        <button onClick={(e)=>delt(e)} data-id={el._id}>delete</button>
                    </div>
                )
            })
        }
        </div>
    </div>
)



}

export default Cards