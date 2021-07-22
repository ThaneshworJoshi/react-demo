import profileImage from '../by.jpg';

function StudentInfo({ id, name, phone, email, dob, deleteStudent }) {
  const handleDelete = (event) => {
    deleteStudent(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td className='img-box'>{<img src={profileImage} alt='' />}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{dob}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default StudentInfo;
