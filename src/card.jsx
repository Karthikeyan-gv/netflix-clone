import './home.css'



function Card(props) {
    
    return(
        <>
        <div className="card">
            <img src={props.image} alt="poster" />
        </div>
        </>
    )
}

export default Card