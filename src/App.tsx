/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Institution from './pages/Institution';
import Departments from './pages/Departments';
import Education from './pages/Education';
import News from './pages/News';
import StudentArea from './pages/StudentArea';
import AcademicServices from './pages/AcademicServices';
import Contacts from './pages/Contacts';
import Documents from './pages/Documents';
import Viver from './pages/Viver';
import GenericPage from './pages/GenericPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="institution">
            <Route index element={<Institution />} />
            <Route path=":subpage" element={<Institution />} />
          </Route>
          
          <Route path="departments">
            <Route index element={<Departments />} />
            <Route path=":subpage" element={<Departments />} />
          </Route>
          
          <Route path="education">
            <Route index element={<Education />} />
            <Route path=":subpage" element={<Education />} />
          </Route>

          <Route path="student-area">
            <Route index element={<StudentArea />} />
            <Route path=":subpage" element={<StudentArea />} />
          </Route>

          <Route path="academic-services">
            <Route index element={<AcademicServices />} />
            <Route path=":subpage" element={<AcademicServices />} />
          </Route>

          <Route path="news" element={<News />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="documents" element={<Documents />} />
          <Route path="viver" element={<Viver />} />
          
          {/* Catch-all for any other routes defined in the mega menu */}
          <Route path="*" element={<GenericPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
