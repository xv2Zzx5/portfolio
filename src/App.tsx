import { Element } from "react-scroll";
import "./App.css";
import Typography from "./components/Typography";
import Button from "./components/Button";
import { Link } from "react-router-dom";
function App() {
    return (
        <div>
            <Button variant="primary">
                <Link to="/ui">go ui</Link>
            </Button>
        </div>
    );
}

export default App;
