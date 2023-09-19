import React from "react";
import PropTypes from "prop-types";

function UserForm(props){
    return(
        <div className="formTemplate">
            <h2>{props.message}</h2>
            <form>
                <label htmlFor="email">Email:</label>
                <input 
                    className="formInput"
                    id="email"
                    type="text"
                    name="email"
                    placeholder="email" />
                <br/>
                <label htmlFor="password">Password:</label>
                <input
                    className="formInput"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"/>
                <br/>
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