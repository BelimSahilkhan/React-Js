/*import { useState } from "react";


function Student()
{
    const [num1,setmsg1]=useState("")
    const [num2,setmsg2]=useState("")
    const sum=Number(num1)+Number(num2);
    return(
        <div style={{padding:"20px"}}>
            <input type="number" value={num1} placeholder="Enter First Value"
            onChange={(e)=>setmsg1(e.target.value)}
            />
            <br></br><br></br>
            <input type="number" value={num2} placeholder="Enter Second Value"
            onChange={(e)=>setmsg2(e.target.value)}
            />
            <h1>Total Sum Is:{sum}</h1>
        </div>
    )
}
export default Student;*/
/*function Student()
{
    const [msg,setmsg]=useState(0)
    function DB()
    {
        setmsg(msg+1)
    }
    return(
        <div>
            <h1>{msg}</h1>
            <button onClick={DB}>Click Here</button>
        </div>
    )
}
export default Student;*/

/*function Student()
{
    const [msg,setmsg]=useState("Hello")
    function DB()
    {
        setmsg("hello")
    }
}
export default Student;*/


/*function Student()
{
    return "Hi"//<h1>Hello</h1>
}
export default Student;*/

/*function Student()
{
    const StudInfo={Rollno:"01",name:"Sahil",Age:20}
    return(
        <>
            <h1>Rollno:{StudInfo.Rollno}</h1>
            <h2>Name:{StudInfo.name}</h2>
            <h3>Age:{StudInfo.Age}</h3>
        </>
    )
}
export default Student;*/


20/02/2026 Work

//Fragment
/*function Student()
{
    return (
        <>
            <h1>Hii</h1>
            <h2>Hello</h2>
        </>
    )
}

export default Student;*/




 //Memo
/*import React, { useState } from "react";
const Name=React.memo(function Student({name}){

    const [c,Setc]=useState(0);
    console.log(c)
    return(
        <>
            <h1>{name}</h1>
            <h1>{c}</h1>
            <button onClick={()=>Setc(c+1)}>Click me</button>
        </>
    )

});

export default Name; */


//event with function

/*function Student(){

    function My(){
        alert("Helloo");
    }

    return (
    <>
        <button onClick={My}>Click me</button>
    </>
    )
}
export default Student;*/


//event with class
/*import React, { Component, useState } from "react";
class Student extends Component{

    render()
    {
        function my(){
            alert("Welcome")
        }
    
        return (
        <>
            <button onClick={my}>click me</button>
        </>
        )
        
    }
}
export default Student;*/

//Passing Arguments with Class component

/*import React, { Component } from "react";

class Student extends Component{

    render(){

        return <h1>{this.props.name}</h1>
    }

}
export default Student;*/


//Passing Arguments with functional Component

function Student(props){

    return <h1>{props.name}</h1>
}
export default Student;
