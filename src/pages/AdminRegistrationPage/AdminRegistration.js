import React, { useState } from 'react';

const AdminRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://bustracker-2mpj.onrender.com/register/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
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
      // Вывести сообщение об успехе или выполнить действие
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
        <button type="submit">Зарегистрировать</button>
      </form>
    </div>
  );
};

export default AdminRegistration;
