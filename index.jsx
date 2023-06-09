import "./index.scss";
import {Title} from "./components/title";
import {Body} from "./components/body";

export const ModuleA = (props) => {
  return (
    <div className="module-a-content">
      <Title title="ModuleA Title" />
      <Body content="ModuleA Body" />
    </div>
  );
};
