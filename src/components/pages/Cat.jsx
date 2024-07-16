import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './CardStyle.css';

Modal.setAppElement('#root'); // Set the app element for accessibility

export const Cat = () => {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCats = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/cats");
      const data = await response.json();
      setCats(data);
    } catch (error) {
      console.error("Error fetching cats:", error);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const handleCardClick = (cat) => {
    setSelectedCat(cat);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeModal = () => {
    setSelectedCat(null);
  };

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by cat's name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {filteredCats.map((cat) => (
        <div className="card_item" key={cat.id} onClick={() => handleCardClick(cat)}>
          <div className="card_inner">
            <img className="card-image" src={cat.image} alt={cat.name} />
            <div className="name">Name: {cat.name}</div>
            <div className="origin">Origin: {cat.origin}</div>
          </div>
        </div>
      ))}

      {selectedCat && (
        <Modal
          isOpen={!!selectedCat}
          onRequestClose={closeModal}
          contentLabel="Cat Details"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="card_detail">
            <img className="card-image" src={selectedCat.image} alt={selectedCat.name} />
            <div className="name">Name: {selectedCat.name}</div>
            <div className="origin">Origin: {selectedCat.origin}</div>
            <div className="temperament">Temperament: {selectedCat.temperament}</div>
            <div className="colors">Colors: {selectedCat.colors.join(", ")}</div>
            <div className="description">Description: {selectedCat.description}</div>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </div>
  );
};
