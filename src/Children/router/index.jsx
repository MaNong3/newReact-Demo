import login from "../view/login/test_child"//登录
import Cont from "../../Common/view/Cont/index"
const Routes=[{
    path:"/State",
    component:login
},{
    path:"/cont",
    component:Cont
}]
export default Routes

// import React from 'react'

// export default {
//     config: [
//         {
//             path: "/login",
//             component: React.lazy(() => import('../views/login')),
//             exact: true
//         },
//     ]}