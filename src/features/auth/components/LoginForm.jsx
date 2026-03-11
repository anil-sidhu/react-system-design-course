import { useRef, useState } from "react"

function LoginForm() {

    const emailRef=useRef(null)

    const handleLogin=(event)=>{
        event.preventDefault();
        console.log(emailRef.current.value);
    }
    console.log("check render");
    
    return (
        <div>
            <form method="post" onSubmit={handleLogin} >
                <input ref={emailRef} type="text" placeholder="email" 
               
                />
              
                <br />
                <br />
                <button   >Login</button>
            </form>
        </div>
    )
}
export default LoginForm





// import { useState } from "react"

// function LoginForm() {
//     const [email,setEmail]=useState('');
//     const [password,setPassword]=useState('');

//     const handleLogin=(event)=>{
//         event.preventDefault();
//         console.log(email,password);
        
//     }
//     console.log("check render");
    
//     return (
//         <div>
//             <form method="post" onSubmit={handleLogin} >
//                 <input type="text" value={email} placeholder="email" 
//                 onChange={(event)=>setEmail(event.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <input type="password"  value={password} placeholder="password"
//                  onChange={(event)=>setPassword(event.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <button   >Login</button>
//             </form>
//         </div>
//     )
// }
// export default LoginForm