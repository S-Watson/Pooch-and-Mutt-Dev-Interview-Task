import React, { useState } from 'react';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';

function NewsletterSubscription() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('isChecked', isChecked);
    if (!email) {
      setMessage('Please enter an email address.');
      setMessageType('error');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }
    if (!isChecked) {
      setMessage('You must agree to the Terms & Conditions.');
      setMessageType('error');
      return;
    }

    setMessage('Thank you for subscribing!');
    setMessageType('success');
    setEmail('');
    setIsChecked(false);
  };

  return (
    <div className="md:pt-8 pt-7">
      <div className="bg-surface-secondary p-6 rounded-md">
        <h3 className="mb-6">Join our mailing list</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            label="Email Address"
            value={email}
            onChange={handleEmailChange}
            placeholder="johndoe@email.com"
            className="mb-4"
          />
          <Button type="submit" variant="secondary" className="mt-8">Submit</Button>
          <div className="flex items-start mt-5">
            <Checkbox
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
              label="I agree to the Terms & Conditions"
              className="mt-4"
            />
          </div>
          {message && (
            <p className={`mt-4 text-p2 ${messageType === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default NewsletterSubscription;
