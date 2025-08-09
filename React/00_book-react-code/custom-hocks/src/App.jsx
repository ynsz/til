import { useState } from 'react'
import axios from 'axios'

export const App = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => {
    // ボタン押下時にローディングフラグ on、エラーフラグ off
    setIsLoading(true);
    setIsError(false);

    // API の実行
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(result => {
        // 苗字と名前を結合するように変換
        const users = result.data.map(user => ({
          id: user.id,
          name: user.name,
          age: Math.floor(Math.random() * 30 + 20) // 年齢を仮で追加
        }));
        // ユーザー一覧 State を更新
        setUserList(users);
      })
      // エラー発生時にエラーフラグを on
      .catch(() => {
        setIsError(true);
      })
      // 処理完了後にローディングフラグ off
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {/* エラーの場合はエラーメッセージを表示 */}
      {isError && <p style={{ color: "red" }}>ユーザーの取得に失敗しました。</p>}
      {/* ローディング中は表示を切り替える */}
      {isLoading ? (
        <p>データを取得中です</p>
      ) : (
        userList.map(user => (
          <p key={user.id}>
            {user.id} : {user.name} ({user.age}歳)
          </p>
        ))
      )}
    </div>
  )
};

export default App;