import React from "react";
import PropTypes from "prop-types";

function UserForm(props){
    return(
        <div className="userForm">
            <h2>{props.message}</h2>
            <form>
                <input 
                    type="text"
                    name="email"
                    placeholder="email" />
                <input
                    type="password"
                    name="password"
                    placeholder="password"/>
                <button type="submit">{props.buttonText}</button>
            </form>
        </div>


    )
}

UserForm.propTypes = {
    message: PropTypes.string,
    buttonText: PropTypes.string
}

export default UserForm;