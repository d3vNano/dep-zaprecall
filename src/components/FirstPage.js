    //import { Link } from "react-router-dom";

    import "./css/firstpage.css";

    import Recalls from "./Recalls";
    import Footer from "./Footer";
    import Header from "./Header";

export default function FirstPage () {
    return (
        <div className="body-class">
            <div className="first-page">
                <Header />
                <Recalls />
                <Footer />
            </div>
        </div>
    )
}