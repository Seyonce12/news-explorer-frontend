import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import Preloader from '../components/Preloader/Preloader';
import NewsCard from '../components/NewsCard/NewsCard';
import { mockArticles } from '../utils/apiMock';
import { MOCK_DELAY_MS } from '../utils/constants';

export default function Home(){
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> {
    setResults(mockArticles);
  }, []);

  const search = (q) => {
    setQuery(q || '');
    setLoading(true);
    setError(null);
    setTimeout(() => {
      try {
        const lc = (q || '').toLowerCase();
        const filtered = !lc ? mockArticles : mockArticles.filter(a => `${a.title} ${a.description} ${a.source}`.toLowerCase().includes(lc));
        setResults(filtered);
      } catch (err) {
        setError('An error occurred while searching.');
      } finally {
        setLoading(false);
      }
    }, MOCK_DELAY_MS);
  };

  return (
    <section>
      <div className="container" style={{paddingTop:24}}>
        <h2 className="h1">What's going on in the world?</h2>
        <p className="p-lg">Find articles, opinion pieces and news from reliable sources.</p>
      </div>

      <SearchForm onSearch={search} />

      <div className="container" style={{marginTop:20}}>
        {error && <div className="card" style={{padding:12,marginBottom:12}} role="alert">{error}</div>}
        {loading ? (
          <Preloader />
        ) : (
          <>
            <div className="space-between" style={{marginBottom:12}}>
              <div className="meta">{results.length} results{query ? ` for “${query}”` : ''}</div>
            </div>

            <div className="grid" aria-live="polite">
              {results.length ? results.map(a => <NewsCard key={a.id} article={a} />) : (
                <div className="card" style={{padding:20}}>
                  <p className="p-lg">No results — try another query.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
