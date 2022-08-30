import React from 'react';
import 'antd/dist/antd.css';
import {  CaretDownOutlined } from '@ant-design/icons';
import { Collapse, Space,Button} from 'antd';
import Tab from './components/Tab';
import './App.css';

const { Panel } = Collapse;



const App = () => (

  <>
<div>
    <Space  direction="horizontal" style={{width: '100%', justifyContent: 'center',marginTop:'80px'}}>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => <CaretDownOutlined rotate={isActive ? 180 : 0} />}
        className="site-collapse-custom-collapse"
        expandIconPosition="end"
        
      >

        <Panel header="Tab 1" key="1" className="site-collapse-custom-panel">
          <Tab/>
        </Panel>
        
        <Panel header="Tab 2" key="2" className="site-collapse-custom-panel">
          <Tab/>
        </Panel>

        <Panel header="Tab 3" key="3" className="site-collapse-custom-panel">
           <Tab/>
        </Panel>

        <Panel header="Tab 4" key="4" className="site-collapse-custom-panel">
           <Tab/>
        </Panel>

      </Collapse>
      
    </Space>
    <Button style={{backgroundColor:'#9febe9',marginTop:'10px',marginLeft:'70%',borderRadius:'5px'}}>Submit</Button>
</div>
</>
);

export default App;