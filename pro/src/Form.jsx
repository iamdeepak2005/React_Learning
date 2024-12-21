import React, { useEffect, useState } from 'react'



function Form() {
    // useEffect(()=>{
    //     //do anything here
    // },[])
    const [data,setData]=useState({user:'',pass:'',phone:''})
    function handle(e){
        console.log(e)
        const name1=e.target.name
        setData({name1:e.target.value})
        console.log(data)
        //npm i axios--npx json server --watch filename.json 
           
    }

  return (
    <div>

        name<input type="text"  name='user' onChange={handle}/> <br /><br />
        pass  <input type="password" name='pass' onChange={handle}/> <br /><br />
        phone<input type="text" name='phone' onChange={handle}/>


        <br /><br />
        <div>
            {data.user},{data.pass},{data.phone}
        </div>
    </div>
  )
}

export default Form