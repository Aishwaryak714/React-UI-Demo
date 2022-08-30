import React from 'react'

function Addtab() {
  return (
    <div>
        <Form.List name="fields">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
               
                <Form.Item
                  name={[index, "fname"]}
                  label="First Name"
                  
                >
                <Input placeholder="First name" />
                </Form.Item>

                <Form.Item
                  name={[index, "lname"]}
                  label="Last Name"
                  
                >
                  <Input placeholder="Last name" />
                </Form.Item>

                <Form.Item
                  label="Birthdate"
                  name={[index, "bdate"]}
                  
                >
                  <DatePicker/>
                </Form.Item>


                <Form.Item 
                name={[index, "age"]} 
                label="Age">
                <InputNumber />
                </Form.Item>


                <MinusCircleOutlined onClick={() => remove(field.name)} />
               
              </div>
            ))}
            
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
              >
                <PlusOutlined /> Add field
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
    </div>
  )
}

export default Addtab;