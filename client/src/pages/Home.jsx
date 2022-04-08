import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import SearchBar from '../components/SearchProducts/SearchBar'
import Slider from '../components/Slider'
import { updateUser } from "../requestMethods"

const Home = () => {

  const user = useSelector(state => state.user.currentUser);

  useEffect(() => {
    user && updateUser();
  }, [user])

    return (
        <div>
          <Navbar/>
          <Announcement/>
          <SearchBar/>
          <Slider/>
          <Categories/>
          <Products/>
          <NewsLetter/>
          <Footer/>
        </div>
    )
}

export default Home