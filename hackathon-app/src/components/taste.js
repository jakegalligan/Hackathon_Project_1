import React, { Component } from "react";

class Taste extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopUp: false
    }
    this.togglePopUp = this.togglePopUp.bind(this);
  }

  togglePopUp() {
    this.setState({
      showPopUp: !this.state.showPopUp
    })
  }


  categoryIcon(category) {
    var upperCaseCat = category.toUpperCase();
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


  render() {
    return (

      <div className={"card mx-1 mt-1 " + (this.props.taste.Type)} key={this.props.taste.id} onClick={this.togglePopUp} >
        <div className="card-body">
          <h4 className="card-title text-center">{this.props.taste.Name}</h4>
          <div className="card-text">
            <div className="icon text-center">{this.categoryIcon(this.props.taste.Type)}</div>

            {this.state.showPopUp ? <div className='popup'>
              <div className='popup_inner'>
                <h1 className='popupHead'>{this.props.taste.Name}</h1>
                <p className='popupInfo'>{this.props.taste.wTeaser}</p>
                <iframe src={this.props.taste.yUrl} width="400" height="300"></iframe>
                <button onClick={this.togglePopUp} >close me</button>
              </div>
            </div> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default Taste