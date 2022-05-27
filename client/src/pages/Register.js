import React from "react";
import { Form, message} from "antd";
import Input from "antd/lib/input/Input";
import { Link } from "react-router-dom";
import axios from "axios";
import '../resourses/authentication.css'
export default function Register() {

    const onFinish = async(values) => {
      try {
       
        await axios.post("/api/users/register", values);
        message.success("Registration Successfull");
        
      } catch (error) {
        message.error("Something went wrong");
        
      }
    };
  return (
    <div className="register">
      
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <div className="lottie">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_9toyegu9.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Register</h1>
           
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered , Click Here To Login</Link>
              <button className="primary" type="submit" >
                Register
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
