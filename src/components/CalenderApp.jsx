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


// import  { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import '../App.css'

// const localizer = momentLocalizer(moment);

// const CalendarApp = () => {
//   const [events, setEvents] = useState([
//     {
//       id: 1,
//       title: 'Meeting',
//       start: new Date(2024, 3, 1, 10, 0), // 2024-04-01T10:00:00
//       end: new Date(2024, 3, 1, 12, 0), // 2024-04-01T12:00:00
//     },
//   ]);

//   const [newEvent, setNewEvent] = useState({
//     title: '',
//     start: '',
//     end: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent({ ...newEvent, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { title, start, end } = newEvent;
//     if (title && start && end) {
//       const id = events.length + 1;
//       setEvents([
//         ...events,
//         {
//           id,
//           title,
//           start: new Date(start),
//           end: new Date(end),
//         },
//       ]);
//       setNewEvent({
//         title: '',
//         start: '',
//         end: '',
//       });
//     }
//   };

//   return (
//     <div>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={newEvent.title}
//             onChange={handleChange}
//           />
//           <label>Start:</label>
//           <input
//             type="datetime-local"
//             name="start"
//             value={newEvent.start}
//             onChange={handleChange}
//           />
//           <label>End:</label>
//           <input
//             type="datetime-local"
//             name="end"
//             value={newEvent.end}
//             onChange={handleChange}
//           />
//           <button type="submit">Add Event</button>
//         </form>
//       </div>
      
//       <div className=''>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{height:500}}
//         />
//       </div>
//     </div>
//   );
// };

// export default CalendarApp;





import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

const localizer = momentLocalizer(moment);

const CalendarApp = () => {
   const [events,setEvents] = useState([])
   const [showModal,setShowModal] = useState(false)
   const [selectedDate , setSelectedDate] = useState(null)
   const [eventTitle,setEventTitle] = useState('')
   const [date, setDate] = useState('')
   const [startTime, setStartTime] = useState('')
   const [endTime, setEndTime] = useState('')

   const handleSelectSlot = (slotInfo)=>{
    setShowModal(true)
    setSelectedDate(slotInfo.start)
   }

   const saveEvent = ()=>{
    if(eventTitle && date && startTime && endTime){
      const startDate = moment(date + ' ' + startTime).toDate();
      const endDate = moment(date + ' ' + endTime).toDate();
      
      const newEvent = {
        title : eventTitle,
        start : startDate,
        end : endDate,
      };
      setEvents([...events,newEvent])
      setShowModal(false);
      setEventTitle('')
      setDate('')
      setStartTime('')
      setEndTime('')
    }
   }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
      />

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-lg z-10">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
            <form onSubmit={saveEvent}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Event Title</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Start Time</label>
                <input
                  type="time"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">End Time</label>
                <input
                  type="time"
                  className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2 hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarApp;
