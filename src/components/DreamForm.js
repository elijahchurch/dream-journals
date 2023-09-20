import PropTypes from "prop-types"

function DreamForm(props){

    const handleDreamForm = (event) => {
        event.preventDefault();
        props.handleFunction({
            name: event.target.Name.value,
            date: event.target.Date.value,
            description: event.target.Description.value,
            uid: props.uid
        })
    }

    return (
        <div className="Content">
            <div className="formTemplate">
                <h2>Create Dream Entry</h2>
                <form onSubmit={handleDreamForm}>
                    <label htmlFor="Name">Entry Name:</label>
                    <input 
                        className="formInput"
                        type="text"
                        name="Name"
                        id="Name"/>
                    <br/>
                    <label htmlFor="Date">Date of Dream:</label>
                    <input
                        className="formInput"
                        type="date"
                        name="Date"
                        min="today"
                        id="Date"/>
                    <br/>
                    <textarea
                        name="Description"
                        placeholder="dream description"/>
                    <br/>
                    <button type="submit">Log Dream</button>
                </form>
            </div>
        </div>
    )
}

DreamForm.propTypes = {
    uid: PropTypes.string, 
    handleFunction: PropTypes.func
}

export default DreamForm;