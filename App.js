import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Side from './components/product/Side';
import Mahindi from './components/Mahindi';
import Mpunga from './components/Mpunga';
import Pamba from './components/Pamba';
import { Routes,Route, Router, Link } from 'react-router-dom';
import { Layout, Image } from 'antd';
import PambaDescription from './components/PambaDescription';
import MpungaDescription from './components/MpungaDescriptions';
import BeansDescription from './components/BeansDescriptions';
import KoroshoDescription from './components/KoroshoDescription';
import Home from './Home';
import Beans from './components/Beans';
import MahindiData from './components/MahindiData';
import Store from './connector/Store';
import Korosho from './components/Korosho';
import { useStateValue } from './StateProvider';

const {Sider,Content,Footer} = Layout;

function App() {
  const [{basket} , dispatch] = useStateValue();
  return (
    <Layout>
      <Sider style={{height:"100vh",backgroundColor:"white",marginLeft:"10%", marginTop:"1%"}}>
        <Side />
      </Sider>
      <Layout>
        <Content>
         <Routes>
            <Route path="/" element={ <Home />} /> 
            <Route path="maize" element={ <Mahindi />} /> 
            <Route path="maize/:id" element={ <MahindiData />} />  
            <Route path="cotton" element={ <Pamba />} />   
            <Route path="cotton/:id" element={ <PambaDescription />} /> 
            <Route path="mpunga" element={ <Mpunga /> } /> 
            <Route path="mpunga/:id" element={ <MpungaDescription />} /> 
            <Route path="beans" element={ <Beans />} /> 
            <Route path="beans/:id" element={ <BeansDescription />} /> 
            <Route path="cashew" element={ <Korosho />} /> 
            <Route path="cashew/:id" element={ <KoroshoDescription />} /> 
            <Route path="store" element={ <Store />} />           
         </Routes>
         
        </Content>
       
        <Footer className='text-center italic'>reseived by @MzumbeIT Programer Group</Footer>
      </Layout>
    </Layout>
      
  );
}

export default App;
