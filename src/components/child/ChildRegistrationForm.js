import React, { useState } from 'react';

const ChildRegistrationForm = ({ onSuccess, onError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [idNum, setIdNum] = useState('');
  const [lt, setLt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      onError('Пароль должен быть не менее 8 символов и содержать буквы и цифры.');
      return;
    }

    fetch('https://bustracker-2mpj.onrender.com/register/child/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        address,
        id_num: idNum,
        lt
      })
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.text().then((text) => { throw new Error(text) });
    })
    .then(data => {
      onSuccess();
      setUsername('');
      setPassword('');
      setAddress('');
      setIdNum('');
      setLt('');
    })
    .catch(error => {
      onError('Ошибка при регистрации: ' + error.message);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex gap-2 flex-column">
      <div className="form-group">
        <label htmlFor="username">Имя:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}"
          title="Пароль должен содержать минимум 8 символов, включая буквы и цифры."
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Адрес:</label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="idNum">Номер удостоверения личности:</label>
        <input
          type="text"
          className="form-control"
          id="idNum"
          value={idNum}
          onChange={(e) => setIdNum(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
};

export default ChildRegistrationForm;
