import React, { useState, useEffect } from 'react';

const Child = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [idNum, setIdNum] = useState('');
  const [lt, setLt] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [children, setChildren] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

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
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return response.text().then(text => { throw new Error(text) });
    })
    .then(data => {
      setSuccess(true);
      // Очистить поля формы
      setUsername('');
      setPassword('');
      setAddress('');
      setIdNum('');
      setLt('');
      // Вывести сообщение об успехе
    })
    .catch(error => {
      setError('Ошибка при регистрации: ' + error.message);
    });
  };


  useEffect(() => {
    // Функция для получения данных о детях
    const fetchChildren = async () => {
      try {
        const response = await fetch('https://bustracker-2mpj.onrender.com/showStudents/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setChildren(data); // Сохраняем полученные данные в стейте
      } catch (error) {
        setError('Ошибка при получении данных: ' + error.message);
      }
    };

    fetchChildren(); // Вызываем функцию при монтировании компонента
  }, []);

  return (
    <div>
      {success && <div>Ребенок успешно зарегистрирован!</div>}
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
          Адрес:
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Номер удостоверения личности:
          <input
            type="text"
            value={idNum}
            onChange={e => setIdNum(e.target.value)}
            required
          />
        </label>
        <label>
          Личный номер:
          <input
            type="text"
            value={lt}
            onChange={e => setLt(e.target.value)}
            required
          />
        </label>
        <button type="submit">Зарегистрировать ребенка</button>
      </form>
      <div>
        {children.length > 0 ? (
          <ul>
            {children.map((child, index) => (
              <li key={index}>
                Имя пользователя: {child.full_name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Загрузка данных о детях...</p>
        )}
      </div>
    </div>
  );
};

export default Child;