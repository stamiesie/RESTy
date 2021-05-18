import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ requests }) => (
        <ul aria-label="history-list" role="list">

            {requests.map((request, index) => (
                    <li key={`${request.method}-${request.url}-${index}`}>
                        <HistoryItem 
                            method={request.method}
                            url={request.url}
                        />
                    </li>
                ))
            }
        </ul>
)

HistoryList.propTypes = {
requests: PropTypes.arrayOf(
    PropTypes.shape({
        method: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        })).isRequired
};

export default HistoryList;

