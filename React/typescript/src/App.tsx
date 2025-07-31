import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

export const App = () => {
  // 取得したユーザー情報
  const [users, setUsers] = useState([]);

  // 画面表示時にユーザー情報を取得
  useEffect(() => {
    axios.get("https://example.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
};