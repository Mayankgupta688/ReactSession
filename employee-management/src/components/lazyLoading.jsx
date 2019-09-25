import React from "react";

var LoadedComponent = null;


export default class LazyLoading extends React.Component {

    constructor() {

        super();
        this.state = {
            name: "Mayank"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Rupa"
            })
        }, 10000)
    }
    render() {

        if(this.state.name === "Mayank") {
            LoadedComponent = React.lazy(() => import("./homeComponent"))
        } else {
            LoadedComponent = React.lazy(() => import("./helpComponent"))
        }

        return (
            <React.Suspense fallback={<b>Loading</b>}>
                <LoadedComponent></LoadedComponent>
            </React.Suspense>
        )
    }
}