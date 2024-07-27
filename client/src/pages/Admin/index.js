import React, { useEffect } from 'react'
import Header from './../../components/Header';
import { Tabs } from "antd";
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import Experiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';
const { TabPane } = Tabs;

function Admin() {
  const {portfolioData} = useSelector((state)=> state.root);

  useEffect(() => {
    if(!localStorage.getItem('token')){
      window.location.href = "/admin-login";
    }
  },[]);



  return (
    <div>
      <Header />
      <div className="flex gap-5 items-center py-5 px-5 justify-between">
        <div className='flex gap-10 items-center'>
          <div className="w-48 h-[1px] bg-primary"></div>
          <h1 className="text-2xl text-primary font-md">Admin Panel</h1>
          <div className="w-96 h-[1px] bg-primary"></div>
        </div>
        <h1 className='underline text-primary text-xl cursor-pointer'
        onClick={()=>{
          localStorage.removeItem('token');
          window.location.href = '/admin-login';
        }}>Logout</h1>
      </div>
      {portfolioData && (
        <div className=" px-5 pb-10">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Intro" key="1">
              <AdminIntro />
            </TabPane>
            <TabPane tab="About" key="2">
              <AdminAbout />
            </TabPane>
            <TabPane tab="Experiences" key="3">
              <Experiences />
            </TabPane>
            <TabPane tab="Projects" key="4">
              <AdminProjects />
            </TabPane>
            <TabPane tab="Courses" key="5">
              <AdminCourses />
            </TabPane>
            <TabPane tab="Contact" key="6">
              <AdminContact />
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin