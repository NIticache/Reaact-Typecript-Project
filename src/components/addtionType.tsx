import React from 'react'

const addtionType = () => {
const name : string="Niteesh"
const num: number =2;
const num2:string ="3";
 
const addition =()=>{
// console.log(num/num2)  --------- type error

return num+num2
}
  return (
    <div>
{      addition()
}    </div>
  )
}

export default addtionType
