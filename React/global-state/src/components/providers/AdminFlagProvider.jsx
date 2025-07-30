import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;

    // 管理者フラグ
    const [isAdmin, setIsAdmin] = useState(false);

    // 動作確認のため、適当なオブジェクトを定義
    // const sampleObj = {
    //     sampleValue : "テスト",
    // };

    // AdminFlagContext の中に Provider があるのでそれで children を囲む
    // value の中にグローバルに扱う実際の値を設定
    // Context オブジェクトとして isAdmin と setIsAdmin を設定（オブジェクトの省略記法）
    return (
        <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AdminFlagContext.Provider>
    );
};