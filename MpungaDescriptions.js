import { Card, List,Image } from 'antd'
import React, { useState } from 'react';
import mpunga from "./assets/mpunga.json"
import image3 from "../img/img/mpunga2.PNG"
import { useParams } from 'react-router-dom'
import { useStateValue } from '../StateProvider';


function MpungaDescription(id,name,description,price) {
  
    const pictures = [image3];

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () =>{
         
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                name:name,
                description:description,
                price:price
            },
        });
    };

    
  return (
    <Card title={`Mpunga store`}>
        <List
        dataSource={mpunga}
        renderItem={(item)=>{
            return(
                <List.Item>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                    <div>{item.price}</div>
                    <div className='image '>
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

export default MpungaDescription