// UI组件，连状态都没有 性能优化不需要更新
// store
import * as React from "react"; //FC 类型的声明
//为这个组件声明一个Props接口类
interface Props {
    userName:string
}
//function Component
//props 参数对象
const Hello:React.FC<Props> = (props) => {
    return(
        <h2>Hello {props.userName}</h2>
    )
}

export default Hello