import React, { Component } from 'react'
import { ProductsContextProvider } from './Global/ProductsContext'
import { Home } from './Components/Home'
import { BrowserRouter, Switch, Route,Routes } from 'react-router-dom'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import { NotFound } from './Components/NotFound'
import { auth, db } from './Config/Config'
import { CartContextProvider } from './Global/CartContext'
import { Cart } from './Components/Cart'
import { AddProducts } from './Components/AddProducts'
import { Cashout } from './Components/Cashout'
import Navbar from './Components/Nav'
import About from './Pages/About'
import Footer from './Pages/Footer'
import ContactForm from './Pages/Contact'
import "@fortawesome/fontawesome-free/css/all.min.css";


export class App extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Name
                    })
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })

    }

    render() {
        return (
            <>
            <ProductsContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Navbar/>
                        
                        <Switch>
                          
                            <Route exact path='/' component={() => <Home user={this.state.user} />} />
                            
                            <Route path="/signup" component={Signup}></Route>
                            
                            <Route path="/login" component={Login} />
                            
                            <Route path="/cartproducts" component={() => <Cart user={this.state.user} />} />
                           
                            <Route path="/addbillunit" component={AddProducts} />
                            
                            <Route path='/cashout' component={() => <Cashout user={this.state.user} />} />
                            <Route path='/aboutus' component={() => <About/>} />
                            <Route path='/contactus' component={() => <ContactForm/>} />
                            <Route component={NotFound} />
                            
                        </Switch>
                    </BrowserRouter>
                </CartContextProvider>
            </ProductsContextProvider>
                    <Footer/>
            </>
        )
    }
}

export default App
