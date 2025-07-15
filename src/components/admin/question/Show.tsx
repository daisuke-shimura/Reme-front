import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

type Question = {
  id: number;
  content: string;
};

const QuestionShow = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState<Question | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/admin/questions/${id}`)
      .then(res => setQuestion(res.data))
      .catch(err => console.error("APIエラー:", err));
  }, [id]);

  const QuestionDelete = async () => {
    if (!window.confirm("本当に削除しますか？")) return;

    try {
      await axios.delete(`http://localhost:3000/admin/questions/${id}`);
      alert("削除しました");
      navigate("/admin/questions"); // 一覧へリダイレクト
    } catch (err) {
      console.error("削除エラー:", err);
      alert("削除に失敗しました");
    }
  };

  if (!question) return <p>読み込み中...</p>;

  return (
    <div>
      <h2>管理者用：質問詳細</h2>
      <p>ID： {question.id}</p>
      <p>内容： {question.content}</p>
      <Link to={`/admin/questions/${question.id}/edit`}>編集</Link>
      <button onClick={QuestionDelete}>削除</button>
      <Link to={`/admin/questions`}>一覧へ戻る</Link>
    </div>
  );
};

export default QuestionShow;
