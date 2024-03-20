
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';

const localizer = momentLocalizer(moment);

const CalendarApp = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventTitle, setEventTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null); 

  const handleSelectSlot = (slotInfo) => {
    setShowModal(true);
    setSelectedDate(moment(slotInfo.start).format('YYYY-MM-DD'));
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setEventTitle(event.title);
    setStartTime(moment(event.start).format('HH:mm'));
    setEndTime(moment(event.end).format('HH:mm'));
    setShowModal(true);
  };

  const handleAddEvent = () => {
    setShowModal(true);
    setSelectedDate(null); 
  };


  const saveEvent = () => {
    if (eventTitle && startTime && endTime) {
      const startDate = moment(selectedDate + ' ' + startTime).toDate();
      const endDate = moment(selectedDate + ' ' + endTime).toDate();

      if (selectedEvent) {
        const updatedEvents = events.map((event) =>
          event === selectedEvent
            ? { ...event, title: eventTitle, start: startDate, end: endDate }
            : event
        );
        setEvents(updatedEvents);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
      } else {
        const newEvent = {
          title: eventTitle,
          start: startDate,
          end: endDate,
        };
        const updatedEvents = [...events,newEvent]
        setEvents(updatedEvents);
        localStorage.setItem('events',JSON.stringify(updatedEvents));
      }

      setShowModal(false);
      setEventTitle('');
      setStartTime('');
      setEndTime('');
      setSelectedEvent(null);
    }
  };

  const removeEvent = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter((event) => event !== selectedEvent);
      setEvents(updatedEvents);
      setShowModal(false);
      setEventTitle('');
      setStartTime('');
      setEndTime('');
      setSelectedEvent(null);
    }
  };


  useEffect(()=>{
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  },[])

  return (
    <div>
      <Calendar className='big-calendar'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent} 
        style={{ height: 500 }}
      />

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-70 backdrop-blur-lg z-10">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Add Event</h2>
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
              {selectedDate && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    className="mt-1 p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                    value={selectedDate}
                    readOnly
                  />
                </div>
              )}
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
              <div className="flex justify-between">
                {selectedEvent && (
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    onClick={removeEvent}
                  >
                    Remove Event
                  </button>
                )}
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    {selectedEvent ? 'Update' : 'Save'}
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2 hover:bg-gray-400"
                    onClick={() => {
                      setShowModal(false);
                      setEventTitle('');
                      setStartTime('');
                      setEndTime('');
                      setSelectedEvent(null);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleAddEvent}
      >
        Add Event
      </button>
    </div>
  );
};

export default CalendarApp;
