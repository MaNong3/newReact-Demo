import React from 'react';
import { observer } from 'mobx-react'
import { InputItem ,Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import Tool from "../../Common/utils/Tool"
import "./index.css"
@observer
class L_Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    render() {
        const { getFieldProps } = this.props.form;
        let {title,type,onchange,inputValue}=this.props
        return (
            <div>
                <InputItem
                    {...getFieldProps('phone')}
                    type={type}
                    placeholder={title}
                    value={Tool.Regular.splitPhone(inputValue)}
                    onChange={(val) => {
                       onchange(val)
                    }}
                >手机号码</InputItem>
                {/* <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="请输入密码"
                    
                >密码</InputItem> */}

            </div>
        );

    }

}

export default createForm()(L_Phone)
