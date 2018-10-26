import React from 'react';
import PropTypes from 'prop-types';

const Hits = ({ resource }) => {
  const result = resource.read();

  return (
    <div className="ais-Hits">
      <ol className="ais-Hits-list">
        {result.hits.map(hit => (
          <li key={hit.objectID} className="ais-Hits-item">
            <h3
              dangerouslySetInnerHTML={{
                __html: hit._highlightResult.name.value,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: hit._snippetResult.description.value,
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

Hits.propTypes = {
  resource: PropTypes.shape({
    read: PropTypes.func.isRequired,
  }).isRequired,
};

export default Hits;
