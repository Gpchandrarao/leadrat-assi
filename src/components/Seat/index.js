import { MdEventSeat } from "react-icons/md";

import "./index.css";

const Seat = (props) => {
  const {  seatsArray } = props;
  const array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

  const booking = `bookingComplate` 
  
  const onClickSeat = () => {
    alert("Booking Complate")
  }

  const renderRow = (rowArray) => (

    <div className="row-container">
      <p className="letter">{rowArray[0].row}</p>
      {rowArray.map((eachSeat) => (
        <button
          type="button"
          onClick={onClickSeat}
          key={eachSeat.id}
          disabled={eachSeat.sold === 1}
          className={`seat booking ${
            eachSeat.visibility === 1
              ? "hidden"
              : eachSeat.sold === 1
              ? "booked"
              : ""
          }`}
        >
          {`${eachSeat.row} ${eachSeat.id} `}
          {/* {` ${eachSeat.id}`} */}
        </button>
      ))}
    </div>
  );


  return (
    <div className="chart-container">
      {seatsArray.map((eachRow, index) => {
          return <div key={index}>{renderRow(eachRow["row" + array[index]])}</div>
      })}
     <div className={`seating-layout-container booking`}>
      <h1>Key to Seat Layout</h1>
      <div className="seating-layout-button-container">
        <div className="seating-layout-button-item">
          <MdEventSeat className="seat-icon color-1"/>
          <p className="seating-layout-button">Avalable</p>
        </div>
        <div className="seating-layout-button-item">
          <MdEventSeat className="seat-icon color-2"/>
          <p className="seating-layout-button">Unavalable</p>
        </div>
        <div className="seating-layout-button-item">
          <MdEventSeat className="seat-icon color-3"/>
          <p className="seating-layout-button">You Selection</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Seat;