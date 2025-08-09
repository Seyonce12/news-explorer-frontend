export async function fetchArticles(queryParams = '') {
  const base = import.meta.env.VITE_NEWS_API_BASE || '';
  const url = base ? `${base}?${queryParams}` : null;

  if (!url) {
    return Promise.reject(new Error('NO_API_CONFIGURED'));
  }

  return fetch(url, { method: 'GET' })
    .then(res => {
      if (!res.ok) throw new Error(`Network response was not ok (${res.status})`);
      return res.json();
    })
    .catch(err => {
      console.error('fetchArticles error:', err);
      throw err;
    });
}
