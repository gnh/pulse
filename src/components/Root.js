import React from 'react';
import EventList from './EventList';

const data = [ { type: 'added',
    actor: 'user',
    object: 'contact',
    target: 'pool',
    count: 4,
    previousCount: 1,
    avg: 1 },
  { type: 'added',
    actor: 'user',
    object: 'contact',
    target: 'vacancy',
    count: 2,
    previousCount: 1,
    avg: 1 },
  { type: 'created', object: 'contact', count: 1, avg: 1 },
  { type: 'removed',
    actor: 'user',
    object: 'contact',
    target: 'pool',
    count: 1,
    previousCount: 1,
    avg: 1 },
  { type: 'created',
    actor: 'contact',
    object: 'portalProfile',
    count: 1,
    previousCount: 1,
    avg: 1 },
  { type: 'created',
    actor: 'user',
    object: 'contact',
    count: 6,
    previousCount: 1,
    avg: 1 } ]

export default () => (
  <div>
    <EventList data={data}></EventList>
  </div>
);
