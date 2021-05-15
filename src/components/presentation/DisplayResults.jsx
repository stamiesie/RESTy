import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

function DisplayResults({ results }) {
    // console.log('DisplayResults', results);
    return (
        <div>
            <ReactJson 
                src={results} 
                name={false}
                displayObjectSize={false}
                displayDataTypes={false}/>
        </div>
    )
}

DisplayResults.propTypes = {
    results: PropTypes.array.isRequired,
};

export default DisplayResults;
