import React, { Component } from 'react';
// import './Modal.css';
class Modal extends Component {
  inputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addMatched = () => {

    this.props.following.push({
      userId: this.state.user._id
    })
    this.props.closeModal();
  }
  render() {
    if (!this.props.modalState) {
      return null;
    }
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.closeModal} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.title}</p>
            <button className="delete" onClick={this.props.closeModal} />
          </header>
          <section className="modal-card-body">
            <div className="content">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Ex. Krabby Patty" name="name" onChange={this.inputUpdate} />
                </div>
                <label className="label">Calories</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Ex. 715.3 cal" name="calories" onChange={this.inputUpdate} />
                </div>
                <label className="label">Image</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Ex. http://someImageURL" name="image" onChange={this.inputUpdate} />
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <a className="button" onClick={this.addMatched}>Submit</a>
          </footer>
        </div>
      </div>
    );
  }
}
export default Modal;