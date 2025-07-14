//import { useState, useEffect } from 'react'
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import UserSignUpForm from "./components/UserSignUpForm";
import AdminQuestionIndex from "./components/AdminQuestionIndex";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import axios from 'axios'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/questions" element={<AdminQuestionIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
