import {useState} from "react";

import axios from "axios";

function Login(){

const[
email,
setEmail
]=useState("");

const[
password,
setPassword
]=useState("");

const login=
async()=>{

try{

const res=
await axios.post(

"http://localhost:5000/api/users/login",

{
email,
password
}

);

localStorage.setItem(
"token",
res.data.token
);

alert(
"Login Successful"
);

}

catch{

alert(
"Invalid Login"
);

}

};

return(

<div className="form">

<h1>Login</h1>

<input
placeholder="Email"
onChange={(e)=>
setEmail(
e.target.value
)}
/>

<input
type="password"

placeholder="Password"

onChange={(e)=>
setPassword(
e.target.value
)}
/>

<button
onClick={login}
>

Login

</button>

</div>

);

}

export default Login;