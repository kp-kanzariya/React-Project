import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardComp({ searchTerm }) {
  const [cards, setCards] = useState([]);
  // const { id } = useParams();
  const filteredCards = cards.filter((card) =>
    card.maintitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:5010/cards")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  // console.log(cards[0].main_title)

  return (
    <div>
      <div className="container mt-4">
        {/* console.log(cards[0].card1.main_title) */}
        {filteredCards.length > 0 ? (
          filteredCards.map((v) => (
            // {cards.map((v) => (
            <>
              <div className="card d-flex flex-column flex-md-row  p-3 position-relative">
                <div className="image-wrapper position-relative">
                  <a href="/imggrid" target="_blank" rel="noopener noreferrer">
                    {console.log(v.src)}
                    <img src={v.src} className="newimg" alt={v.alt} />
                  </a>
                </div>

                <div className="flex-grow-1 ms-3">
                  <div className="d-flex align-items-start">
                    <a
                      href={`/imggrid/${v.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h5 className="card-title me-2">{v.maintitle}</h5>
                    </a>
                    <span className="rating-badge">
                      <i className="fas fa-thumbs-up"></i>
                    </span>
                    <span className="rating-badge">
                      <i className="fas fa-coffee"></i>
                    </span>
                  </div>

                  <div className="card-subtitle mb-2 text-muted">
                    <a href="#" className="text-decoration-none">
                      Curtorim
                    </a>{" "}
                    ·{" "}
                    <a href="#" className="text-decoration-none">
                      Show on map
                    </a>
                  </div>

                  <p className="mb-1">
                    <strong>{v.room_type}</strong>
                    <br />
                    {v.bed_type}
                  </p>
                  <p className="text-danger">{v.availability}</p>
                </div>
                <div className="d-flex flex-md-column flex-row justify-content-between text-end">
                  <div>
                    <p className=" btn btn-info">Very good</p>
                    <span className="review-score ">{v.review_score}</span>
                    <p className="text-muted">{v.reviews}reviews</p>
                  </div>
                  <div className="price-info text-warning mx-2 ">
                    {v.price}
                    <br />
                    <span className="text-muted">+ {v.additional_charges}</span>
                  </div>
                  <a href="#" className="btn btn-primary mt-2 h-25">
                    See availability
                  </a>
                </div>
              </div>
            </>
          ))
        ) : (
          <p>No results found for "{searchTerm}".</p>
        )}

        {/* <div class="card d-flex flex-column flex-md-row p-3 my-2 position-relative">
          <div class="image-wrapper position-relative">
            <img src={i2} className="newimg" />
          </div>

          <div class="flex-grow-1 ms-3">
            <div class="d-flex align-items-start">
              <h5 class="card-title me-2">Nirvana Hill Resort</h5>
              <span class="rating-badge">
                <i class="fas fa-thumbs-up"></i>
              </span>
              <span class="rating-badge">
                <i class="fas fa-coffee"></i>
              </span>
            </div>

            <div class="card-subtitle mb-2 text-muted">
              <a href="#" class="text-decoration-none">
                Curtorim
              </a>{" "}
              ·{" "}
              <a href="#" class="text-decoration-none">
                Show on map
              </a>
            </div>

            <p class="mb-1">
              <strong>Lake View Stone Cottage</strong>
              <br />1 extra-large double bed
            </p>
            <p class="text-danger">
              Only 3 rooms left at this price on our site
            </p>
          </div>

          <div class="d-flex flex-md-column flex-row justify-content-between text-end">
            <div>
              <p class=" btn btn-info">Very good</p>
              <span class="review-score ">8.4</span>
              <p class="text-muted  ">114 reviews</p>
            </div>
            <div class="price-info text-warning m-2">
              ₹ 5,100
              <br />
              <span class="text-muted">+ ₹ 612 taxes and charges</span>
            </div>
            <a href="#" class="btn btn-primary mt-2 h-25">
              See availability
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CardComp;
