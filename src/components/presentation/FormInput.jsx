import React from 'react';
import PropTypes from 'prop-types';

function FormInput ({ url, method, body }) {
    return (
        <div>
            <form>
                <input 
                    type="text"
                    name="api-url"
                    placeholder="API URL"
                    value={url}/>

                <label>GET
                    <input 
                        type="radio"
                        name="method"
                        value="GET"
                        checked={method === "GET"}/>
                </label>

                <label>POST
                    <input 
                        type="radio"
                        name="method"
                        value="POST"
                        checked={method === "POST"}/>
                </label>

                <label>PUT
                    <input 
                        type="radio"
                        name="method"
                        value="PUT"
                        checked={method === "PUT"}/>
                </label>

                <label>DELETE
                    <input 
                        type="radio"
                        name="method"
                        value="DELETE"
                        checked={method === "DELETE"}/>
                </label>

                <button aria-label="submit">Submit</button>

                <textarea 
                    name="json-body"
                    value={body}>
                </textarea>

            </form>
        </div>
    )
}

FormInput.propTypes = {
url: PropTypes.string.isRequired,
method: PropTypes.string.isRequired,
json: PropTypes.string.isRequired,
}

export default FormInput;

