import React from 'react';
import useAlgoliaSearch from './useAlgoliaSearch';
import SearchBox from './SearchBox';
import './App.css';

const App = () => {
  const { query, result } = useAlgoliaSearch('instant_search', {
    attributesToSnippet: ['description'],
    hitsPerPage: 12,
  });

  return (
    <div className="App">
      <SearchBox {...query} />
      <div className="ais-Hits">
        <ol className="ais-Hits-list">
          {result.value.hits.map(hit => (
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
    </div>
  );
};

export default App;
