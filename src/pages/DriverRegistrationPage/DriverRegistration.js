import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Убедитесь, что Bootstrap подключен

const DriverRegistration = () => {
  const [username, setUsername] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://bustracker-2mpj.onrender.com/register/driver', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        phone_number,
        password
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка регистрации');
    })
    .then(data => {
      setSuccess(true);
      setUsername('');
      setPhoneNumber('');
      setPassword('');
    })
    .catch(error => {
      setError('Ошибка при регистрации: ' + error.message);
    });
  };

  return (
    <>
      <h1 className="my-2">Водители</h1>
      {success && <div className="alert alert-success">Регистрация прошла успешно!</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="form-group mb-3">
          <label>Имя пользователя:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Номер телефона:</label>
          <input
            type="text"
            className="form-control"
            value={phone_number}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Пароль:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрировать</button>
      </form>
    </>
  );
};

export default DriverRegistration;
