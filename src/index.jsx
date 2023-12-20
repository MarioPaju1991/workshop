import '../assets/stylesheets/application.scss';
import { createRoot } from "react-dom/client";
import React from 'react';
import App from "./components/App";
// 1.How to render react on HTML
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

// // 2.How to create react component
// // 3.How to customize a component with props
// 4.How to breakdown our app into nested components (in different files)
// 5.How to refactor the components with props and iterations

// const Hello = ({ name, job }) => {
//   // Same as up
//   // const name = props.name
//   // const job == props.job
//   // Same as down
//   // const { name, job } = props

//   // console.log(props);
//   return (
//     <h1>Hi, Im {name} working at {job}!</h1>
//   );
// };
