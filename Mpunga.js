import { Card, List,Table } from 'antd'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import mpunga from './assets/mpunga.json'

function Mpunga() {

    const navigate= useNavigate();

    const [data,setData] = useState([]);

    const loadData =async () =>{
        const response = await axios.get("http://localhost:3001/api/getmpunga");
        setData(response.data)
    }

    useEffect(() => {
        loadData();
    }, [])

    const columns =[
        {
            title:"No.",
            dataIndex:"id",
            key:"id"
        },
        {
            title:"Phone Name",
            dataIndex:"name",
            key:"name"
        },
        {
          title:"Descriptions",
          dataIndex:"description",
          key:"desc"
      },

        {
            title:"Price",
            dataIndex:"price",
            key:"price",
            render: (price) =>`${price} TSH`
        },
    ]

  return (
    <Card title="Mpunga descriptions">
         <Table
             dataSource={data}
             columns={columns}
             rowKey="id"
             onRow={(phoneProduct)=>({
                onClick: () =>navigate(`${phoneProduct.id}`)
             })
             }
         />
    </Card>
  )
}

export default Mpunga