
import React, { useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import Preloader from '../components/Preloader/Preloader';
import NewsCard from '../components/NewsCard/NewsCard';
import { mockArticles } from '../utils/apiMock';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(mockArticles);
  const [loading, setLoading] = useState(false);

  const doSearch = (q) => {
    setQuery(q || '');
    setLoading(true);
    setTimeout(() => {
      if (!q) {
        setResults(mockArticles);
      } else {
        const lc = q.toLowerCase();
        setResults(mockArticles.filter(a => (a.title + ' ' + a.description + ' ' + a.source).toLowerCase().includes(lc)));
      }
      setLoading(false);
    }, 900);
  };

  return (
    <section>
      <div className="container" style={paddingTop:24}>
        <h2 className="h1">"What's going on in the world?"</h2>
        <p className="p-lg">"Find the latest news on any topic and save them in your personal account."</p>
      </div>

      <SearchForm onSearch={doSearch} />

      <div className="container" style={marginTop:20}>
        {loading ? <Preloader /> : (
          <>
            <div style={display:'flex',justifyContent:'space-between',alignItems:'center'}>
              <div className="meta">{results.length} results{query ? ` for “${query}”` : ''}</div>
            </div>

            <div className="grid">
              {results.map(a => <NewsCard key={a.id} article={a} />)}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
