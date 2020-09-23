import React, { Component } from "react";

import sketch from "./sketch";

class P5Wrapper extends Component {
    componentDidMount() {
        this.canvas = new window.p5(sketch, "app-p5_container");
    }

    componentWillReceiveProps(nextProps) {
        this.canvas.pushProps(nextProps);
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        // console.log("::: P5Wrapper.props:", this.props);
        return (
            <div id="app-p5_container"/>
        );
    }
}

export default P5Wrapper;
