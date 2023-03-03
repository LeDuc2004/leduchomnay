import React, { useState , useEffect} from 'react';
import { addHoc , deleteid , updateid} from './redux/action';
import { useDispatch , useSelector } from 'react-redux';

function App() {

  let [listdata  , setListdata] = useState([])
  let [name , setName] = useState("")
  let [age , setAge] = useState("")
  let [status , setStatus] = useState("")
  let [togal , setTogal] = useState(true)


  const dispatch = useDispatch()

  function handlesend() {
   dispatch(addHoc({
    id:Number(Math.random()*100000).toFixed(0),
    name:name,
    age:age,
    status:status
   }))
   setTogal(!togal)
  }

  function deleteid1(id) {
    console.log(id);
   dispatch(deleteid(
    {
      id:id

     }
   ))

    setTogal(!togal)
   }

   function update1(id) {


     let change1 = prompt("Update status")

   dispatch(updateid(
    {
      id:id,
      new:    {
        "id": 1,
        "name": "chiến",
        "age": "26",
        "status": change1
      }

     }
   ))
    setTogal(!togal)
   }
  
  useEffect(()=>{
        fetch("http://localhost:3003/posts")
     .then(res => res.json())
     .then(data => setListdata(data))
  }, [])


  useEffect(()=>{
    fetch("http://localhost:3003/posts")
 .then(res => res.json())
 .then(data => setListdata(data))
}, [togal])






  return ( 
    <div style={{display:"flex"}}>
    <div style={{display:"flex" , flexDirection:"column" , width:"40%"}}>
        <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='name'/>
        <input onChange={(e)=> setAge(e.target.value)} type="number" placeholder='age'/>
        <input onChange={(e)=> setStatus(e.target.value)} type="text" placeholder='status'/>
        <button onClick={()=>handlesend()} >Thêm</button>
    </div>
    <div style={{display:"flex" , flexDirection:'column'}}>
          {listdata.map((e , index)=>{
      return(
         <div key={index} className='list' style={{display:"flex" , alignItems:"center"}}>
           <div >{e.id}</div>
           <div >{e.name}</div>
           <div >{e.age}</div>
           <div>{e.status}</div>
           <i onClick={()=> deleteid1(e.id)} className="fa-solid fa-trash"></i>
           <i onClick={()=> update1(e.id)} className="fa-solid fa-pen"></i>
         </div>
      )
    })}
    </div>


    </div>
   );
}

export default App;