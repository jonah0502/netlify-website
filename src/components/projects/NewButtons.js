import React from 'react'
import WinBox from "winbox/src/js/winbox.js";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router } from "react-router-dom";
import { Github } from 'react-bootstrap-icons';

//      <li><Button variant="outline-light" onClick={() => handleClick({pdf})}>Resume</Button>{' '}</li>


const NavBoxes = ({tag, title, github, visit, hexcolor_1, hexcolor_2, visitBool}) => {
// const SubFuntion = ()=>{
//   const history = useHistory();
//   console.log(history)
//   function handleClick(path) {
//     history.push(path);
//   }
  // return(
  //   <li><Button variant="outline-light" onClick={() => handleClick({pdf})}>Resume</Button>{' '}</li>
  // );

//}

const createBtn = () => {
  const newBox = new WinBox({
    title: `About ${title}`,
    class: "modern",
    width: '1200px',
    height: '600px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: document.querySelector(tag),
    onfocus: function () {
      this.setBackground(
    `linear-gradient(90deg, ${hexcolor_1} 
      0%, ${hexcolor_2} 100%)`)
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
}
return(
  <Router>

<nav>
  <ul className = {visitBool === false ? "onlytwo": "thing"}>
  <li><Button variant="outline-light" onClick={createBtn}>About</Button>{' '}</li>
  <li> <a className="btn btn-outline-light"  target="_blank" href={github}> <Github size={25} /></a></li>
  {visitBool != false && <li> <a className="btn btn-outline-light"  target="_blank" href={visit}>Visit</a></li>}  
</ul>
</nav>
</Router>
);

}
export default NavBoxes;