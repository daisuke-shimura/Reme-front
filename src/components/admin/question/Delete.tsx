import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const QuestionDelete = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    axios
      .delete(`http://127.0.0.1:3000/admin/questions/${id}`)
      .then((res) => {
        setContent(res.data.content);
        navigate(`/admin/questions`);
      })
      .catch((err) => {
        console.error("取得エラー:", err);
        setMessage("データの取得に失敗しました");
        navigate(`/admin/questions`);
      });
  }, [id]);
};

export default QuestionDelete;