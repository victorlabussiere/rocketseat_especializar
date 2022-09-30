import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../../assets/Layout/Card/Card';
import './home.css'

function App() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({
    nome: '',
    avatar: '',
  })

  function handleStudent() {
    const newStudent = {
      nome: studentName,
      hora: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents(prevState => [...prevState, newStudent]);
  }


  useEffect(() => {
    fetch('https://api.github.com/users/victorlabussiere')
      .then(res => res.json())
      .then(data => {
        setUser({
          nome: data.name,
          avatar: data.avatar_url
        })
      })
      .catch(err => console.error(err.messasge))
  }, [])

  return (
    <div className='home-container'>
      <div className='vasco'>
        <strong>{user.nome}</strong>
        <img src={user.avatar} alt="foto perfil" />
      </div>
      <h1>
        Lista de Presença:
      </h1>
      <input
        type="text"
        name="nome"
        id="nome"
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleStudent}>Registrar aluno</button>

      {students.map(student => <Card nome={student.nome} hora={student.hora} />)}
    </div>
  )
}

export default App