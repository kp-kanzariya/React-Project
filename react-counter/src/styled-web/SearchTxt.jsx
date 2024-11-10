import React, { useState } from 'react';

const cardData = {
  "cards": [
    {
      "id": "1",
      "src": "./imgs/img.jpg",
      "alt": "Image of Nirvana Hill Resort",
      "maintitle": "Nirvana Hill Resort",
      "review_score": "8.4",
      "reviews": "114",
      "room_type": "Lake View Stone Cottage",
      "bed_type": "1 extra-large double bed",
      "availability": "Only 3 rooms left at this price on our site",
      "price": "₹ 5,990",
      "additional_charges": "₹ 552 taxes and charges"
    },
    {
      "id": "2",
      "src": "./imgs/i3.jpg",
      "alt": "Image of Nirvana Hill Resort",
      "maintitle": "The Westin Goa, Anjuna",
      "review_score": "8.0",
      "reviews": "111",
      "room_type": "Deluxe Guest Room with 1 King with Bathtub",
      "bed_type": "1 extra-large double bed",
      "availability": "Only 1 rooms left at this price on our site",
      "price": "₹ 5,700",
      "additional_charges": "₹ 602 taxes and charges"
    },
    {
      "id": "3",
      "src": "./imgs/i4.jpg",
      "alt": "Image of Nirvana Hill Resort",
      "maintitle": "Tropical Beach Walk",
      "review_score": "7.9",
      "reviews": "124",
      "room_type": "Deluxe Guest Room with 1 King with Bathtub",
      "bed_type": "2 extra-large double bed",
      "availability": "Only 2 rooms left at this price on our site",
      "price": "₹ 6,300",
      "additional_charges": "₹ 512 taxes and charges"
    }
  ]
};

function CardSearch() {
    const [searchTerm, setSearchTerm] = useState('');

  // Filter cards based on search term (search in maintitle)
  const filteredCards = cardData.cards.filter(card =>
    card.maintitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Hotel Search</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-4"
      />

      <div className="row">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div key={card.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={card.src} className="card-img-top" alt={card.alt} />
                <div className="card-body">
                  <h5 className="card-title">{card.maintitle}</h5>
                  <p className="card-text">{card.room_type}</p>
                  <p className="card-text">
                    <strong>Review Score:</strong> {card.review_score} ({card.reviews} reviews)
                  </p>
                  <p className="card-text text-danger">{card.availability}</p>
                  <p className="card-text text-warning">
                    {card.price}
                    <br />
                    <small className="text-muted">{card.additional_charges}</small>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No results found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
}

export default CardSearch;
