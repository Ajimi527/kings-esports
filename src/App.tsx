import { HashRouter, Route, Routes } from 'react-router-dom';
import { I18nProvider } from '@/i18n';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import News from '@/pages/News';
import Article from '@/pages/Article';
import Tournaments from '@/pages/Tournaments';
import TournamentDetail from '@/pages/TournamentDetail';
import Roster from '@/pages/Roster';
import About from '@/pages/About';
import Partnerships from '@/pages/Partnerships';
import NotFound from '@/pages/NotFound';

/**
 * HashRouter keeps the site working on ANY static host with zero server configuration
 * (URLs look like /#/news). See README.md if you prefer clean URLs.
 */
export default function App() {
  return (
    <I18nProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="news/:slug" element={<Article />} />
            <Route path="tournaments" element={<Tournaments />} />
            <Route path="tournaments/:slug" element={<TournamentDetail />} />
            <Route path="roster" element={<Roster />} />
            <Route path="about" element={<About />} />
            <Route path="partnerships" element={<Partnerships />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </I18nProvider>
  );
}
