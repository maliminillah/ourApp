import { Card, List,Image } from 'antd'
import React from 'react';
import pamba from "./assets/pamba.json"
import { useParams } from 'react-router-dom'
import img1 from '../img/img/pamba.PNG'
import { useStateValue } from '../StateProvider';
import Store from '../connector/Store';
import Car from './Pamba';

function PambaDescription({id, name, description, price ,image }) {

    const [{basket} , dispatch] = useStateValue();

     const addToBasket = () =>{
         
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                name: name,
                description: description,
                price: price,
            },
        });
    };

  return (
    <Card title={`Cotton descriptions`}>
        <List
        dataSource={pamba}
        renderItem={(item,index)=>{
            return(
                <List.Item className='list-items'>  
                    <div key={index.id}>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                    <div className='image'><Image src={img1} preview={false}/></div>     
                    <div className='btn btn-primary my-2 py-2' onClick={addToBasket} >order</div>
                </List.Item>
            )
        }}
        />
    </Card>
  )
}

export default PambaDescription