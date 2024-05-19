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


let current_path = location.pathname.split('/')[1]
console.log(current_path)


const displayPage = () => {
let current_path = location.pathname.split('/')[1]
console.log(current_path)

if (current_path === "dum01" === "https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum01")
  return




}

