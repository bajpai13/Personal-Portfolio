import React from 'react'
import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {ShowLoading, HideLoading} from "../../redux/rootSlice";
import axios from "axios";
import { message} from 'antd';


function AdminIntro() {
  const dispatch = useDispatch();
    const {portfolioData} = useSelector((state)=> state.root);
    const onFinish = async (values)=>{
        try {
          dispatch(ShowLoading())
          const response = await axios.post(
            "https://personal-portfolio-backend-sigma.vercel.app/api/portfolio/update-intro",
            {
              ...values,
              _id: portfolioData.intro._id,
            }
          );
          dispatch(HideLoading())
          if(response.data.success){
            message.success(response.data.message);
          }else{
            message.error(response.data.message);
          }
        } catch (error) {
          dispatch(HideLoading())
          message.error(error.message);
        }
    }
  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.intro}>
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder="Welcome Text" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="profileImage" label="Profile Image">
          <input placeholder="Image URL or Path" />
        </Form.Item>
        <Form.Item name="education" label="Education">
          <input placeholder="Education" />
        </Form.Item>
        <Form.Item name="city" label="City">
          <input placeholder="City" />
        </Form.Item>
        <div className="flex justify-end w-full" label="Welcome Text">
          <button className="px-10 py-2 bg-primary text-white" type='submit'>SAVE</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro