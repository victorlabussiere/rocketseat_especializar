import "./cards.css"

function Card({ nome, hora }) {
    return (
        <div className="container">
            <strong className="studendName"> {nome} </strong>
            <p className="time"> {hora} </p>
        </div>

    )

}

export default Card