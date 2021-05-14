import React from 'react';
import PropTypes from 'prop-types';

function FormInput ({ url, method, body, onChange, onSubmit }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="url"
                    placeholder="API URL"
                    value={url}
                    onChange={onChange}/>

                <label>GET
                    <input 
                        type="radio"
                        name="method"
                        value="GET"
                        checked={method === "GET"}
                        onChange={onChange}/>
                </label>

                <label>POST
                    <input 
                        type="radio"
                        name="method"
                        value="POST"
                        checked={method === "POST"}
                        onChange={onChange}/>
                </label>

                <label>PUT
                    <input 
                        type="radio"
                        name="method"
                        value="PUT"
                        checked={method === "PUT"}
                        onChange={onChange}/>
                </label>

                <label>DELETE
                    <input 
                        type="radio"
                        name="method"
                        value="DELETE"
                        checked={method === "DELETE"}
                        onChange={onChange}/>
                </label>

                <button aria-label="submit">Submit</button>

                <textarea 
                    name="body"
                    value={body}
                    onChange={onChange}>
                </textarea>

            </form>
        </div>
    )
}

FormInput.propTypes = {
url: PropTypes.string.isRequired,
method: PropTypes.string.isRequired,
body: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
onSubmit: PropTypes.func.isRequired,
}

export default FormInput;

