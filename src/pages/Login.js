import Base from "../components/Base";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
import { useState } from "react";
import {toast } from 'react-toastify';
import { loginUser } from "../services/user-service";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Login=()=>{

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username,setUserName] = useState("");
      const [password,setPassword] = useState("");
  
    const navigate=useNavigate();
  
   const loginData = {
          "username": username,
          "password": password
      }
    const errors = {
      pass: "invalid username/password"
    };
  
    const userLogin = (e) => {
      e.preventDefault();
      authenticateUser(loginData)
  }
  
  const authenticateUser = (data) => {
      console.log(data);
      axios.post("http://localhost:8080/api/auth/signin", data).then(
          (response) => {
              
              console.log(response);
              if (response.status==200) {
                  console.log("navigating");
                  navigate('/About')
                  setIsSubmitted(true);
                  toast.success("Login successfull");
                  
              }else{
                toast.failure("LOgin fail");

              }
          }, (error) => {
            setErrorMessages({ name: "pass", message: errors.pass });
          }
      );
  }
  
  const onInputChangeUsername = event => {
      setUserName(event.target.value)
  }
  
  const onInputChangePassword = event => {
      setPassword(event.target.value)
  }
  
  
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );

    //   const renderForm = (
    //     <div className="login-wrapper">
    //       <form class="form" >
    //       <h2>Login</h2>
    //         <div className="input-group">
    //           <input type="text" name="uname" value={username} onChange={e => onInputChangeUsername(e)} required />
    //           <label for="loginUser">User Name</label>
    //           {renderErrorMessage("uname")}
    //         </div>
    //         <div className="input-group">
    //           <input type="password" name="pass" value={password} onChange={e => onInputChangePassword(e)} required />
    //           <label for="loginPassword">Password</label>
    //           {renderErrorMessage("pass")}
    //         </div>
    //           <input type="submit" class="submit-btn" value="Login" onClick={e => userLogin(e)} />
    //       </form>
    //     </div>
    //   );

  
//    const[loginDetail,setLoginDetail]=  useState({
//    username:'',
//    password:''
//   })
  
//   const handleChange=(event,field)=>{

//    let actualValue=event.target.value
//    setLoginDetail({
//       ...loginDetail,
//       [field]:actualValue
     
//    }
//    ) 
//   console.log(loginDetail);
   




// const handleChange=(event,property)=>{
//    setData({...data,[property]:event.target.value})


//    console.log(data)

//}



  
//    const handleFormSubmit=(event)=>{
//       event.preventDefault();
//       console.log(loginDetail)
//    if(loginDetail.username.trim()=='' || loginDetail.password.trim()==''){
//       toast.error("Email or Password is required")
//       return;
//    }

//    loginUser(loginDetail).then((jwtTokenData)=>{
//       console.log("user login:")
//       console.log(jwtTokenData)
//    }).catch(error=>{
//       console.log(error)
//       toast.error("something went wrong")
//    })



//};

  
  
   return(

   


<div style={{

backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSRXM2q7wqOzSjoTP03dcb-pk-J1BvB1tWA&usqp=CAU")',width:1277,height:605

}}>


       <Base>
        
        <Container>

        <Row className="mt-4">
        <Col sm={{size:6,offset:3}} >
            
        <Card color="secondary">

        <CardHeader>

        <h3>Login Here</h3>
        </CardHeader>
      <CardBody>
        
         {/* Email Field*/}
         <Form>
            <FormGroup>
            <Input type="text"
            placeholder="Enter Username"
            id="username"
            value={username} 
            onChange={e=>onInputChangeUsername(e)} required
            /* // value={loginDetail.username}
            // onChange={(e)=>handleChange(e,'username')}
           */
        //   {renderErrorMessage("uname")}

            ></Input>
            </FormGroup>
            </Form>


            <Form>
         {/* Password Field*/}

            <FormGroup>
            <Input type="password"
            placeholder="Enter Password"
            id="password"
            value={password} onChange={e => onInputChangePassword(e)} required 
            // value={loginDetail.password}
            // onChange={(e)=>handleChange(e,'password')}


            ></Input>
            </FormGroup>
            </Form>

            <Container  className="text-center">

            <Button  onClick={e => userLogin(e)} color="dark">Login</Button>

            </Container>

            </CardBody>
        </Card>
        </Col>
        </Row>
    </Container>
       </Base>

       {/* {isSubmitted ? navigate("/") : renderForm} */}

       </div>

    );
};
export default Login;