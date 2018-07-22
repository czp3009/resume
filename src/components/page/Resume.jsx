import {Component} from "preact";
import Loader from "react-loader-spinner";
import Markdown from "react-markdown";

export default class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdownText: null,
            errorMessage: null
        }
    }

    componentDidMount() {
        fetch(this.props.markdownUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
                }
                return response;
            })
            .then(response => response.text())
            .then(text => {
                setTimeout(() => {
                    this.setState({
                        markdownText: text
                    })
                }, 1500);
            })
            .catch(error => {
                this.setState({
                    errorMessage: error.message
                })
            })
    }

    render(props, state, context) {
        if (state.errorMessage !== null) {
            return <h1>{state.errorMessage}</h1>
        }
        if (state.markdownText === null) {
            return <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: -props.loaderHeight / 2,
                    marginLeft: -props.loaderWidth / 2
                }}>
                <Loader
                    type="Bars"
                    color="#00BFFF"
                    height={props.loaderHeight}
                    width={props.loaderWidth}
                />
            </div>
        } else {
            return <Markdown source={state.markdownText}/>
        }
    }
}
