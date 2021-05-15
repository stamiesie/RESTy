import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url }) => (
        <div>
            <p>{method}</p>
            <p>{url}</p>
        </div>
    )

HistoryItem.propTypes = {
method: PropTypes.string.isRequired,
url: PropTypes.string.isRequired,
}

export default HistoryItem;

