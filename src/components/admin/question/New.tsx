import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QuestionNew = () => {
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // ページリロードを防ぐ

    try {
      const res = await axios.post("http://127.0.0.1:3000/admin/questions", {
        content: content,
      });
      setMessage("送信成功！ID: " + res.data.id);
      navigate("/admin/questions");
    } catch (error) {
      console.error("送信エラー:", error);
      setMessage("送信失敗しました");
    }
  };

  return (
    <div>
      <h2>新しい質問を作成</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="質問内容を入力"
          rows={4}
        />
        <br />
        <button type="submit">送信</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default QuestionNew;
