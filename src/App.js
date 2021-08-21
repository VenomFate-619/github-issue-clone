import React from 'react'
import { Provider } from "react-redux";
import store from './redux/store';
import Navbar from './components/navbar/Navbar'
import './app.css'
import RepoInfo from './components/repoInfo/RepoInfo'

import Issues from './components/issues/Issues'

import SearchBar from './components/searchBar/SearchBar';
function App() {
    return (
      <>
        <Navbar />
        <Provider store={store} >
          <RepoInfo />
          <SearchBar/>
          <Issues />
        </Provider>
      </>
    );

}

export default App
