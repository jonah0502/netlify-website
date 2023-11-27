import React from 'react'
import WinBox from "winbox/src/js/winbox.js";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import Button from 'react-bootstrap/Button';

//      <li><Button variant="outline-light" onClick={() => handleClick({pdf})}>Resume</Button>{' '}</li>


const NavBoxes = () => {

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

const createAbt = () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    class: "modern",
    width: '1000vw',
    height: '250vh',
    top: "80vh",
    right: "50vw",
    bottom: "50vh",
    left: "450vw",
    mount: document.querySelector('#about-content'),
    onfocus: function () {
      this.setBackground(
    `linear-gradient(90deg, rgba(49,36,239,1) 
      0%, rgba(67,0,168,1) 100%)`)
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
}

const createContact = () => {

  const contactBox = new WinBox({
    title: 'Contact Me',
    class: "modern",
    width: '1000vw',
    height: '250vh',
    top: "80vh",
    right: "50vw",
    bottom: "50vh",
    left: "450vw",
    url: "/page1",
    onfocus: function () {
        this.setBackground(
            `linear-gradient(90deg, rgba(49,36,239,1) 
              0%, rgba(67,0,168,1) 100%)`)
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
}
return(

<nav className = "header abtMe" style={{zIndex: '0'}}>
  <ul style={{zIndex: '0'}}>
  <li><Button variant="outline-light" onClick={createAbt} style={{zIndex: '0'}}>About</Button>{' '}</li>
  <li><Button variant="outline-light" onClick={createContact} style={{zIndex: '0'}}>Contact</Button>{' '}</li>
  <li> <a className="btn btn-outline-light"  target="_blank" href={'/myRes.pdf'} style={{zIndex: '0'}}>Resume</a></li>


</ul>
</nav>
);

}
export default NavBoxes;