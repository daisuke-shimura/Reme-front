
import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/sample')
      .then(res => {
        console.log('API成功:', res.data)
        setMessage(res.data.message) // ← state にセット！
      })
      .catch(err => console.error('API失敗:', err))
  }, [])

  return (
    <div>
      <p>{message || 'メッセージを取得中...'}</p> {/* ← 表示する */}
    </div>
  )
}


export default App
