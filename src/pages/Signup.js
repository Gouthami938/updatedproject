import React , {useState }from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input } from "reactstrap";
import Base from "../components/Base";
import {Form} from "reactstrap";
import {Row} from "reactstrap";
import {Col} from "reactstrap";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";




function Register() {
 const { register1, handleSubmit, formState: { errors } } = useForm();
 const navigate=useNavigate();
  const [register, setRegister] = useState([
    {
      username: "",
      password: "",
    },
  ]);

  function changeDetails(e) {
    let value = e.target.value;

    setRegister({ ...register, [e.target.name]: value });
  }

  const insertAction = async (e) => {
    await axios.post(
      "http://localhost:8080/api/auth/signup",
      register
    ).then(
      (response) => {
          
          console.log(response);
          if (response.status==200) {
              console.log("navigating");
              navigate('/Login')
              //setIsSubmitted(true);
              toast.success("Registration successfull")
          }
      });
  };
  return (


<div style={{

backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605

}}>

<Base>
<Container>

<Row className="mt-4">

        {/* {JSON.stringify(data)} */}


        <Col  sm={{size:6,offset:3}}>
        <Card color="secondary" >
        <CardHeader>

<h3>Fill Information to Register</h3>   


</CardHeader>
   
<CardBody>
    <Form>
    <FormGroup> 
   
       <Input type="text" name="username" id="loginUser" placeholder="Enter Name"
       required  value={register.username} 
       onChange={(e) => changeDetails(e)}
      />
      </FormGroup>
      </Form>
      <Form>
      <FormGroup>
       <Input type="email" name="email" id="email" required placeholder="Enter Email" />
        
        </FormGroup>
        </Form>
      
      {/* <div className="col-3">
              <label for="password">Password : </label>
            </div>
            <div className="col-9">
              <input type="password" name="password" id="loginPassword" value={register.password}  {...register1("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/ })} placeholder="Your password.."  onChange={(e) => changeDetails(e)}/>
              {errors.password && <p className="error">Please enter valid Password !</p>}
            </div> */}
        <Form>
        <FormGroup>
        <Input
          type="password"
          name="password"
          id="loginPassword"
          placeholder="Enter Password"
          required
          value={register.password} 
       onChange={(e) => changeDetails(e)}
        />
        </FormGroup>
        </Form>

     <Form>
     <FormGroup>
        <Input
          type="password"
          name="loginPassword"
          id="loginPassword"
          placeholder="Retype Password"
          required
        />
        </FormGroup>
        </Form>

     <Container className="text-center">

<Button  onClick={e => insertAction(e)} color="dark">Register</Button>

      </Container>
  
    </CardBody>
</Card>

</Col>
</Row>
  </Container>
  </Base>
</div>

  );
}
export default Register;

























// import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input } from "reactstrap";
// import Base from "../components/Base";
// import {Form} from "reactstrap";
// import {Row} from "reactstrap";
// import {Col} from "reactstrap";
// // import { useEffect, useState } from "react";
// import { json } from "react-router-dom";
// import { toast } from 'react-toastify';
// import React , {useState }from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// //import './Login.css';

// const Signup=()=>{
//  const { register1, handleSubmit, formState: { errors } } = useForm();
//   const [register, setRegister] = useState([
//     {
//       username: "",
//       password: "",
//     },
//   ]);

//   function changeDetails(e) {
//     let value = e.target.value;

//     setRegister({ ...register, [e.target.name]: value });
//   }

//   const insertAction = async (e) => {
//     await axios.post(
//       "http://localhost:8080/api/auth/signup",
//       register
//     ).then(
//       (response) => {
          
//           console.log(response);
//           if (response.status==200) {
//               console.log("navigating");
//               //setIsSubmitted(true);
//               toast.success("Registration successfull")
//           }
//       });
//   };




// // import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input } from "reactstrap";
// // import Base from "../components/Base";
// // import {Form} from "reactstrap";
// // import {Row} from "reactstrap";
// // import {Col} from "reactstrap";
// // import { useEffect, useState } from "react";
// // import { json } from "react-router-dom";
// // import { signUp } from "../services/user-service";
// // import { toast } from 'react-toastify';


// // const Signup=()=>{

// //    const[data,setData]=useState({
   
// //     username:'',
// //     password:''
// // })

// //     const [error,setError]=useState({
// //     errors:{},
// //     isError:false

// //     })



   

// // //handlechange

// // const handleChange=(event,property)=>{
// //    setData({...data,[property]:event.target.value})


// //    console.log(data)

// // }

// // //submit the form
// // const submitForm=(event)=>{
// //     event.preventDefault()

// //     console.log(data);
// // //data validate


// // //server api for sending data
// // signUp(data).then((resp)=>{
// // console.log(resp)
// // console.log("success log")
// // toast.success("User is registered successfully")
// // setData({
// //     username:'',
// //     password:''
// // })
// // }).catch((error)=>{
// //     console.log(error)
// //     console.log("Error log")
// //     toast.success("User not registered")

// // })





// // }








//     return(

// <div style={{

// backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605

// }}>

//        <Base>
//        <Container>
//       <Row className="mt-4">

//         {/* {JSON.stringify(data)} */}


//         <Col  sm={{size:6,offset:3}}>
//         <Card color="secondary" >

// <CardHeader>

// <h3>Fill Information to Register</h3>   


// </CardHeader>

// <CardBody>





// {/* Name filed 
// <Form onSubmit={submitForm}>
//      <FormGroup> 
        
//         <Input
//         type="text"
//         placeholder="Enter FirstName"
//         id="firstname"
//         onChange={(e)=>handleChange(e,'firstname')}
//         value={data.firstname}
//         />
//     </FormGroup>
//     </Form>
//     <Form>
//      <FormGroup> 
        
//         <Input
//         type="text"
//         placeholder="Enter LastName"
//         id="lastname"
//         onChange={(e)=>handleChange(e,'lastname')}
//         value={data.lastname}
//         />
//     </FormGroup>

//     </Form>
//  {/* Email filed  */}
//  <Form action="">
//  <FormGroup>  

// <Input
// type="text"
// placeholder="Enter Username"
// id="username"
// value={register.username} 
//        onChange={(e) => changeDetails(e)}
// // onChange={(e)=>handleChange(e,'username')}
// // value={data.username}
// />
// </FormGroup>
// </Form>
// {/* Password filed  */}
// <Form>
// <FormGroup> 
// <Input
// type="password"
// placeholder="Enter Password"
// id="password"
// value={register.password} 
//        onChange={(e) => changeDetails(e)}
// // onChange={(e)=>handleChange(e,'password')}
// // value={data.password}
// />
// </FormGroup>
// </Form>
// <Container className="text-center">
// <Button onClick={(e) => insertAction(e)} color="dark">Register </Button>
// {/* <Button color="light" type="reset" className="ms-2">Reset</Button> */}
// </Container>

// </CardBody>
// </Card>
// </Col>
// </Row>
// </Container>
// </Base>

// </div>
//     );
// }
// export default Signup;