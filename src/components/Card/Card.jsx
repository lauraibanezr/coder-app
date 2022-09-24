export default function Card(props){
    let product = "Item A";

    return(
        <div className="card">
            <div className="card-img">
                <img src={props.ima} alt={props.detail}></img>
            </div>
            <div className="card-detail">
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
                <h4>{props.price} €</h4>
            </div>
            <button>Ver detalles</button>

        </div>
    )
}
