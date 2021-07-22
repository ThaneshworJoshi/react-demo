import StudentInfo from './StudentInfo';

function StudentList({ students, deleteStudent }) {
  return (
    <>
      <div className='card-box'>
        <table>
          <thead>
            <tr>
              <tr>Id</tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(function (student, index) {
              return (
                <StudentInfo
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  email={student.email}
                  phone={student.phone}
                  dob={student.dob}
                  deleteStudent={deleteStudent}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
