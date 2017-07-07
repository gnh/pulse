import React from 'react';
import sanitise from '../utils/sanitise';

const Arrow = ({ isUp }) => {
  if (isUp) return (<span style={{ color: 'green' }}>▲</span>)
  else return (<span style={{ color: 'red' }}>▼</span>)
}

const EventSummary = ({ event }) => {

 const { type, actor, object, target, count, avg, previousCount } = event;
  return (
    <li key={[type,actor,object,target].join()} className="event-list--list-item"> {actor} {type} {object}{target ? ' to ' + target: ''} | {count} | <Arrow isUp={count > previousCount}></Arrow> (avg = {avg})</li>
  )
}

const EventList = ({ data = [{}] }) => (
  <aside className="event-list">
    <div className="logo-bar"><img src="../assets/images/logo.svg"></img></div>
    <ul>
      {data.map(event => <EventSummary event={event} ></EventSummary>)}
    </ul>
  </aside>
);

export default EventList;
