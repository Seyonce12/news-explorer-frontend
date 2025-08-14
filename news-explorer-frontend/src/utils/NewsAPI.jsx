// NewsAPI.jsx

const PROD_URL = "https://nomoreparties.co/news/v2/everything";
const DEV_URL = "https://newsapi.org/v2/everything";

const BASE_URL = import.meta.env.PROD ? PROD_URL : DEV_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY; // from .env

export const getNewsArticles = async (searchQuery) => {
  // Get today's date
  const today = new Date();
  const toDate = today.toISOString().split("T")[0];

  // Clone date and subtract 7 days
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 7);
  const fromDate = pastDate.toISOString().split("T")[0];

  // Construct URL
  const url = `${BASE_URL}?q=${encodeURIComponent(
    searchQuery
  )}&apiKey=${API_KEY}&from=${fromDate}&to=${toDate}&pageSize=100`;

  try {
    const start = Date.now();
    const res = await fetch(url);

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Failed to fetch news articles: ${errText}`);
    }

    const data = await res.json();

    // Ensure at least a 1-second "loading" feel
    const elapsed = Date.now() - start;
    const MIN_DELAY = 1000;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.articles || []);
      }, Math.max(0, MIN_DELAY - elapsed));
    });
  } catch (error) {
    console.error("News API Error:", error);
    throw error;
  }
};
