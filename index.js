import React from 'react';
import ReactDOM from 'react-dom';

const myWebpage = (
  <div>
    <h1> Fun facts About React</h1>
    <h2>Here are resons</h2>
    <ol>
      <li>It is highly mainted language</li>
    </ol>
  </div>
);
console.log(myWebpage);
ReactDOM.render(myWebpage, document.getElementById('root'));
