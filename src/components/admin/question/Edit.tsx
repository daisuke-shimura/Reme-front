import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const QuestionEdit = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://127.0.0.1:3000/admin/questions/${id}`)
      .then((res) => {
        setContent(res.data.content);
      })
      .catch((err) => {
        console.error("取得エラー:", err);
        setMessage("データの取得に失敗しました");
      });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // ページリロードを防ぐ

    try {
      const res = await axios.patch(`http://127.0.0.1:3000/admin/questions/${id}`, {
        content: content,
      });
      setMessage("送信成功！ID: " + res.data.id);
      navigate(`/admin/questions/${id}`);
    } catch (error) {
      console.error("送信エラー:", error);
      setMessage("送信失敗しました");
    }
  };

  return (
    <div>
      <h2>質問の編集</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="質問内容を入力"
          rows={4}
        />
        <br />
        <button type="submit">編集</button>
      </form>
      {message && <p>{message}</p>}
      <Link to={`/admin/questions/${id}`}>戻る</Link>
    </div>
  );
};

export default QuestionEdit;
