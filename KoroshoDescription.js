import { Card, List,Image } from 'antd'
import React, { useState } from 'react';
import bean from "./assets/bean.json"
import image3 from "../img/img/maharage.PNG"
import { useParams } from 'react-router-dom'
import { useStateValue } from '../StateProvider';


function KoroshoDescription(id,name,description,image,price) {
  
    const pictures = [image3];

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () =>{
         
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                name:name,
                description:description,
                image:image,
                price:price
            },
        });
    };

    
  return (
    <Card title={`Korosho`}>
        <List
        dataSource={bean}
        renderItem={(item)=>{
            return(
            <List.Item>
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div className='image'>
                    <Image src={pictures[3]} once preview={false} className="w-20"/>
                </div>
                <div className='btn btn-primary w-10 h-100 mx-10' onClick={addToBasket}>order</div>
            </List.Item>
            )
        }}
        />
    </Card>
  )
}

export default KoroshoDescription