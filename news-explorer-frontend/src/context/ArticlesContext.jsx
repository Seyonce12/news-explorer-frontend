import React from "react";

const ArticlesContext = React.createContext({
  articles: [],
  setArticles: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: null,
  setError: () => {},
  noResults: false,
  setNoResults: () => {},
  visibleCount: 3,
  setVisibleCount: () => {},
});

export const ArticlesProvider = ({ value, children }) => {
  return <ArticlesContext.Provider value={value}>{children}</ArticlesContext.Provider>;
};

export const useArticles = () => React.useContext(ArticlesContext);

export default ArticlesContext;
