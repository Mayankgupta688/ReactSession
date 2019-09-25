import React from "react";

export default function AboutComponent(props) {
    return <h2>This is About Component {props.match.params.id} {props.match.params.name}</h2>
}
