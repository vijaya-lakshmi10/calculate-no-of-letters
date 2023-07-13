// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component{
    state={phrase:''}
    

    getNoOfLettersEntered=(event)=>{
        this.setState({phrase:event.target.value})
    }

    render(){
        const {phrase}=this.state
        return(
            <div className="calculator-container">
            <div className="items-alignment">
            <div>
            <h1 className="heading">Calculate the Letters you enter</h1>  
            <label className="desc" htmlFor="searchBar">Enter the phrase</label>
            <br/>
            <input type="text" placeholder="Enter the phrase" onChange={this.getNoOfLettersEntered} className="search-bar" id="searchBar"/>
            <p className="no-of-letters" type="button">No.of letters: {phrase.length}</p>      
            </div>
            <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" className="calculator-image" alt="letters calculator"/>
            </div>
            </div>
        )
    }
}
export default LettersCalculator
