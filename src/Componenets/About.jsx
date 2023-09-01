import React,{useState} from 'react'

function About(props) {


    const [name,setname]=useState(props.name)

    function click(){
        setname("haii deepak");
    }
    function inputChange(e){
setname(e.target.value)
    }
  return (
    <div>
<h1>About</h1>
<p>{props.name}</p>
<p>{props.work}</p>
<p>username:{name}</p>
<button onClick={()=>click()}> click here</button>
<input
onChange={(e)=>inputChange(e)}
/>
    </div>
  )
}

export default About