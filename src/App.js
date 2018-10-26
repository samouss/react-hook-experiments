import React, { Suspense } from 'react';
import useAlgoliaSearch from './useAlgoliaSearch';
import SearchBox from './SearchBox';
import Hits from './Hits';
import './App.css';

const App = () => {
  // This is probably not the correct usage but it's nice for the demo
  const { query, resource } = useAlgoliaSearch('instant_search', {
    attributesToSnippet: ['description'],
    hitsPerPage: 12,
  });

  return (
    <div className="App">
      <SearchBox {...query} />
      <Suspense fallback={<div className="ais-Loading">Loading....</div>}>
        <Hits resource={resource} />
      </Suspense>
    </div>
  );
};

export default App;
