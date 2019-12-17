// import React from 'react'
import Test from '../../../Common/view/login/login'
import Store from "./store.jsx"
class ChildTest extends Test {
    Store=Store
    //此处写东西覆盖Commoon的数据
   
}
export default ChildTest