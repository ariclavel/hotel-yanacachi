import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import {
  Routes,
  Route
} from "react-router-dom";
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import AuthenticationPage from './pages/AuthenticationPage/Authentication';
import {auth, createUserProfileDocument} from "./Firebase/Firebase.utils";

class App extends React.Component {

  constructor(){
    super();

    this.state= {
      currentUser: null
    }

  }

  unsuscribeFromAuth = null;

  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState( {currentUser: user});

    })
  }
  componentWillUnmount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          })

        }, () => {
          console.log(this.state);
        }
        );
        

      }
      this.setState( {currentUser: userAuth} );

    });

  }

  render(){
    return (
      <div>
        <Header currentUser= {this.state.currentUser} />
        <Routes>   
          <Route exact path = "/" element = {<HomePage />}></Route>
          <Route path = "/book" element = {<ShopPage />}></Route>
          <Route path = "/auth" element = {<AuthenticationPage />}></Route>
        </Routes>
      </div>
    );

  }
  
}

export default App;
