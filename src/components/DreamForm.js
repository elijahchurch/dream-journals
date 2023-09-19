function DreamForm(){
    return (
        <div className="Content">
            <div className="formTemplate">
                <h2>Create Dream Entry</h2>
                <form>
                    <label htmlFor="Name">Entry Name:</label>
                    <input 
                        type="text"
                        name="Name"
                        id="Name"
                        />
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

export default DreamForm;