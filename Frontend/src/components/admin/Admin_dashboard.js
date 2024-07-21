import React, { useEffect, useState } from "react";
import { FaUsers, FaHandshake, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './admin_dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from "../footer_components/Footer";



export default function Admin_dashboard() {

    const history = useHistory();

    const [partnerCount, setPartnerCount] = useState(0);
    const [contactedCount, setContactedCount] = useState(0);
    const [careerCount, setCareerCount] = useState(0); 
    const [callbacksCount, setCallbacksCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
  
    useEffect(() => {
      fetch('http://localhost:5000/getAllContactSubmissions')
        .then((response) => response.json())
        .then((data) => {
          setContactedCount(data.length);
        })
        .catch((error) => {
          console.error('Error fetching contacted count:', error);
        });
  


        fetch('http://localhost:5000/career')
        .then((response) => response.json())
        .then((data) => {
          setCareerCount(data.length);
        })
        .catch((error) => {
          console.error('Error fetching career count:', error);
        });
      

        
        fetch('http://localhost:5000/profile/all')
        .then((response) => response.json())
        .then((data) => {
          setUserCount(data.length);
        })
        .catch((error) => {
          console.error('Error fetching user count:', error);
        });
  
      fetch('http://localhost:5000/getCallbacks')
        .then((response) => response.json())
        .then((data) => {
          setCallbacksCount(data.length);
        })
        .catch((error) => {
          console.error('Error fetching callbacks count:', error);
        });
    }, []);




    useEffect(() => {
      fetch('http://localhost:5000/partner/getAllPartners')
        .then((response) => response.json())
        .then((data) => {
          const { partners } = data;
          setPartnerCount(partners.length);
        })
        .catch((error) => {
          console.error('Error fetching partner count:', error);
        });
    }, []);

    const handleLogout = () => {
        // Clear the authentication token or session
        localStorage.removeItem('authToken'); 
        // Redirect to the desired logout page or login page
        history.push('/');
      };

  const handleKnowMoreClick = (path) => {
    history.push(path);
  };
  return (

    <div>

       <Navbar/>
   
    <div className="admin-dashboard">
         
      <h1 className="text-center m-4 text-success ">Welcome to Fodrix</h1>


       <div className='row'>
    

         <div className='col-lg-4 col-sm-6'>
         <div className="adminbox">
              <div className="box-icon">
                <FaHandshake />
              </div>
              <div className="box-content">
                <h3>Partners </h3>
                <h5>Total: {partnerCount}</h5>
                <button type="button" class="btn btn-dark btn-lg " onClick={() => handleKnowMoreClick('/Admin_view_partners')}>Know more</button>
                
              </div>
            </div>
            </div>


            <div className='col-lg-4 col-sm-6 '>
            <div className="adminbox">
              <div className="box-icon">
                <FaPhone />
              </div>
              <div className="box-content">
                <h3>Callbacks</h3>
                <h5>Total: {callbacksCount}</h5>
                <button type="button" class="btn btn-dark btn-lg" onClick={() => handleKnowMoreClick('/Admin_view_callback')}>Know more</button>
                
              </div>
            </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
       <div className="adminbox">
              <div className="box-icon">
                <FaUsers />
              </div>
              <div className="box-content">
                <h3>Contacts</h3>
                <h5>Total: {contactedCount}</h5>
                <button type="button" class="btn btn-dark btn-lg"     onClick={() => handleKnowMoreClick('/Admin_view_contacted')}
             >Know more</button>
                
              </div>
            </div>
         </div>


         <div className='col-lg-4 col-sm-6'>
       <div className="adminbox">
              <div className="box-icon">
                <FaUsers />
              </div>
              <div className="box-content">
                <h3>Careers</h3>
                <h5>Total: {careerCount}</h5>
                <button type="button" class="btn btn-dark btn-lg"     onClick={() => handleKnowMoreClick('/Admin_view_career')}
             >Know more</button>
                
              </div>
            </div>
         </div>

            <div className='col-lg-4 col-sm-6'>
            <div className="adminbox">
              <div className="box-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="box-content">
                <h3>  Cities</h3>
                <h5>Add</h5>
                <button type="button" class="btn btn-dark btn-lg" onClick={() => handleKnowMoreClick('/AddCityPage')}>Add City</button>
                
              </div>
            </div>
            </div>




            <div className='col-lg-4 col-sm-6'>
            <div className="adminbox">
              <div className="box-icon">
              <FaUsers />
              </div>
              <div className="box-content">
                <h3>  Portfolio Images/Videos</h3>
                <h5>Add</h5>
                <button type="button" class="btn btn-dark btn-lg" onClick={() => handleKnowMoreClick('/Admin_add_portfolio_images')}>Add Images</button>
                
              </div>
            </div>
            </div>


            <div className='col-lg-4 col-sm-6'>
            <div className="adminbox">
              <div className="box-icon">
              <FaUsers />
              </div>
              <div className="box-content">
                <h3>  Add Photographers</h3>
                <h5>Add</h5>
                <button type="button" class="btn btn-dark btn-lg" onClick={() => handleKnowMoreClick('/Admin_add_photographer')}>Add Photographer</button>
                
              </div>
            </div>
            </div>


            <div className='col-lg-4 col-sm-6'>
            <div className="adminbox">
              <div className="box-icon">
              <FaUsers />
              </div>
              <div className="box-content">
                <h3>  Add Blogs</h3>
                <h5>Add</h5>
                <button type="button" class="btn btn-dark btn-lg" onClick={() => handleKnowMoreClick('/Admin_add_blog')}>Add Blogs</button>
                
              </div>
            </div>
            </div>



            <div className='col-lg-4 col-sm-6'>
            <div className="adminbox">
              <div className="box-icon">
              <FaUsers />
              </div>
              <div className="box-content">
                <h3>  User Details</h3>
                <h5>Total: {userCount}</h5>
                {/* <h5>View</h5> */}
                <button type="button" class="btn btn-dark btn-lg" onClick={() => handleKnowMoreClick('/Admin_view_user')}>View User</button>
                
              </div>
            </div>
            </div>

       </div>
      
    </div>

    <div className="logout text-center">
  <button type="button" className="btn btn-dark btn-lg mb-3" onClick={handleLogout}>
    Logout
  </button>
</div>
    <Footer/>
    </div>
  );
}
