import React, { Component } from 'react';
import './App.css';
import profileImage from './by.jpg';

let studentsList = [
  {
    name: 'React',
    email: 'react@gmail.com',
    phone: '83993939',
    dob: '1996-3-3',
  },
  {
    name: 'Node',
    email: 'node@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
  {
    name: 'python',
    email: 'python@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
  {
    name: 'php',
    email: 'php@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
  {
    name: 'c++',
    email: 'c++@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
  {
    name: 'c',
    email: 'c@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
];

function Header({ title }) {
  return (
    <div className='card-header'>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
        consectetur animi sunt. Sint odit at laudantium exercitationem ad
        numquam vitae sapiente quidem! Minus tempore, harum eligendi ad ipsum
        sequi iusto!
      </p>
    </div>
  );
}

function SearchBar(props) {
  return (
    <div className='card-search'>
      <div className='card-search-box'>
        <div className='card-search-input'>
          <input
            type='text'
            name='search'
            id='search-box'
            placeholder='Search'
          />
        </div>
        <button>
          <i className='bi bi-search'></i>
        </button>
      </div>
    </div>
  );
}

function StudentList(props) {
  return (
    <>
      <div className='card-box'>
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>

          {props.children}
        </table>
      </div>
    </>
  );
}

function StudentInfo({ name, phone, email, dob }) {
  return (
    <tr>
      <td className='img-box'>
        <img src={profileImage} alt='' />
      </td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{dob}</td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: studentsList,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className='wrapper'>
            <div className='container'>
              <div className='card'>
                <Header title='Student List' />

                <SearchBar />

                <StudentList>
                  {this.state.students.map(function (student, index) {
                    return (
                      <StudentInfo
                        name={student.name}
                        phone={student.phone}
                        email={student.email}
                        dob={student.dob}
                      />
                    );
                  })}
                </StudentList>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
