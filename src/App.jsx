import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projetos" element={<Projects />} />
        <Route path="projetos/:slug" element={<ProjectDetail />} />
        <Route path="habilidades" element={<Skills />} />
        <Route path="contato" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
