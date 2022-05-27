import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../resourses/authentication.css';
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();
    const onFinish = async(values) => {
      try {
        const response = await axios.post("/api/users/login", values);
      localStorage.setItem(
        "cache-user",
        JSON.stringify(response));
        message.success("Login successful");
        navigate('/');
      } catch (error) {
        message.error("Login failed");
      }
      
    }
  return (
    <div className="register">
      
      <div className="row justify-content-center align-items-center w-100 h-100">
        
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Login</h1>
           
            
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">Not Registered ? Click Here To Register</Link>
              <button className="primary" type="submit">
                Login
              </button>
            </div>
          </Form>
        </div>
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
      </div>
    </div>
  );
}
