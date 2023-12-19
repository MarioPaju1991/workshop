import '../assets/stylesheets/application.scss';
import { createRoot } from "react-dom/client";
import React from 'react';

// 2.How to create react component
// 3.How to customize a component with props
const Hello = ({ name, job }) => {
  // Same as up
  // const name = props.name
  // const job == props.job
  // Same as down
  // const { name, job } = props

  // console.log(props);
  return (
    <h1>Hi, Im {name} working at {job}!</h1>
  );
};

// 1.How to render react
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Hello name="Mario" job="Developer" />);
