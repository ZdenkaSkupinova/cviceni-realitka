import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../header/header';
import { Estate } from '../estate/estate';


document.querySelector('#root').innerHTML = render(
  <div id="app" className="app container">
      <>
      <Header addTitle='Inzeráty'/>
  
      </>
  </div>
);

// API info 4inzeraty

//   https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum01
//   https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum02
//   https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum03
//   https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum04

const link = 'https://apps.kodim.cz/daweb/trening-api/apis/realitka/'
let current_path = location.pathname.split('/')[1]
console.log(current_path)
// asi podminka ???  if (current_path === "dum01")

const current_link = link.concat(current_path)
console.log(current_link)

const response = await fetch(current_link);
const data = await response.json();

const title = (data.title)
const text = (data.text)
const city = (data.city)
const contactName = (data.contact.name)
const contactPhone = (data.contact.phone)
const photo = (data.photo)

// co chci zobrazit:
console.log(data.title)
console.log(data.text)
console.log(data.city)
console.log(data.contact.name)
console.log(data.contact.phone)
console.log(data.photo)
