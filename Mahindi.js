import { Card, Descriptions,List,Table } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import mahindi from "./assets/mahindi.json"



function Mahindi() {

  const navigate = useNavigate();

  const columns =[
    {
        title:"mNo.",
        dataIndex:"id",
        key:"id"
    },
    {
        title:"Name",
        dataIndex:"name",
        key:"name"
    },
    {
      title:"Descriptions",
      dataIndex:"description",
      key:"description"
  },
    {
        title:"Price",
        dataIndex:"price",
        key:"price",
        render: (price) =>`${price} TSH`
    },
]

  return (
    <Card title="Maize Store">
            
            <Table
                dataSource={mahindi}
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

export default Mahindi