import React from 'react'
import { Space,Form,Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState} from 'react';
import InputCmp from './InputCmp';
import ButtonCmp from './ButtonCmp';


// =======================================================================
function Addtab() {

  const [form] = Form.useForm();

  const [inputFields, setInputFields] = useState(
    [{fname: '', lname: '', city: '', age: '' },]
   
  );

 


  const handleChangeInput = (event, index) => {
    const data = [...inputFields]
    data[index][event.target.name] = event.target.value
    setInputFields(data);
    localStorage.setItem('data', JSON.stringify(inputFields))
    console.log(inputFields)
  }

  const handleAddFields = (e) => {
    e.preventDefault()
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
 
  
  return (
   <div>


      <Form onSubmit={handleSubmit} form={form}>
        {inputFields.map((form, index) => {
          return (
            <div key={index}>
              <Space
                style={{
                  display: 'flex',
                  marginBottom: 8,
                }}
                align="baseline"
              >
                
                <InputCmp 
                label="First Name" 
                placeholder="First name"  
                name='fname' 
                value={form.fname}
                onChange={event => handleChangeInput(event, index)}
                />

               <InputCmp 
                label="Last Name" 
                placeholder="Last  name"  
                name='lname' 
                value={form.lname}
                onChange={event => handleChangeInput(event, index)}
                />

                <InputCmp 
                label="City"
                placeholder="City"  
                name='city'
                value={form.city}
                onChange={event => handleChangeInput(event, index)}
                />

                <InputCmp 
                label="Age"
                placeholder="Age"  
                name='age'
                value={form.age}
                onChange={event => handleChangeInput(event, index)}
                />

                &nbsp;&nbsp;&nbsp;
                {<Button
                  type="danger"
                  className="dynamic-delete-button"
                  disabled={inputFields.length === 1}
                  onClick={() => handleRemoveFields(index)}>Delete</Button>}
              </Space>

            </div>

          );

        })}
        <Space direction='horizontal' style={{ marginLeft: '625px' }}>
          
          <Button
            type="dashed" 
            style={{ width: '100px' }}
            disabled={inputFields.length === 4}
            icon={<PlusOutlined />}
            onClick={handleAddFields}> Add field</Button>

          <Button type='submit'
            style={{ backgroundColor: 'white', color: 'black' }}
           >Done</Button>
        
          {/* <ButtonCmp type='submit' style={{ backgroundColor: 'white', color: 'black' }} value='Done' onClick={null}/> */}

        </Space>
      </Form>
    </div>
  )
}

export default Addtab;