import {Component} from "react"
import "./index.css";
import SeatingLayout from "../SeatingLayout";

class Selection extends Component {
 state = {
  ticketType: "Premium",
  tickets: 1
 }

 handleType = (event) => {
  this.setState({ticketType: event.target.value})
 }

 handleTicket = (event) => {
  this.setState({tickets: event.target.value})
 }

render(){
  const {ticketType, tickets} = this.state

  return(
    <div className="page-background">
      <div className="header-container">
        <div>
          <div className="movie-details">
            <h4>Tiger Nageswara Rao (2023)</h4>
            <h4 className="ua-radius">UA</h4>
          </div>
          <p className="location">Imax: vijayawada | Today, 22 Oct, 02:00 PM</p>
        </div>
        <div className="right-container">
          <select onChange={this.handleType} value={ticketType}>
            <option value="Premium">Premium</option>
            <option value="Executive">Executive</option>
            <option value="Normal">Normal</option>
          </select>
          <select onChange={this.handleTicket} value={tickets}>
            <option value={1}>1 Ticket</option>
            <option value={2}>2 Tickets</option>
            <option value={3}>3 Tickets</option>
            <option value={4}>4 Tickets</option>
            <option value={5}>5 Tickets</option>
            <option value={6}>6 Tickets</option>
          </select>
        </div>
      </div>
      <SeatingLayout tickets={tickets} ticketType={ticketType} />
    </div>
  )
}

}

export default Selection