import React from 'react';
import sanitise from '../utils/sanitise';

const EventSummary = ({
  type = '',
  actor = '',
  object = '',
  target = '',
  count = 0,
  average = 0,
  previousCount = 0,
}) => `${actor} ${type} ${object}, target=${target} | ${count} | ${count > previousCount ? 'up': 'down'} (avg = ${average})`;

const EventList = ({ data = [{}] }) => (
  <ul>{
    data.map(event => )
  }</ul>
);

export default EventList;
