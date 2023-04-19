import "./index.scss";
import {Title} from "./components/title";
import {Body} from "./components/body";

export const ModuleA = (props) => {
  return (
    <div className="module-a-content">
      <Title title="ModuleA Title branch test commit test" />
      <Body content="ModuleA Body branch test commit test" />
    </div>
  );
};
