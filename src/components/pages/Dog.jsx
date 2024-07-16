import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './CardStyle.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

export const Dog = () => {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchDogs = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/dogs");
      const data = await response.json();
      setDogs(data);
    } catch (error) {
      console.error("Error fetching dogs:", error);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  const handleCardClick = (dog) => {
    setSelectedDog(dog);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
  //search by name
  const filteredDogs = dogs.filter(dog =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeModal = () => {
    setSelectedDog(null);
  };

  return (
    <div className="container">
       <div className="search-bar">
        <input
          type="text"
          placeholder="Search by dog's name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredDogs.map((dog) => (
        <div className="card_item" key={dog.id} onClick={() => handleCardClick(dog)}>
          <div className="card_inner">
            <img className="card-image" src={dog.image} alt={dog.name} />
            <div className="name">Name: {dog.name}</div>
            <div className="origin">Origin: {dog.origin}</div>
          </div>
        </div>
      ))}

      {selectedDog && (
        <Modal
          isOpen={!!selectedDog}
          onRequestClose={closeModal}
          contentLabel="Dog Details"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="card_detail">
            <img className="card-image" src={selectedDog.image} alt={selectedDog.name} />
            <div className="name">Name: {selectedDog.name}</div>
            <div className="breed_group">Breed Group: {selectedDog.breed_group}</div>
            <div className="size">Size: {selectedDog.size}</div>
            <div className="lifespan">Lifespan: {selectedDog.lifespan}</div>
            <div className="origin">Origin: {selectedDog.origin}</div>
            <div className="temperament">Temperament: {selectedDog.temperament}</div>
            <div className="colors">Colors: {selectedDog.colors.join(", ")}</div>
            <div className="description">Description: {selectedDog.description}</div>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};
