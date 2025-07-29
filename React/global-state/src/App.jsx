import { useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
    // 管理者フラグをuseStateで管理
    const [isAdmin, setIsAdmin] = useState(false);

    // [切り替え]押下時
    const onClickAwitch = () => {
        setIsAdmin(!isAdmin);
    };

    return (
        <div>
            {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
            <button onClick={onClickAwitch}>切り替え</button>
            <Card isAdmin={isAdmin} />
        </div>
    );
};