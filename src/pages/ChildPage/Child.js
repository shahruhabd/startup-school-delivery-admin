import React, { useState } from "react";
import ChildRegistrationForm from "../../components/child/ChildRegistrationForm";
import ChildList from "../../components/child/ChildList";

const Child = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = () => {
    setSuccess(true);
    setIsModalOpen(false);
  };

  const handleError = (message) => {
    setError(message);
    setIsModalOpen(false);
  };

  const openModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <h1 className="my-2">Ученики</h1>
      <button className="btn btn-primary my-3" onClick={openModal}>
        Добавить ученика
      </button>
        {success && <div className="alert alert-success" role="alert">Ребенок успешно зарегистрирован!</div>}
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {isModalOpen && (
          <ChildRegistrationForm onSuccess={handleSuccess} onError={handleError} />
        )}
      <div className="my-3">
        <ChildList />
      </div>
    </>
  );
};

export default Child;
