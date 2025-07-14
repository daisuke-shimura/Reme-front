import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

type Question = {
  id: number;
  content: string;
};

const QuestionShow = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/admin/questions/${id}`)
      .then(res => setQuestion(res.data))
      .catch(err => console.error("APIエラー:", err));
  }, [id]);

  if (!question) return <p>読み込み中...</p>;

  return (
    <div>
      <h2>管理者用：質問詳細</h2>
      <p>ID： {question.id}</p>
      <p>内容： {question.content}</p>

      <Link to={`/admin/questions`}>一覧ページ</Link>
    </div>
  );
};

export default QuestionShow;
