import React from 'react'
import { Space, Form, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import {useEffect} from 'react';


// =======================================================================
function Addtab() {

  const [form] = Form.useForm();

  const [inputFields, setInputFields] = useState(
    [{ fname: '', lname: '', city: '', age: '' },]
    //     ()=>{
    //      const saved = localStorage.getItem('data');
    //      const initialValue = JSON.parse(saved);
    //      return initialValue ;
    // }
  );

 


  const handleChangeInput = (event, index) => {
    const data = [...inputFields]
    data[index][event.target.name] = event.target.value
    setInputFields(data);
    localStorage.setItem('data', JSON.stringify(inputFields))
  }

  const handleAddFields = () => {
    let object = { fname: '', lname: '', city: '', age: '' }
    setInputFields([...inputFields, object])

  }

  const handleRemoveFields = index => {
    let newList = [...inputFields];
    newList.splice(index, 1)
    setInputFields(newList);
    console.log(inputFields)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    
  };
 
  





  // useEffect(()=>{
  //   const list=localStorage.getItem('data')
  //    if(list){
  //     setInputFields(JSON.parse(list))
  //   }
  // },[])

  // useEffect(()=>{
  //  localStorage.setItem('data' ,JSON.stringify(inputFields))
  // },[inputFields])





  // ===========================================================
 

  // =================================================================
  return (
    <div >
     

      <Form onSubmit={handleSubmit} form={form}>
        {
          inputFields.map((form, index) => {
            return (
              <div key={index}>
                <Space
                  style={{
                    display: 'flex',
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  <Form.Item
                    label="First Name"
                    >
                    <Input
                      placeholder="First name"
                      required style={{ width: '120px' }}
                      name='fname'
                      value={form.fname}
                      onChange={event => handleChangeInput(event, index)}
                    />
                   
                  </Form.Item>

                  <Form.Item
                    label="Last Name"


                  >
                    <Input placeholder="Last name"
                      required
                      style={{ width: '120px' }}
                      name='lname'
                      value={form.lname}
                      onChange={event => handleChangeInput(event, index)}
                    />
                     
                  </Form.Item>

                  <Form.Item
                    label="City"


                  >
                    <Input required
                      style={{ width: '120px' }}
                      name='city'
                      value={form.city}
                      onChange={event => handleChangeInput(event, index)}
                    />
                     
                  </Form.Item>


                  <Form.Item
                    label="Age"

                  >
                    <Input required
                      style={{ width: '120px' }}
                      name='age'
                      value={form.age}
                      onChange={event => handleChangeInput(event, index)}
                    />
                    
                  </Form.Item>
                  &nbsp;&nbsp;&nbsp;
                  {

                    <Button
                      type="danger"
                      className="dynamic-delete-button"
                      disabled={inputFields.length === 1}
                      onClick={() => handleRemoveFields(index)}>Delete</Button>
                  }
                </Space>

              </div>

            )

          })

        }
        <Space direction='horizontal' style={{ marginLeft: '625px' }}>
          <Button
            type="dashed" style={{ width: '100px' }}
            disabled={inputFields.length === 4}
            icon={<PlusOutlined />}
            onClick={handleAddFields}> Add field</Button>

          <Button type='submit'
            style={{ backgroundColor: 'white', color: 'black' }}
          // onClick={handleSubmit}
        
          >Done</Button>
        </Space>
      </Form>


    </div>
  )
}

export default Addtab;