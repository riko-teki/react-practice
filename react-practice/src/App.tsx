import React from "react";
import "./App.css";
import Item from "./model/item";
import Child from "./views/Child";
import ChildWithArgs from "./views/ChildWithArgs";
import ChildWithArgsInTag from "./views/ChildWithArgsInTag";

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <p>
//           React環境構築完了しました。
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App: React.FC = () => {
  const message: string = "こんにちはReact!!";
  const items: Item[] = [
    {
      id: 1,
      title: "Item1",
    },
    {
      id: 2,
      title: "Item2",
    },
  ];
  return (
    <div className="App">
      {/* 変数を表示 */}
      <p>{message}</p>
      <ul>
        {/* 配列を展開して表示 */}
        {items.map((item: Item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      {/* 子コンポーネントを表示する */}
      <Child />
      {/* 子コンポーネントにデータを渡して表示する */}
      <ChildWithArgs message="propsで渡した文字列" />
      {/* タグで囲んだデータを子コンポーネントに渡す */}
      <ChildWithArgsInTag>タグで囲んだデータを子コンポーネントに渡した</ChildWithArgsInTag>
    </div>
  );
};

export default App;
