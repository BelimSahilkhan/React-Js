import { useState } from "react";


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
export default Student;
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

