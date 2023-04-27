import React from 'react'
import {A1} from '../App'

const Button = ({name ,date,d1}) => {
    // console.log(d1)
  return (
    <div>
        {/* <h1>{d1[2].name}</h1>
        <h1>{d1[1].name}</h1> */}

        <div className='my-list'>
        {d1.map((val,)=>{
            return <h1>{val.name}</h1>
        })}
        </div>

        <ul>
            {d1.map((val,)=>{
            return <li>{val.name}</li>
        })}
        </ul>
        <h3>{name}</h3>
        <h3>{date}</h3>
        <h1 style={{color: "red"}}>my button</h1>
        <A1/>
    </div>
  )
}

export const Button2 = () => {
    return (
      <div>
          <h1>my button 2</h1>
      </div>
    )
  }

export default Button;