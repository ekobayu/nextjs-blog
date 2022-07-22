import { Fragment } from "react";
import Navigation from "./navigation";

export default function Layout(props) {
    return <Fragment>
        <Navigation />
        <main>{props.children}</main>
    </Fragment>
}