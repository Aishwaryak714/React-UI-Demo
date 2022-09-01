import React from 'react'
import { Space,Form,Input,DatePicker,InputNumber,Button,Row, Col} from 'antd';
import {  PlusOutlined} from '@ant-design/icons';
import { useState } from 'react';


function Addtab() {

  let [count,setCount]=useState(0);
  console.log(count)
  return (
    <div >
      <Form>
      {/* ===================================================================================================== */}
      <Space
            
            style={{
              display: 'flex',
              marginBottom: 8,
            }}
            align="baseline"
          >
          <Form.Item label="First Name" >
            <Input placeholder='First Name' style={{width:'120px'}}/>
          </Form.Item>
       
         
          <Form.Item label="Last Name">
            <Input placeholder='Last Name' style={{width:'120px'}}/>
          </Form.Item>
         
       
          <Form.Item label="Date" >
            <DatePicker/>
          </Form.Item>
          
          <Form.Item label="Age">
            <InputNumber />
          </Form.Item>
         </Space>



      {/* =========================================Additional fields========================================== */}
        <Form.List name="fields">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
               
               <Space
            
                style={{
                  display: 'flex',
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Form.Item
                  name={[index, "fname"]}
                  label="First Name"
                  >
                <Input placeholder="First name" style={{width:'120px'}}/>
                </Form.Item>

                <Form.Item
                  name={[index, "lname"]}
                  label="Last Name"
                >
                <Input placeholder="Last name" style={{width:'120px'}} />
                </Form.Item>

                <Form.Item
                  label="Date"
                  name={[index, "date"]}
                  
                >
                  <DatePicker/>
                </Form.Item>


                <Form.Item 
                name={[index, "age"]} 
                label="Age">
                <InputNumber />
                </Form.Item>
                &nbsp;
                &nbsp;
                <Button
                   type="danger"
                   className="dynamic-delete-button" 
                 onClick={() => remove(field.name)} >Delete</Button>
                </Space>
              </div>
            ))}
            {/* ======================================================================================== */}
            <Form.Item >
              <Space direction='horizontal' style={{marginLeft:'625px'}}>
               
              <Button type="dashed" style={{width:'100px'}} 
              onClick={() => add(setCount(count=count+1))} 
              disabled={count>=3}
              block
              icon={<PlusOutlined />}>
              Add field
              </Button>
               
              <Button type="primary" style={{backgroundColor:'white',color:'black'}}>Done</Button>
              </Space>
            </Form.Item>

            {/* ======================================================================================= */}
          </div>
        );
      }}
    </Form.List>
    </Form>
    </div>
  )
}

export default Addtab;