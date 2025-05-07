import React, { useState } from 'react';

// This is a very basic placeholder for a settings page.
// In a real application, this would be much more complex and likely role-based.

const SettingsPage = () => {
  // Mock settings data
  const [userSettings, setUserSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      inApp: true,
    },
    interfaceTheme: 'light',
    language: 'en-US',
  });

  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    defaultAppointmentSlot: 30, // in minutes
    clinicName: 'Healthcare CRM Clinic',
  });

  // Mock role - this would come from auth context
  const userRole = 'admin'; // or 'doctor', 'staff'

  const handleUserSettingChange = (category, setting, value) => {
    setUserSettings(prev => ({
      ...prev,
      [category]: typeof prev[category] === 'object' && prev[category] !== null 
                  ? { ...prev[category], [setting]: value } 
                  : value, // For direct settings like theme/language
    }));
    console.log('User setting changed (locally):', category, setting, value);
  };

  const handleSystemSettingChange = (setting, value) => {
    setSystemSettings(prev => ({
      ...prev,
      [setting]: value,
    }));
    console.log('System setting changed (locally):', setting, value);
  };

  const saveSettings = () => {
    // In a real app, this would make API calls to save settings to the backend.
    console.log('Saving settings (locally):', { userSettings, systemSettings });
    alert('Settings saved (locally). Check console.');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Application Settings</h1>

      <section style={{ marginBottom: '30px', border: '1px solid #eee', padding: '15px' }}>
        <h2>User Preferences</h2>
        <div>
          <h4>Notifications:</h4>
          <label>
            <input 
              type="checkbox" 
              checked={userSettings.notifications.email}
              onChange={(e) => handleUserSettingChange('notifications', 'email', e.target.checked)} 
            /> Email Notifications
          </label><br />
          <label>
            <input 
              type="checkbox" 
              checked={userSettings.notifications.sms}
              onChange={(e) => handleUserSettingChange('notifications', 'sms', e.target.checked)} 
            /> SMS Notifications
          </label><br />
           <label>
            <input 
              type="checkbox" 
              checked={userSettings.notifications.inApp}
              onChange={(e) => handleUserSettingChange('notifications', 'inApp', e.target.checked)} 
            /> In-App Notifications
          </label>
        </div>
        <div style={{marginTop: '10px'}}>
          <label htmlFor="theme">Interface Theme: </label>
          <select 
            id="theme" 
            value={userSettings.interfaceTheme} 
            onChange={(e) => handleUserSettingChange('interfaceTheme', null, e.target.value)} // direct setting
          >
            <option value="light">Light</option>
            <option value="dark">Dark (UI not implemented)</option>
          </select>
        </div>
      </section>

      {userRole === 'admin' && (
        <section style={{ marginBottom: '30px', border: '1px solid #eee', padding: '15px' }}>
          <h2>System Configuration (Admin)</h2>
          <div>
            <label>
              <input 
                type="checkbox" 
                checked={systemSettings.maintenanceMode}
                onChange={(e) => handleSystemSettingChange('maintenanceMode', e.target.checked)} 
              /> Enable Maintenance Mode
            </label>
          </div>
          <div style={{marginTop: '10px'}}>
            <label htmlFor="clinicName">Clinic Name: </label>
            <input 
              type="text" 
              id="clinicName" 
              value={systemSettings.clinicName} 
              onChange={(e) => handleSystemSettingChange('clinicName', e.target.value)} 
            />
          </div>
          <div style={{marginTop: '10px'}}>
            <label htmlFor="apptSlot">Default Appointment Slot (minutes): </label>
            <input 
              type="number" 
              id="apptSlot" 
              value={systemSettings.defaultAppointmentSlot} 
              onChange={(e) => handleSystemSettingChange('defaultAppointmentSlot', parseInt(e.target.value, 10))} 
            />
          </div>
          {/* Add more admin-specific system settings here */}
        </section>
      )}

      <button onClick={saveSettings}>Save All Settings</button>
    </div>
  );
};

export default SettingsPage; 