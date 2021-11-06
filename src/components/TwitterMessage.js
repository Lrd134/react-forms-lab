import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: "",
      remainingChars: props.maxChars
    };
  }

  handleChange = eventInfo => {
    this.setState({
      [eventInfo.target.name]: eventInfo.target.value,
      remainingChars: this.state.maxChars - eventInfo.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.state.remainingChars} are left of the maximum.</p>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
