import PropTypes from "prop-types";

function Dream(props){

    return(
        <div className="formTemplate">
            <h2>{props.name}</h2>
            <h3>Date : {props.date}</h3>
            <p>{props.description}</p>
        </div>
    )
}

Dream.propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string
}

export default Dream;