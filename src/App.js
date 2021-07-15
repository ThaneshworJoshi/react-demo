import React, { Component } from 'react';
import './App.css';
import profileImage from './by.jpg';

function Header(props) {
  return (
    <div className='card-header'>
      <h2>{props.title}</h2>
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

  

  render() {
    return (
      <React.Fragment>
        <div>
          <div className='wrapper'>
            <div className='container'>
              <div className='card'>
                <Header title='Studnets List' />

                <SearchBar />

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
                    <StudentInfo
                      name='Ram'
                      phone='9283982398'
                      email='a@gmail.com'
                      dob='2020-1-1'
                    />
                    <StudentInfo
                      name='Shyam'
                      phone='9283982398'
                      email='s@gmail.com'
                      dob='2020-1-1'
                    />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
