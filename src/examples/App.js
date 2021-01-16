import React from "react";
import { TextInput } from "liangxc_components";
// import A from 'liangxc_components'


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInput onChange={(value) => console.log(value)} label="Email Address" placeholder="name@example.com" />
  </div>
);

export default App;
