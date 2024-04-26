import React, { useState, useEffect } from 'react';

function ChildList() {
  const [childrenData, setChildrenData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await fetch(
          "https://bustracker-2mpj.onrender.com/showStudents/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.students);
        setChildrenData(data.students);
      } catch (error) {
        setError("Ошибка при получении данных: " + error.message);
      }
    };

    fetchChildren();
  }, []);

  const handleDelete = async (childId) => {
    try {
      const response = await fetch(
        `https://bustracker-2mpj.onrender.com/showStudents/${childId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setChildrenData(childrenData.filter((child) => child._id !== childId));
    } catch (error) {
      setError("Ошибка при удалении: " + error.message);
    }
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {childrenData.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Номер удостоверения личности</th>
              <th scope="col">Адрес</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {childrenData.map((child) => (
              <tr key={child._id}>
                <td>{child.full_name}</td>
                <td>{child.id_num}</td>
                <td>{child.address}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(child._id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Загрузка данных о детях...</p>
      )}
    </>
  );
}

export default ChildList;
