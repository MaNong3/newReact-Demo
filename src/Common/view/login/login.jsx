import React from 'react';
import { observer } from 'mobx-react'
import Api from "../../../api/index"
import Store from "./store"
import Phone from "../../../component/L_phone/index"
import BcButton from "../../../component/L_button/index"
import { Toast } from 'antd-mobile';
@observer
class Test extends React.Component {
  Store = Store
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      password: ""
    }
  }
  render() {
    let { value } = this.state
    return (
      <div>
        <Phone
          title="手机号"
          type="number"
          inputValue={value}
          onchange={(val) => {
            this.setState({
              value: val.replace(/\s/g, '')
            })
          }}
        ></Phone>
        <br />
        <BcButton onClick={() => {
          this.isState()
          //  console.log(this.props.history.push("/cont"))
        }}></BcButton>
      </div>
    );


  }
  isState = () => {
    // this.props.history.push({
    //   pathname:"/cont",
    //   query:"112121"
    // })
    this.props.history.push({
      pathname:"/cont",
      query:"112121"
    })
    // Api.Login({
    //   phone: this.state.value,
    //   password: "zm181007"
    // }).then(res => {
    //   console.log(res)
    //   this.props.history.push("/cont")

    //   if (res.status == "200") {
      

    //   }
    // }).catch(e => {
    //   alert("手机号不正确")
    // })
  }
  componentDidMount() {
    // Api.Login({
    //   phone: "13718883621",
    //   password: "zm181007"
    // }).then(res => {
    //   // console.log(res)
    // })
  }
}

export default Test
