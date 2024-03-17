// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const myEventsList = [
//   {
//     id: 1,
//     title: 'Meeting',
//     start: new Date(2024, 3, 1, 10, 0), // 2024-04-01T10:00:00
//     end: new Date(2024, 3, 1, 12, 0), // 2024-04-01T12:00:00
//   },
//   // Add more events as needed
// ];

// const CalendarApp = () => {
//   return (
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={myEventsList}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//       />
//     </div>
//   );
// };

// export default CalendarApp;


import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarApp = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Meeting',
      start: new Date(2024, 3, 1, 10, 0), // 2024-04-01T10:00:00
      end: new Date(2024, 3, 1, 12, 0), // 2024-04-01T12:00:00
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, start, end } = newEvent;
    if (title && start && end) {
      const id = events.length + 1;
      setEvents([
        ...events,
        {
          id,
          title,
          start: new Date(start),
          end: new Date(end),
        },
      ]);
      setNewEvent({
        title: '',
        start: '',
        end: '',
      });
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleChange}
          />
          <label>Start:</label>
          <input
            type="datetime-local"
            name="start"
            value={newEvent.start}
            onChange={handleChange}
          />
          <label>End:</label>
          <input
            type="datetime-local"
            name="end"
            value={newEvent.end}
            onChange={handleChange}
          />
          <button type="submit">Add Event</button>
        </form>
      </div>
      
      <div style={{ height: 500 , width:800}}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{margin:50}}
        />
      </div>
    </div>
  );
};

export default CalendarApp;
