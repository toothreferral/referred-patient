import useUpdatePageName from '@/Hooks/useUpdatePageName';
import { Calendar, dayjsLocalizer, SlotInfo } from 'react-big-calendar';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useAppSelector } from '@/Redux/reduxHooks';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import CreateAppointment from '@/components/DashboardComps/CalendarElement/CreateAppointment';
import ViewEvent from '@/components/DashboardComps/CalendarElement/ViewEvents';
const localizer = dayjsLocalizer(dayjs);
import './Style.scss';

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  note: string;
  patient: string;
  place: string;
}

const CalendarPage = () => {
  useUpdatePageName('Calendar');
  const { handleShow } = useGlobalHooks();
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const toggle = useAppSelector(selectGlobal);
  const [newEvent, setNewEvent] = useState<CalendarEvent>({} as CalendarEvent);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent>();
  const [selectedSlot, setSelectedSlot] = useState<SlotInfo | null>(null);

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    handleShow('creat-appointment');
    setSelectedSlot(slotInfo);
    setNewEvent({
      title: '',
      start: slotInfo.start,
      end: slotInfo.end,
      note: '',
      patient: '',
      place: '',
    });
  };

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    handleShow('view-appointment');
  };

  useEffect(() => {
    const handleSaveEvent = () => {
      if (newEvent?.title && selectedSlot) {
        const eventToAdd: CalendarEvent = {
          title: newEvent?.title,
          start: selectedSlot?.start,
          end: selectedSlot?.end,
          note: newEvent?.note,
          patient: newEvent?.patient,
          place: newEvent?.place,
        };
        setEvents((prevEvents) => [...prevEvents, eventToAdd]);
      }
    };

    handleSaveEvent();
  }, [newEvent, selectedSlot]);

  console.log(events);
  console.log('new>>', newEvent);

  return (
    <main className='container py-10'>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        onSelectSlot={handleSelectSlot} // Allow clicking on a date
        onSelectEvent={handleSelectEvent}
      />

      {toggle['creat-appointment'] && (
        <CreateAppointment
          id='creat-appointment'
          close={() => handleShow('creat-appointment')}
          data={newEvent}
          setData={setNewEvent}
        />
      )}
      {toggle['view-appointment'] && (
        <ViewEvent
          id='view-appointment'
          close={() => handleShow('view-appointment')}
          data={selectedEvent}
        />
      )}
    </main>
  );
};

export default CalendarPage;
