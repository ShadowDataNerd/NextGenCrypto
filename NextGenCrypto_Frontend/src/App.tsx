import { useState } from 'react'
import './App.css'
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from './theme';
import { Shell } from './Shell';
import IndexPage from './pages/IndexPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PQCPage from './pages/PQCPage';
import ToolPage from './pages/ToolPage';
import InComingPage from './pages/InComingPage';
import FakeProgress from './pages/FakeProgress';



function App() {
  return (
    <>
    
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Shell>
          <Routes>
            <Route path='/' element={<InComingPage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/home' element={<IndexPage/>} />
            <Route path='/pqc' element={<PQCPage/>} />
            <Route path='/tool' element={<ToolPage/>} />
          </Routes>
        </Shell>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

export default App
