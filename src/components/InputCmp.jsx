import React from 'react'
import { Form, Input } from 'antd';

function InputCmp(props) {
    return (
        <div>
            <Form.Item
                label={props.label}
            >
                <Input
                    placeholder={props.placeholder}
                    required style={{ width: '120px' }}
                    name={props.name}
                    value={props.value}
                    onChange={(e)=>props.onChange(e)}
                />
            </Form.Item>
        </div>
    )
}

export default InputCmp;