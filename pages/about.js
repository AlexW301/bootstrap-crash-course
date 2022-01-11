import { Table } from "react-bootstrap";
import { useState } from "react";

const About = () => {
  const [mark, setMark] = useState({
    name: "Mark Joe",
    goal: 5000000,
    closed: 2000000,
    percent: 45,
  });
  const [joe, setJoe] = useState({
    name: "Joseph Yoyo",
    goal: 4000000,
    closed: 1000000,
    percent: 5,
  });
  const [dude, setDude] = useState({
    name: "Dude Guy",
    goal: 1000000,
    closed: 100000,
    percent: 100,
  });

  const staff = [mark, joe, dude];

  staff.sort(function (a, b) {
    if (a.closed < b.closed) return 1;
    if (a.closed > b.closed) return -1;
    return 0;
  });

  console.log(staff);

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Goal</th>
            <th>Closed</th>
            <th>% to Goal</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((lo, index) => {
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{lo.name}</td>
                  <td>{lo.goal}</td>
                  <td>{lo.closed}</td>
                  <td>{lo.percent}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default About;
