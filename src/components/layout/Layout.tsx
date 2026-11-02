import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useI18n } from '@/i18n';
import Navbar from './Navbar';
import Footer from './Footer';

/** Scroll to the top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function Layout() {
  const { t } = useI18n();
  return (
    <>
      <ScrollToTop />
      <a
        href="#content"
        onClick={(e) => {
          // Hash routing owns the URL hash, so move focus manually instead of changing it.
          e.preventDefault();
          const main = document.getElementById('content');
          main?.focus();
          main?.scrollIntoView();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-ink"
      >
        {t.nav.skipToContent}
      </a>
      <Navbar />
      <main id="content" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
