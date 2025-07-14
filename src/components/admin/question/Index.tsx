import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const QuestionIndex = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/admin/questions`)
      .then(res => setQuestions(res.data))
      .catch(err => console.error("APIエラー:", err));
  }, []);

  return (
    <div>
      <h2>管理者用：質問一覧</h2>
      <ul>
        {questions.map((q: any) => (
          <li key={q.id}>
            {q.content}
            <Link to={`/admin/questions/${q.id}`}>詳細</Link>
          </li>
        ))}
      </ul>
      <Link to={`/admin/questions/new`}>新規作成</Link>
    </div>
  );
};

export default QuestionIndex;
