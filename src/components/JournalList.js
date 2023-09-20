import Proptypes from "prop-types";
import Dream from "./Dream";

function JournaList(props){
    return (
        <div className="Content formTemplate" id="mainList">
            {props.list.map((entry) => 
            <Dream
                name ={entry.name}
                date = {entry.date}
                description = {entry.description}
                id={entry.id}
                deleteFunction={props.deleteFunction}
                key={entry.id}/>)}
        </div>
    )
}

JournaList.propTypes = {
    list: Proptypes.array,
    deleteFunction: Proptypes.func
}

export default JournaList;