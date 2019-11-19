import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      headingText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    // change code below this line
    event.preventDefault();
    this.setState({
      headingText: this.state.input,
    });
    // change code above this line
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }
          <label>
            Ваше Имя: 
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange} 
              />
          </label>
          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
        <h1>{this.state.headingText}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};

const Task = () => {
  return (
    <div>
      <ControlledForm/>
    </div>
  );
};

export default Task;
