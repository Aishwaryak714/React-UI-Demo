import React from 'react'
import { Button } from 'antd';

function ButtonCmp({value,styleClass,onClick,disabled,style}) {
  return (
    <div>
       <Button className={`${styleClass}`} style={style} disabled={disabled}  onClick={()=>this.onClick()}>{value}</Button>
    </div>
  )
}

export default ButtonCmp;