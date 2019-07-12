import React from 'react'
//import PropTypes from 'prop-types'

const cardClick = (e) => {
  e.preventDefault();
  console.log(e)
  alert('clicked');
}

const categoryIcon = (category) => {
  var upperCaseCat = category.toUpperCase();
  console.log(upperCaseCat);
  switch (upperCaseCat) {
    case "MUSIC":
      return <i className="fas fa-music fa-fw"></i>;
    case "MOVIE":
      return <i className="fas fa-film fa-fw"></i>;
    case "SHOW":
      return <i className="fas fa-tv fa-fw"></i>;
    case "BOOK":
      return <i className="fas fa-book fa-fw"></i>;
    case "AUTHOR":
      return <i className="fas fa-male fa-fw"></i>;
    case "GAME":
      return <i className="fas fa-gamepad fa-fw"></i>;
    default:
      return <b>No Category</b>;
  }
}

const Taste = ({ taste }) => (
  <div className={"card mx-1 mt-1 " + (taste.Type)} key={taste.id} onClick={cardClick}>
    <div className="card-body">
      <h4 className="card-title text-center">{taste.Name}</h4>
      <div className="card-text">
        <div className="icon text-center">{categoryIcon(taste.Type)}</div>
        {/*<p>{taste.wTeaser}</p>
             <a href={taste.wUrl}>{taste.wUrl}</a> */}
      </div>
    </div>
  </div>
)

export default Taste
