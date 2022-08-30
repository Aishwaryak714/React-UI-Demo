import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Space,Form,Input,DatePicker,InputNumber,Button,Row, Col} from 'antd';
import {  PlusOutlined } from '@ant-design/icons';



function Tab() {

 
let [count,setCount]=useState(0);
 console.log(count)
  return (
    <div>
       <Form>
        <Row gutter={15}>
          <Col span={6}>
          <Form.Item label="First Name" >
            <Input size='default' style={{width:'120px'}}/>
          </Form.Item>
          </Col>
          <Col span={6}>
          <Form.Item label="Last Name">
            <Input size='default' style={{width:'120px'}}/>
          </Form.Item>
          </Col>
          <Col span={6}>
          <Form.Item label="Birthdate" >
            <DatePicker/>
          </Form.Item>
          </Col>
          <Col span={6}>
          <Form.Item label="Age">
            <InputNumber />
          </Form.Item>
          </Col>
          
          </Row>

        <Form.List name="fields" >
         
        {(fields, { add }) => (
          <>
            {fields.map(({key, index}) => (
              <div key={key}>
               
                {key}
                
              <Space
            
                style={{
                  display: 'flex',
                  marginBottom: 8,
                }}
                align="baseline"
              >
                <Row gutter={15}>
                <Col span={6} >
                <Form.Item
                  
                  label="First Name"
                  name={[index, "fname"]}
                >
                <Input size='default' style={{width:'120px'}} />
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item
                  
                  name={[index, "lname"]}
                  label="Last Name"
                  
                >
                <Input size='default' style={{width:'120px'}} />
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item
                  
                  label="Birthdate"
                  name={[index, "bdate"]}
                  
                >
                  <DatePicker/>
                </Form.Item>
                </Col>
                <Col span={6}>
                <Form.Item 
                
                name={[index, "age"]} 
                label="Age">
                <InputNumber />
                </Form.Item>
                
                </Col>
                
                </Row>
              </Space>
              </div>
            ))}
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
           
          </>
        )}
      </Form.List>
      
      </Form>

    </div>
  )
}

export default Tab;