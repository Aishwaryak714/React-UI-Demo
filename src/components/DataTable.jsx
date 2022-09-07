import { Table } from 'antd';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function DataTable() {


const [tab1data,setTab1Data]=useState([])
  
useEffect(()=>{
    const list=JSON.parse(localStorage.getItem('TabOnedata'))
    if(list)
    {
        setTab1Data(list)
        console.log(tab1data)
    }
    
},[])

  const columns=[
    {
       
        title:'ID',
        dataIndex:'id',
        key:'id'
    },
    {
       
        title:'First Name',
        dataIndex:'fname',
        key:'fname'
    },
    {
        title:'Last Name',
        dataIndex:'lname',
        key:'lname'
    },
    {
        title:'City',
        dataIndex:'city',
        key:'city'
    },
    {
        title:'Age',
        dataIndex:'age',
        key:'age'
    },
  ];
  

  return (
    <div>
      <Table  columns={columns} dataSource={tab1data}/> 
    </div>
  )
}

export default DataTable