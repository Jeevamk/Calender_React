// // import  { useState } from 'react';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';


// // const Calender = () => {
// //    // State for storing the selected date
// //    const [date, setDate] = useState(new Date());
// //    // State for storing the events/reminders
// //    const [events, setEvents] = useState([]);
 
// //    // Function to handle date change
// //    const handleDateChange = (newDate) => {
// //      setDate(newDate);
// //    };
 
// //    // Function to add event/reminder
// //    const addEvent = () => {
// //      const eventName = prompt('Enter event name:');
// //      if (eventName) {
// //        const newEvent = {
// //          date: date,
// //          name: eventName,
// //        };
// //        setEvents([...events, newEvent]);
// //      }
// //    };

 

 
// //    return (
// //     <div className='flex flex-col items-center justify-center'>
// //       <h1 className="text-center">Calendar</h1>
// //       <div className="mt-8">
// //         <Calendar
// //           className='bg-black text-white'
// //           onChange={handleDateChange}
// //           value={date}
// //         />
// //       </div>
// //       <div>
// //         <h2>Events/Reminders</h2>
// //         <button onClick={addEvent} className="mt-4">Add Event/Reminder</button>
// //         <ul>
// //           {events.map((event, index) => (
// //             <li key={index}>
// //               <strong>{event.name}</strong> - {event.date.toLocaleDateString()}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
 
// // }

// // export default Calender

// // import React, { useState } from 'react';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import { CiCirclePlus } from "react-icons/ci";


// // const CalendarComponent = () => {
// //   // State for storing the selected date
// //   const [date, setDate] = useState(new Date());
// //   // State for storing the events/reminders
// //   const [events, setEvents] = useState([]);

// //   // Function to handle date change
// //   const handleDateChange = (newDate) => {
// //     setDate(newDate);
// //   };

// //   // Function to add event/reminder
// //   const addEvent = () => {
// //     const eventName = prompt('Enter event name:');
// //     if (eventName) {
// //       const newEvent = {
// //         date: date,
// //         name: eventName,
// //       };
// //       setEvents([...events, newEvent]);
// //     }
// //   };

// //   // Function to get events for the selected date
// //   const getEventsForDate = () => {
// //     return events.filter((event) => {
// //       return (
// //         event.date.getDate() === date.getDate() &&
// //         event.date.getMonth() === date.getMonth() &&
// //         event.date.getFullYear() === date.getFullYear()
// //       );
// //     });
// //   };

// //   return (
// //     <div className='h-screen flex flex-col justify-center items-center'>
// //       <div className='calendar-container p-4 shadow-2xl w-96 rounded-lg'>
// //         <h1 className="text-center font-bold text-5xl">Calendar</h1>
// //         <div className="calendar pt-5">
// //           <Calendar
// //             className='bg-black text-white'
// //             onChange={handleDateChange}
// //             value={date}
// //           />
// //         </div>
// //         <div>
// //           <h2>Events/Reminders for {date.toDateString()}</h2>
// //           <button onClick={addEvent}><CiCirclePlus className='text-4xl' /></button>
// //           <ul>
// //             {getEventsForDate().map((event, index) => (
// //               <li key={index}>
// //                 <strong>{event.name}</strong>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CalendarComponent;


// import  { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { CiCirclePlus } from "react-icons/ci";

// const CalendarComponent = () => {
//   // State for storing the selected date
//   const [date, setDate] = useState(new Date());
//   // State for storing the events/reminders
//   const [events, setEvents] = useState([]);
//   // State for storing the event input value
//   const [eventNameInput, setEventNameInput] = useState('');
//   // State for toggling the event input
//   const [showEventInput, setShowEventInput] = useState(false);

//   // Function to handle date change
//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//   };

//   // Function to handle event input change
//   const handleEventInputChange = (e) => {
//     setEventNameInput(e.target.value);
//   };

//   // Function to toggle event input visibility
//   const toggleEventInput = () => {
//     setShowEventInput(!showEventInput);
//   };

//   // Function to add event/reminder
//   const addEvent = () => {
//     if (eventNameInput) {
//       const newEvent = {
//         date: date,
//         name: eventNameInput,
//       };
//       setEvents([...events, newEvent]);
//       setEventNameInput('');
//       setShowEventInput(false);
//     }
//   };

//   // Function to get events for the selected date
//   const getEventsForDate = () => {
//     return events.filter((event) => {
//       return (
//         event.date.getDate() === date.getDate() &&
//         event.date.getMonth() === date.getMonth() &&
//         event.date.getFullYear() === date.getFullYear()
//       );
//     });
//   };

//   return (
//     <div className='h-screen flex flex-col justify-center items-center'>
//       <div className='calendar-container p-4 shadow-2xl w-96 rounded-lg'>
//         <h1 className="text-center font-bold text-5xl">Calendar</h1>
//         <div className="calendar pt-5">
//           <Calendar
//             className='bg-black text-white'
//             onChange={handleDateChange}
//             value={date}
//           />
//         </div>
//         <div>
//           <h2>Events/Reminders for {date.toDateString()}</h2>
//           <div className="flex items-center">
//             {showEventInput ? (
//               <input
//                 type="text"
//                 value={eventNameInput}
//                 onChange={handleEventInputChange}
//                 className="mr-2 px-2 py-1 border border-gray-400 rounded"
//                 placeholder="Enter event name"
//               />
//             ) : null}
//             <button onClick={toggleEventInput}><CiCirclePlus className='text-4xl' /></button>
//           </div>
//           <button onClick={addEvent} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Add Event/Reminder</button>
//           <ul>
//             {getEventsForDate().map((event, index) => (
//               <li key={index}>
//                 <strong>{event.name}</strong>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CalendarComponent;

 
