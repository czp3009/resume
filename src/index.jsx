// noinspection ES6UnusedImports
import {h, render} from "preact";
import Resume from "./components/page/Resume";
import markdownFilePath from "../public/resume.md";

const loaderHeight = 100;
const loaderWidth = 100;

render(<Resume loaderHeight={loaderHeight} loaderWidth={loaderWidth}
               markdownUrl={markdownFilePath}/>, document.getElementById("root"));
