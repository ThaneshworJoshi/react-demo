import React, { Component } from 'react';
import StudentList from './components/StudentList';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

let studentsList = [
  {
    id: '1',
    name: 'React',
    email: 'react@gmail.com',
    phone: '83993939',
    dob: '1996-3-3',
  },
  {
    id: '2',
    name: 'Node',
    email: 'node@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
  {
    id: '3',
    name: 'python',
    email: 'python@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
  {
    id: '4',
    name: 'php',
    email: 'php@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
  {
    id: '5',
    name: 'c++',
    email: 'c++@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
  {
    id: '6',
    name: 'React',
    email: 'c@gmail.com',
    phone: '83993939',
    dob: '1990-5-3',
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: studentsList,
      search: '',
    };
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleClick = () => {
    let name = this.state.search;

    let filteredStudent = this.state.students.filter((student) => {
      if (name === student.name) {
        return true;
      }
    });

    this.setState({ students: filteredStudent });
  };

  deleteStudent = (id) => {
    let updatedStudent = this.state.students.filter((student) => {
      return student.id !== id;
    });

    this.setState({ students: updatedStudent });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className='wrapper'>
            <div className='container'>
              <div className='card'>
                <Header title='Student List' />
                <SearchBar
                  handleChange={this.handleChange}
                  search={this.state.search}
                  handleClick={this.handleClick}
                />
                <StudentList
                  students={this.state.students}
                  deleteStudent={this.deleteStudent}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
