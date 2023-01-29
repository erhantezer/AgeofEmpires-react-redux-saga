import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import RangeSlider from './RangeSlider';
import UnitRow from './UnitRow';
import AgeFilter from './AgeFilter';

function Units() {
  const units = useSelector((state) => (state.filterOutput ? state.filterOutput : state.units));
  return (
    <>
      <h1>Units</h1>
      <AgeFilter />
      {/* <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>ALL</Button>
        <Button>Dark</Button>
        <Button>Feudal</Button>
        <Button>Castle</Button>
        <Button>İmperial</Button>
      </ButtonGroup> */}
      <RangeSlider label="wood" />
      <RangeSlider label="food" />
      <RangeSlider label="gold" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Costs</th>
          </tr>
        </thead>
        <tbody className="units-table">
          {units.map((unit) => (
            <UnitRow
              key={unit.id}
              id={unit.id}
              name={unit.name}
              age={unit.age}
              cost={unit.cost}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Units;
