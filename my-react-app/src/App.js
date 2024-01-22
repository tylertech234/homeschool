import React from 'react';
import './App.css';
import { useMsal } from '@azure/msal-react';

function SignInButton() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().catch(e => {
      console.error(e);
    });
  };

  return <button onClick={handleLogin}>Sign In</button>;
}

function SignOutButton() {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutPopup().catch(e => {
      console.error(e);
    });
  };

  return <button onClick={handleLogout}>Sign Out</button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignInButton />
        <SignOutButton />
        {/* Rest of your app components */}
      </header>
    </div>
  );
}

export default App;
