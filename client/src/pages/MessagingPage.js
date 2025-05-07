import React, { useState, useEffect } from 'react';
import MessageList from '../components/Messaging/MessageList';
import MessageCompose from '../components/Messaging/MessageCompose';

const MessagingPage = () => {
  // Mock logged-in user (this would come from auth context in a real app)
  const currentUser = { id: 'user123', name: 'Dr. Emily Carter', role: 'doctor' };

  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null); // For future use: view specific threads

  // Mock initial messages load
  useEffect(() => {
    // Simulate fetching messages for the current user
    const mockMessages = [
      {
        id: 'msg1',
        sender: 'Patient John Smith',
        recipient: currentUser.name,
        subject: 'Question about medication',
        body: 'Hello Dr. Carter, I have a quick question about the side effects of my new medication.',
        timestamp: '2023-10-26T10:00:00Z',
        read: false,
      },
      {
        id: 'msg2',
        sender: currentUser.name,
        recipient: 'Nurse Michael B.',
        subject: 'Patient Follow-up',
        body: 'Michael, please schedule a follow-up for Jane Doe next week.',
        timestamp: '2023-10-25T15:30:00Z',
        read: true,
      },
      {
        id: 'msg3',
        sender: 'Admin Support',
        recipient: currentUser.name,
        subject: 'System Update Notification',
        body: 'Please be advised of a scheduled system update this Saturday at 2 AM.',
        timestamp: '2023-10-25T09:00:00Z',
        read: true,
      },
    ];
    setMessages(mockMessages);
  }, [currentUser.name]);

  const handleSendMessage = (newMessage) => {
    const messageWithSender = {
      ...newMessage,
      id: `msg${Date.now()}`,
      sender: currentUser.name,
      timestamp: new Date().toISOString(),
      read: false, // For recipient
    };
    setMessages(prevMessages => [messageWithSender, ...prevMessages]);
    // In a real app, this would also involve an API call
    console.log('New message sent (locally):', messageWithSender);
  };

  return (
    <div className="messaging-page" style={{ padding: '20px' }}>
      <h1>Messaging Center</h1>
      {/* Future: Add tabs for Inbox, Sent, Drafts, etc. */}
      {/* Future: Add contact list or conversation threads sidebar */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <MessageList messages={messages} />
        </div>
        <div style={{ flex: 1 }}>
          <MessageCompose onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default MessagingPage; 