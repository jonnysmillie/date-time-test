import React, {useState, useEffect} from 'react'

const Datetime = () => {
  const [date, showDate] = useState(0)
  const handleClick = () => {
    showDate(Date().toLocaleString())
  }
  useEffect(() => {
    console.log(date);
  });
  return (
  <div>
    <button onClick={handleClick}>Click to reveal the date and time</button>
    <br /><br />
    {date ? <div><b>The date is:</b> {date}</div> : ''}
  </div>
  )
}

export default Datetime