import React from 'react';

const MessageList = ({ messages }) => {
  if (!messages || messages.length === 0) {
    return <p>No messages to display.</p>;
  }

  // Sort messages by timestamp, assuming 'timestamp' is a Date object or sortable string
  const sortedMessages = [...messages].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return (
    <div className="message-list" style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
      <h3>Messages</h3>
      {sortedMessages.map((msg) => (
        <div key={msg.id} style={{ borderBottom: '1px solid #eee', padding: '10px 0', marginBottom: '5px' }}>
          <p>
            <strong>From:</strong> {msg.sender}
            <span style={{ float: 'right', fontSize: '0.9em', color: '#666' }}>
              {new Date(msg.timestamp).toLocaleString()}
            </span>
          </p>
          <p><strong>To:</strong> {msg.recipient}</p>
          <p><strong>Subject:</strong> {msg.subject}</p>
          <p>{msg.body}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
