import React from "react";
import Card from "../Cardcomponents/Card";
import Axios from "axios";
//, { useState, useEffect }
//import students from "../../contacts";

const Students = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`http://localhost:5000/students`).then((response) =>
      setStudents(response.data)
    );
  }, []);

  // return <div>{JSON.stringify(students)}</div>

  return (
    <div>
      <h1 className="heading">NITUK 17-21 BATCH</h1>
      {students.map((student) => (
        <Card
          key={student._id}
          username={student.name}
          img={student.imgURL}
          phone={student.phone}
          email={student.email}
          cv={student.cv}
        />
      ))}
    </div>
  );
};
export default Students;
