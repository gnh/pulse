import React from 'react';
import sanitise from '../utils/sanitise';

const Arrow = ({ isUp }) => {
  if (isUp) return (<span style={{ color: 'green' }}>▲</span>)
  else return (<span style={{ color: 'red' }}>▼</span>)
}

const EventSummary = ({
  key = 'kgg',
  type = 'type',
  actor = 'actor',
  object = 'object',
  target = 'target',
  count = 0,
  average = 0,
  previousCount = 0,
}) => (
  <li key={key} className="event-list--list-item"> {actor} {type} {object}, target={target} | {count} | <Arrow isUp={count > previousCount}></Arrow> (avg = {average})</li>
 )

const EventList = ({ data = [{}] }) => (
  <ul className="event-list">{
    data.map(event => <EventSummary event={event} ></EventSummary>)
  }</ul>
);

export default EventList;
