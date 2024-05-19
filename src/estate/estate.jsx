import "./estate.css"

const response = await fetch('https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum01');
const data = await response.json();

console.log(response)
console.log(data)

// co chci zobrazit:
console.log(data.title)
console.log(data.text)
console.log(data.city)
console.log(data.contact.name)
console.log(data.contact.phone)
console.log(data.photo)

const title = (data.title)
const text = (data.text)
const city = (data.city)
const contactName = (data.contact.name)
const contactPhone = (data.contact.phone)
const photo = (data.photo) // link 

// API info 4inzeraty

//   https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum01
//   https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum02
//   https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum03
//   https://apps.kodim.cz/daweb/trening-api/apis/realitka/dum04



export const Estate = (props) =>{
    return (
    <>
      <div id= "inzerat"className="inzerat-popis">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p>{props.city}</p>
        <div className="foto">{props.photo}</div>
          <div className="kontact">
            <p>{props.contactName}</p>
            <p>{props.contactPhone}</p>
          </div>         
      </div>
    </>
  )
}