import React, { useState } from 'react';

const ParentRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [childId, setChildId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://bustracker-2mpj.onrender.com/register/parent/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        phone_number: phoneNumber,
        child_id: childId
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.text().then(text => { throw new Error(text) });
    })
    .then(data => {
      setSuccess(true);
      setUsername('');
      setPassword('');
      setPhoneNumber('');
      setChildId('');
      // Вывести сообщение об успехе или выполнить дальнейшие действия
    })
    .catch(error => {
      setError('Ошибка при регистрации: ' + error.message);
    });
  };

  return (
    <div>
      {success && <div>Регистрация прошла успешно!</div>}
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Имя пользователя:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Номер телефона:
          <input
            type="tel"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          ID ребенка:
          <input
            type="text"
            value={childId}
            onChange={e => setChildId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Зарегистрировать</button>
      </form>
    </div>
  );
};

export default ParentRegistration;
