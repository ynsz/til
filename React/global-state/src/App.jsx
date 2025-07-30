import { useContext } from "react";

import { AdminFlagContext } from "./components/providers/AdminFlagProvider.jsx";
import { Card } from "./components/Card";

export const App = () => {
    // 管理者フラグをuseStateで管理
    //  const [isAdmin, setIsAdmin] = useState(false);
    // Context 内の isAdmin と 更新関数を取得
    const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

    // [切り替え]押下時
    // const onClickAwitch = () => {
    //     setIsAdmin(!isAdmin);
    // };
    const onClickSwitch = () => {
        setIsAdmin(!isAdmin);
    };

    return (
        <div>
            {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
            <button onClick={onClickSwitch}>切り替え</button>
            <Card isAdmin={isAdmin} />
        </div>
    );
};