import { Card, List,Table } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import bean from './assets/bean.json'

function Beans() {

    const navigate= useNavigate();

    const columns =[
        {
            title:"No.",
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
    <Card title="Mpunga descriptions">
         <Table
             dataSource={bean}
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

export default Beans