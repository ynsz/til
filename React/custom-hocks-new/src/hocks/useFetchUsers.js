import { useState } from 'react';
import axios from 'axios';

// ユーザー一覧を取得するカスタムフック
export const useFetchUsers = () => { 
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // ユーザー取得ボタン押下アクション
    const onClickFetchUser = () => { 
        // ボタン押下時にローディングフラグ on、エラーフラグ off
        setIsLoading(true); // ローディング状態にする
        setIsError(false); // エラー状態をリセット
        
        // APIの実行
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

    // まとめて返却したいのでオブジェクトに設定する
    return { userList, isLoading, isError, onClickFetchUser };
}