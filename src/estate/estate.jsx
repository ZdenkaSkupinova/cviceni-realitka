import "./estate.css"

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