import React, { useState } from 'react';

const MessageCompose = ({ onSendMessage }) => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipient || !subject || !body) {
      alert('Please fill in all fields: Recipient, Subject, and Body.');
      return;
    }
    const newMessage = {
      recipient,
      subject,
      body,
      // sender would typically be the logged-in user, added by the backend or auth context
      // timestamp would be added upon sending
    };
    if (onSendMessage) {
      onSendMessage(newMessage);
    }
    console.log('Sending message:', newMessage);
    // Clear form
    setRecipient('');
    setSubject('');
    setBody('');
    alert('Message sending functionality not yet implemented. Check console.');
  };

  return (
    <form onSubmit={handleSubmit} className="message-compose-form" style={{ border: '1px solid #eee', padding: '15px', marginTop: '20px' }}>
      <h3>Compose New Message</h3>
      <div>
        <label htmlFor="recipient">To:</label>
        <input
          type="text" // Could be an email or a user selector
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient (e.g., patient ID or email)"
          required
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="body">Message:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default MessageCompose; 