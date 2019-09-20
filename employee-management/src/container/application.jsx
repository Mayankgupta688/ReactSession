import React from "react";

import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

export default function Application(props) {
    return (
        <div>
            <Header name={props.name}></Header>
            <Content name={props.name} age="10"></Content>
            <Content name={props.name} age="20"></Content>
            <Footer></Footer>
        </div>
    )
}