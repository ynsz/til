import type { FC } from "react";
import type { User } from "../types/user";

export const ListItem: FC<User> = ({
  id,
  name,
  age,
    personalColor = "black", // ここでデフォルト値を指定
    hobbies = [],
}) => {
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age}) {hobbies?.join(" / ")}
    </p>
  );
};
