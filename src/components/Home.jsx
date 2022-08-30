import React from 'react'
import { Col, Row, Space } from 'antd';
import { Tabs } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { TabPane } from 'rc-tabs';



function Home() {

  const style = {
    background: 'white',

  }

  //  const tabstyle={
  //   marginTop:'130px',
  //   marginLeft:"800px",
  //   backgroundColor:'#d8f9ff'
  //  }

  const showContent = (key) => {
    console.log(key)
  }

  return (

    <><Space direction="horizontal" style={{ marginLeft: '300px', marginTop: '40px' }}>
     

    <Tabs
     
      defaultActiveKey="1"
      onChange={showContent}>


      <TabPane
        tab={
          <span>
            Tab 1
            < CaretDownOutlined style={{ marginLeft: '220px' }} />
          </span>
        }
        key="1"
        
      >
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-1</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-1</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-1</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-1</div>
          </Col>
        </Row>
      </TabPane>

      <br/>

      <TabPane
        tab={
          <span>
            Tab 2
            < CaretDownOutlined style={{ marginLeft: '220px' }} />
          </span>
        }
        key="2">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-2</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-2</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-2</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-2</div>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  </Space></>


  )
}

export default Home;