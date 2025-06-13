import React, { useState } from 'react';
import './CompanyProject/App.css';
import Contact from './CompanyProject/Footer/Datas/ContactPage'; 
import AboutUs from './CompanyProject/Footer/Datas/AboutUs';
import Payment from './CompanyProject/Footer/Datas/Payment';
import Shipping from './CompanyProject/Footer/Datas/Shipping';
import CancelReturn from './CompanyProject/Footer/Datas/CancelReturn';
import FAQS from './CompanyProject/Footer/Datas/FAQS';
import TermsOfUse from './CompanyProject/Footer/Datas/TermsOfUse';
import Privacy from './CompanyProject/Footer/Datas/Privacy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './CompanyProject/Footer/Datas/Homepage';
import ContactPage from './CompanyProject/Footer/Datas/ContactPage';

const App = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const goBack = () => setSelectedContent(null); 

  const renderContent = () => {
    switch (selectedContent) {
      case 'contact': return < Contact />;
      case 'about': return <AboutUs />;
      case 'payment': return <Payment />;
      case 'shipping': return <Shipping />;
      case 'cancel': return <CancelReturn />;
      case 'faqs': return <FAQS />;
      case 'termsofuse': return <TermsOfUse />;
      case 'privacy': return <Privacy />;
      default:
        return (
          <>
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/contactpage' element={<ContactPage />}></Route>
              <Route path='/about' element={<AboutUs />}></Route>
              <Route path='payment' element={<Payment />}></Route>
              <Route path='/shipping' element={<Shipping />}></Route>
              <Route path='/cancelreturn' element={<CancelReturn />}></Route>
              <Route path='/faqs' element={<FAQS />}></Route>
              <Route path='/termsofuse' element={<TermsOfUse />}></Route>
              <Route path='/privacy' element={<Privacy />}></Route>
            </Routes>
            </BrowserRouter>
          </>
        );
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default App;


