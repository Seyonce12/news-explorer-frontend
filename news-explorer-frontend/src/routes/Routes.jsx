import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';
const Main = lazy(() => import('../components/Main/Main'));
const SavedNews = lazy(() => import('../components/SavedNews/SavedNews'));
const About = lazy(() => import('../components/About/About'));

export default function AppRoutes(props) {
  const { articles, isLoading, error, noResults, visibleCount, setVisibleCount, isLoggedIn, onLoginClick, handleSearch } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={
          <Main
            articles={articles}
            isLoading={isLoading}
            error={error}
            noResults={noResults}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
            isLoggedIn={isLoggedIn}
            onLoginClick={onLoginClick}
            handleSearch={handleSearch}
          />
        } />
        <Route path='/saved-news' element={<SavedNews />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Suspense>
  );
}
