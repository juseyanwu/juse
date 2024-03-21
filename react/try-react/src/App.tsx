// facebook
// react哲学 能用JS表达的就不要用API JS Way 不用学那么多API 更纯正
// 函数就是组件
// 返回一段template就是组件
// hooks
// 最简单的组件
import * as React from 'react';
import Hello from './hello'
import NameEditComponent from './NameEdit'
function App() {
  //reactive hooks到底
  //name 是状态的名字，setName调用它可以修改值 响应式
  //react 函数式
  const [name,setName] = React.useState("initialName")
  const obj = {a:1}; //model
  // JS
  // js里面写html
  // JSX 是React表示模板的创新写法 ，在JS里面写html
  // HTML是表示UI界面最直接，最简单的
  const setUsernameState = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value);
  };
  return (
    //view
    <>
      <div>
        APP
        {obj.a}
        <Hello userName={name} />
        <NameEditComponent userName={name} onChange={setUsernameState}/>
      </div>
    </>
  )
}

export default App
