import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {
  return (
    <div>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
      <TailwindCss />
    </div>
  );
};
export default App
