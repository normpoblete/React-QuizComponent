import { render } from "enzyme"
import React, { Component } from "react"

let quizData = require('./quiz_data.json')

class App extend Component {
    render() {
        return (
            <div/>
            <quizData/>
        )
    }
}

export default Quiz 
