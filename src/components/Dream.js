import PropTypes from "prop-types";

function Dream(props){

    return(
        <div className="dreamTemplate">
            <h2>{props.name}</h2>
            <h3>Date : {props.date}</h3>
            <p>{props.description}</p>
            <button onClick={() => props.deleteFunction(props.id)}>Delete Entry</button>
        </div>
    )
}

Dream.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    deleteFunction: PropTypes.func
}

export default Dream;