import React from 'react';
import PropTypes from 'prop-types';

function DisplayResults({ results }) {
    console.log('DisplayResults', results);
    return (
        <div>
            {results}
        </div>
    )
}

DisplayResults.propTypes = {
results: PropTypes.array.isRequired,
};

export default DisplayResults;

