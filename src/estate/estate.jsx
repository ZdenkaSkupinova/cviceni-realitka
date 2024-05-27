import "./estate.css"

export const Estate = (props) =>{
    return (
    <>
      <div id="inzerat" className="inzerat-popis">
            <h2>{props.title}</h2>
            <p className="text">{props.text}</p>
            <p className="city">{props.city}</p>
          <div className="kontact">
            <p>{props.name}</p>
            <p>{props.phone}</p>
        <img className="foto" src={props.photo} alt="dům"/>
          </div>         
      </div>
    </>
  )
}