import {Component} from "react"
import "./index.css"

class Navbar extends Component {

    render(
        const score = this.props
        return(
            <div className="nav-container1">
                <img src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png" alt="website logo" className="logo-img"/>
                <div className="matchGameContainer">
                    <p className="score-item">Score: <span className="orange-color">{score}</span></p>
                    <div className="timer-container">
                        <img src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png" alt="timer" className="timer-img"/>
                        <p className="orange-color">{} sec</p>
                    </div>
                </div>
            </div>
        )
    )
}

