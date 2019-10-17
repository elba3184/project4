import React, { Component } from 'react';
// import './Modal.css';

class Modal extends Component {
  inputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  editUser = () => {

    this.setState({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      imageUrl: this.state.imageUrl,
      bio: this.state.bio,
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
            <p className="modal-card-title">Edit Profile</p>
            <button className="delete" onClick={this.props.closeModal} />
          </header>
          <section className="modal-card-body">
            <div className="content">
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="First Name" name="first_name" onChange={this.inputUpdate} />
                </div>
                <label className="label">Last Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Last Name" name="last_name" onChange={this.inputUpdate} />
                </div>
                <label className="label">Bio</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Biography" name="bio" onChange={this.inputUpdate} />
                </div>
                <label className="label">Image</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Ex. http://someImageURL" name="imageUrl" onChange={this.inputUpdate} />
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <a className="button" onClick={this.editUser()}>Submit</a>
          </footer>
        </div>
      </div>
    );
  }
}
export default Modal;