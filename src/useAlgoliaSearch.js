import { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

const useAlgoliaSearch = (indexName, params) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState({ hits: [] });

  useEffect(
    // Use Suspense with this effect
    () => {
      client
        .search([{ indexName, query, params }])
        .then(response => setResult(response.results[0]));
    },
    [query]
  );

  return {
    query: {
      value: query,
      onChange: event => setQuery(event.currentTarget.value),
    },
    result: {
      value: result,
    },
  };
};

export default useAlgoliaSearch;
