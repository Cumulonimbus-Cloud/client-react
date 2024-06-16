import { Description, ExampleQuestion, UploadBtn } from "../components/main";
import "./Main.css";

function Main() {
  return (
    <div id="main-wrapper">
        <Description />
        <div id="bottom-contents">
            <ExampleQuestion />
            <UploadBtn />
        </div>
    </div>
  );
}

export default Main;