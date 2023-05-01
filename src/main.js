import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import StartPage from './startScreen.js';
import Login from './login.js';
import LoginPage from './loginPage.js';
// import SignUpPage from './signUp';
// import Router from '../components/router';
// import MainFeed from './mainFeed';
// import NavBar from '../components/NavBar';
// import MainFeedReviewForm from '../components/mainFeedReviewForm';
// import ButtonCancle from '../components/ButtonCancle';
// import FollowerFollowing from '../components/FollowerFollowing';
import './index.css';


const App = () => {
  return <LoginPage/>;
};

createRoot(document.getElementById('root')).render(<App />);
