import React from 'react'
import { Col, Row, Space } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

function Home2() {

   const colStyle={
         
   }

   const spanStyle={
        
   }

    return (
        <div>
            <div style={{ margin: '50px' }}>

                <Row gutter={30}>

                    <br /><br />
                    <Col span={24} style={colStyle}>
                        <span style={spanStyle}>
                            Tab 2
                            < CaretDownOutlined />

                        </span></Col>
                    <br /><br />
                    <Col span={24} style={colStyle}>
                        <span style={spanStyle}>
                            Tab 3
                            < CaretDownOutlined />
                        </span>
                    </Col>
                    <br /><br />
                    <Col span={24} style={colStyle}>
                        <span style={spanStyle}>
                            Tab 4
                            < CaretDownOutlined />
                        </span>
                    </Col>

                </Row>

            </div>
        </div>
    )
}

export default Home2