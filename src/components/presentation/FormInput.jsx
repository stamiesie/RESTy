import React from 'react';
import PropTypes from 'prop-types';
import styles from '/src/components/presentation/styles.css';

function FormInput ({ url, method, body, onChange, onSubmit }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                className={styles.api}
                    type="text"
                    name="url"
                    placeholder="API URL"
                    value={url}
                    onChange={onChange}/>
                <div>
                <label>
                    <input 
                        type="radio"
                        name="method"
                        value="GET"
                        checked={method === "GET"}
                        onChange={onChange}/>
                GET</label>

                <label>
                    <input 
                        type="radio"
                        name="method"
                        value="POST"
                        checked={method === "POST"}
                        onChange={onChange}/>
                POST</label>

                <label>
                    <input 
                        type="radio"
                        name="method"
                        value="PUT"
                        checked={method === "PUT"}
                        onChange={onChange}/>
                PUT</label>

                <label>
                    <input 
                        type="radio"
                        name="method"
                        value="DELETE"
                        checked={method === "DELETE"}
                        onChange={onChange}/>
                DELETE</label>
                </div>

                <button aria-label="submit">Submit</button>
                <div>
                <textarea
                className={styles.textbox} 
                    name="body"
                    value={body}
                    onChange={onChange}>
                </textarea>
                </div>
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
