import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard/NewsCard';
import { SAVED_KEY } from '../utils/constants';

export default function SavedNews(){
  const [saved, setSaved] = useState([]);

  useEffect(()=>{
    try {
      setSaved(JSON.parse(localStorage.getItem(SAVED_KEY) || '[]'));
    } catch {
      setSaved([]);
    }

    function onStorage(){
      try { setSaved(JSON.parse(localStorage.getItem(SAVED_KEY) || '[]')); }
      catch { setSaved([]); }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  return (
    <section>
      <div className="container" style={{paddingTop:24}}>
        <h2 className="h1">Saved articles</h2>
        <p className="p-lg">Articles you've saved will appear here.</p>

        <div style={{marginTop:20}}>
          {saved.length === 0 ? (
            <div className="card" style={{padding:20}}>
              <p className="p-lg">You haven't saved any articles yet. Go to Home and click Save.</p>
            </div>
          ) : (
            <div className="grid">
              {saved.map(a => <NewsCard key={a.id} article={a} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
