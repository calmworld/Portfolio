import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <h1>hello</h1>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mgeppewq"
          method="POST"
        >
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input type="email" name="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
          </div>



          <label>Message:</label>
          <input type="text" name="message" />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }
}

