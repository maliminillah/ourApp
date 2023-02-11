import React from 'react'
import { Layout,Menu,Card } from 'antd'
import { Content } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'
import { Tab } from 'bootstrap';
const {Sider} = Layout;

function Side() {

  const navigate = useNavigate();

  const productItem=[
    {
      key:"/",
      label:"Home",
    },
    {
      key:"maize",
      label:"Maize"
    },
    {
      key:"cotton",
      label:"Cotton"
    },
    {
      key:"mpunga",
      label:"Mpunga"
    },
    {
      key:"beans",
      label:"Beans"
    },
    {
      key:"cashew",
      label:"cashew"
    },
  ]
  
  const clickItem =(itemclicked)=>{
    navigate(itemclicked.key);
  }

  return (
     <Card>
       <Menu items={productItem} onClick={clickItem}/>
     </Card>
  )
}

export default Side