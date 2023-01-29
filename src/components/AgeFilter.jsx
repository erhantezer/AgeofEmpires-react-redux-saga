/* eslint-disable linebreak-style */
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function ControlledTabs() {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age);

  return (
    <Tabs
      id="age-selector"
      activeKey={age}
      onSelect={(selectedAge) => {
        dispatch({ type: 'AGE_FILTER', payload: selectedAge });
      }}
      className="mb-3"
    >
      <Tab eventKey="All" title="All" />
      <Tab eventKey="Dark" title="Dark" />
      <Tab eventKey="Feudal" title="Feudal" />
      <Tab eventKey="Castle" title="Castle" />
      <Tab eventKey="Imperial" title="Imperial" />
    </Tabs>
  );
}

export default ControlledTabs;
