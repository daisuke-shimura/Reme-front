//import { useState, useEffect } from 'react'
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import UserSignUpForm from "./components/UserSignUpForm";
import QuestionIndex from "./components/admin/question/Index";
import QuestionShow from "./components/admin/question/Show";
import QuestionNew from "./components/admin/question/New";
import QuestionEdit from "./components/admin/question/Edit";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import axios from 'axios'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/questions" element={<QuestionIndex />} />
        <Route path="/admin/questions/:id" element={<QuestionShow />} />
        <Route path="/admin/questions/new" element={<QuestionNew />} />
        <Route path="/admin/questions/:id/edit" element={<QuestionEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
