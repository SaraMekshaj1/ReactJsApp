import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './CardStyle.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

export const Bird = () => {
  const [birds, setBirds] = useState([]);
  const [selectedBird, setSelectedBird] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchBirds = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/birds");
      const data = await response.json();
      setBirds(data);
    } catch (error) {
      console.error("Error fetching birds:", error);
    }
  };

  useEffect(() => {
    fetchBirds();
  }, []);

  const handleCardClick = (bird) => {
    setSelectedBird(bird);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //search by name
  const filteredBirds = birds.filter(bird =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const closeModal = () => {
    setSelectedBird(null);
  };

  return (
    <div className="container">
       <div className="search-bar">
        <input
          type="text"
          placeholder="Search by bird's name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredBirds.map((bird) => (
        <div className="card_item" key={bird.id} onClick={() => handleCardClick(bird)}>
          <div className="card_inner">
            <img className="card-image" src={bird.image} alt={bird.name} />
            <div className="name">Name: {bird.name}</div>
            <div className="origin">Origin: {bird.place_of_found}</div>
          </div>
        </div>
      ))}

      {selectedBird && (
        <Modal
          isOpen={!!selectedBird}
          onRequestClose={closeModal}
          contentLabel="Bird Details"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="card_detail">
            <img className="card-image" src={selectedBird.image} alt={selectedBird.name} />
            <div className="name">Name: {selectedBird.name}</div>
            <div className="species">Species: {selectedBird.species}</div>
            <div className="family">Family: {selectedBird.family}</div>
            <div className="habitat">Habitat: {selectedBird.habitat}</div>
            <div className="origin">Origin: {selectedBird.place_of_found}</div>
            <div className="diet">Diet: {selectedBird.diet}</div>
            <div className="wingspan">Wingspan: {selectedBird.wingspan_cm} cm</div>
            <div className="weight">Weight: {selectedBird.weight_kg} kg</div>
            <div className="description">Description: {selectedBird.description}</div>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};
