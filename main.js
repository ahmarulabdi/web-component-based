const divElement = document.createElement('div');

const headingElement = document.createElement('h1');
headingElement.innerText = 'ini adalah element di dalam shadow element';

const shadowRoot = divElement.attachShadow({mode: 'open'});

shadowRoot.appendChild(headingElement);
shadowRoot.innerHTML += `
<style>
   h1 {
     color: green;
   }
 </style>
 `;
document.body.appendChild(divElement);