import React, { useState } from 'react'
import './Characters.css'

const characters = [
  {
    name: 'Eleven',
    power: 'Telekinesis, Mind Control',
    quote: 'Friends don’t lie.',
    image: '/images/eleven.jpg',
  },
  {
    name: 'Mike Wheeler',
    power: 'Leadership Buff, Emotional Anchor',
    quote: 'I love her.',
    image: '/images/mike.jpg',
  },
  {
    name: 'Dustin Henderson',
    power: 'Intelligence, Comic Relief',
    quote: 'Never tell me the odds.',
    image: '/images/dustin.jpg',
  },
  {
    name: 'Lucas Sinclair',
    power: 'Tactical Thinking, Precision',
    quote: 'We need a plan.',
    image: '/images/lucas.jpg',
  },
  {
    name: 'Max Mayfield',
    power: 'Speed, Mind Resistance',
    quote: 'I’m not scared.',
    image: '/images/max.jpg',
  },
  {
    name: 'Will Byers',
    power: 'Dimension Sensitivity',
    quote: 'He’s still here.',
    image: '/images/will.jpg',
  },
  {
    name: 'Steve Harrington',
    power: 'Mom Power – Team Protector',
    quote: 'I may be dumb, but I’m not stupid.',
    image: '/images/steve.jpg',
  },
  {
    name: 'Nancy Wheeler',
    power: 'Monster Hunter, Investigation',
    quote: 'We won’t do nothing.',
    image: '/images/nancy.jpg',
  },
  {
    name: 'Robin Buckley',
    power: 'Code Breaking, Languages',
    quote: 'I speak four languages.',
    image: '/images/robin.jpg',
  },
  {
    name: 'Eddie Munson',
    power: 'Metal Courage Buff',
    quote: 'This is music.',
    image: '/images/eddie.jpg',
  },
  {
    name: 'Jim Hopper',
    power: 'Strength, Authority',
    quote: 'Keep the door open three inches.',
    image: '/images/hopper.jpg',
  },
  {
    name: 'Erica Sinclair',
    power: 'Sass, Negotiation Genius',
    quote: 'You can’t spell America without Erica.',
    image: '/images/erica.jpg',
  },
  {
    name: 'Joyce Byers',
    power: 'Maternal Instinct, Fearless',
    quote: 'I know my boy.',
    image: '/images/joyce.jpg',
  },
  {
    name: 'Holly Wheeler',
    power: 'Innocent Sensor, Psychic Sensitivity',
    quote: 'Mommy?',
    image: '/images/holly.jpg',
  },
]

const Characters = () => {
  const [selected, setSelected] = useState(null)
  const [flipped, setFlipped] = useState(false)

  const openCharacter = (char) => {
    setSelected(char)
    setFlipped(false)
  }

  const closeModal = () => {
    setSelected(null)
    setFlipped(false)
  }

  const toggleFlip = () => {
    setFlipped((prev) => !prev)
  }

  return (
    <section className="characters">
      <h2 className="characters-title">Meet the Characters of Hawkins</h2>
      <div className="character-grid">
        {characters.map((char) => (
          <div
            key={char.name}
            className="character-card"
            onClick={() => openCharacter(char)}
          >
            <div className="card-thumb">
              {char.image && (
                <img 
                  src={char.image} 
                  alt={char.name} 
                  className="card-thumb-image"
                  onError={(e) => {
                    console.error(`Failed to load image: ${char.image} for ${char.name}`)
                    e.target.style.display = 'none'
                  }}
                />
              )}
              <div className="card-thumb-gradient" />
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="character-modal-overlay" onClick={closeModal}>
          <div className="character-modal" onClick={(e) => e.stopPropagation()}>
            <div
              className={`modal-card-inner ${flipped ? 'is-flipped' : ''}`}
              onClick={toggleFlip}
            >
              <div className="modal-card-face modal-front">
                {selected.image && (
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="modal-card-image"
                  />
                )}
                <div className="modal-front-text">
                  <h3>{selected.name}</h3>
                  <p className="modal-tagline">{selected.power}</p>
                  <p className="modal-hint">Tap to flip and reveal powers & quote</p>
                </div>
              </div>

              <div className="modal-card-face modal-back">
                <h3>{selected.name}</h3>
                <p className="power">{selected.power}</p>
                <p className="quote">“{selected.quote}”</p>
              </div>
            </div>

            <button className="modal-close" type="button" onClick={closeModal}>
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Characters


