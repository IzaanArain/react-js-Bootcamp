import Button,{Button2} from "./components/Button";
import { useState } from "react";


// const items=[
//   {
//     id:1,
//     name:"izaan",
//     email:"izaan@gmail.com",
//     number:231234214,
//   },
//   {
//     id:2,
//     name:"rano",
//     email:"rano@gmail.com",
//     number:2214,
//   },
//   {
//     id:3,
//     name:"ali",
//     email:"ali@gmail.com",
//     number:34214,
//   }
// ]

function App() {

  const [data,setData]=useState([
    {
      id:1,
      name:"izaan saqib",
      email:"izaan@gmail.com",
      number:231234214,
    },
    {
      id:2,
      name:"rano mal",
      email:"rano@gmail.com",
      number:2214,
    },
    {
      id:3,
      name:"ali jamshoro",
      email:"ali@gmail.com",
      number:34214,
    }
  ])

  
  return (
   <>
   <h1>Izaan Saqib</h1>
   <p>hello world this my world</p>
   <Button name="rano" date="11-12-2013" d1={data}/>
   {/* <Button2/> */}
   </>
  );
}


export const A1 = () => {
  return (
    <div className="A1">
      <h1>my app 2</h1>
      <h1>my app 2</h1>
    </div>
  )
}


export default App;
