
// GPayPage.js
import React from 'react';

const GPayPage = () => {
  return (
    <div style={styles.container}>
      <h1>Google Pay</h1>
      <p>Experience the simple, secure way to pay with Google Pay.</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Pay_Logo.svg"
        alt="Google Pay Logo"
        style={styles.logo}
      />
      <button style={styles.button}>Get Started with Google Pay</button>
      <p>Pay with your phone and simplify your transactions.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  logo: {
    width: '200px',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default GPayPage;
