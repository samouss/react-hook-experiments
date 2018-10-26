import { useState } from 'react';
import { unstable_createResource } from 'react-cache';
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');

// This is probably not the correct usage
const resource = unstable_createResource(
  ({ indexName, query, params }) =>
    client
      .search([{ indexName, query, params }])
      .then(response => response.results[0]),
  ({ query }) => query
);

const useAlgoliaSearch = (indexName, params) => {
  const [query, setQuery] = useState('');

  return {
    query: {
      value: query,
      onChange: event => setQuery(event.currentTarget.value),
    },
    resource: {
      read: () =>
        resource.read({
          indexName,
          query,
          params,
        }),
    },
  };
};

export default useAlgoliaSearch;
