import { render } from "enzyme"
import React, { Component } from "react"

let quizData = require('./quiz_data.json')

class App extend Component {
    constructor(props) {
        super(props)
        this.state = { quiz_position:1 }
    }
    render() {
        return (
            <div>
                <div classname="QuizQuestion">{quizData.Data.quiz_question [0].instruction_text}</div>
            </div>
        )
    }
}

