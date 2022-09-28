import React from "react";
import ReactDOM from "react-dom/client";

const rootModal = document.getElementById('root') as HTMLElement;

const Name: string = 'Paweł';

const myDiv = (
    <div>Cześć</div>
)


const root = ReactDOM.createRoot(rootModal)
root.render(myDiv);

