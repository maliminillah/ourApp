import React,{useState} from 'react'
import { Carousel } from 'antd';
import './home.css'
import { Table,Tag,Card } from 'antd';
import { useNavigate , Link } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import maize from './img/img/maize.PNG'
import maharage from './img/img/maharage.PNG'
import mpunga from './img/img/mpunga.PNG'
import pamba from './img/img/pamba.PNG'

import { useStateValue } from './StateProvider';
import Subtotal from './connector/Subtotal';

function Home() {
  const navigate = useNavigate();
  const [{basket}, dispatch] = useStateValue();
    
  return (
        <div className=''>
            <h2 className='form-control my-3 text-center m-3'>Agricultural Product Services</h2>
            <Link to="/store" >
                <p>Store item ({basket?.length})</p>
          </Link> 
        <div className='form-control my-5' >

  <Carousel autoplay>
    <div className='mazao w-100 d-flex flex'>
      <h3 className='contentStyle'><img src={maize}/></h3>
    </div>
    <div className='mazao w-100 d-flex flex'>
      <h3 className='contentStyle'><img src={maharage}/></h3>
    </div>
    <div className='mazao w-100 d-flex flex'>
      <h3 className='contentStyle'><img src={mpunga}/></h3>
    </div>
    <div className='mazao w-100 d-flex flex'>
      <h3 className='contentStyle'><img src={pamba}/></h3>
    </div>
  </Carousel>
    </div>
    </div>

  )
}

export default Home