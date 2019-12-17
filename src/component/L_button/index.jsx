import { Button } from 'antd-mobile';
import React from 'react'
import './style.scss'


// 节流函数
function throttle(func, wait) {
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}
export default class BcButton extends React.Component{
  
    btn = null
    render() {
    let {onClick}=this.props
        return <div>
           <Button className="btn" type="primary" onClick={()=>{
              throttle(onClick(),2000)
           }}>登陆</Button>
       
        </div>
    }
}
