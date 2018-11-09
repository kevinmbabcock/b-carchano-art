import React from 'react';
import ContactForm from './ContactForm';
import ContactVerification from './ContactVerification';
import InstagramLink from './InstagramLink';
import ShippingCost from './ShippingCost';

class ContactControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false
    };
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleExitConfirmation = this.handleExitConfirmation.bind(this);
  }

  handleFormSubmission() {
    this.setState({formSubmitted: true});
  }

  handleExitConfirmation() {
    this.setState({formSubmitted: false});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formSubmitted) {
      currentlyVisibleContent = <ContactVerification onExitConfirmation={this.handleExitConfirmation}/>;
    } else {
      currentlyVisibleContent = <ContactForm onFormSubmission={this.handleFormSubmission}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default ContactControl;
