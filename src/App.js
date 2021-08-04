import React from 'react'
import { Provider } from "react-redux";
import store from './redux/store';
import Navbar from './components/navbar/Navbar'
import './app.css'
import RepoInfo from './components/repoInfo/RepoInfo'
import IssueHeader from './components/issues/IssueHeader'
import Issues from './components/issues/Issues'
import FilterNav from './components/filter/FilterNav';
function App() {
    return (
      <>
        <Navbar />
        <Provider store={store} >
          <RepoInfo />
          {/* <FilterNav/> */}
          <Issues />
        </Provider>
      </>
    );

}

export default App
