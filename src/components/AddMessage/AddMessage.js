import React from 'react';

class AddMessage extends React.Component {
    render() {
        return (
            <div className="students">
                <h2>Write message to the student</h2>
                <form>
                    <input className="input" type="text"/><br />
                    <textarea></textarea><br />
                    <input type="submit" value="Submit form"></input>
                </form>
            </div>
        );
    }
}

export default AddMessage;