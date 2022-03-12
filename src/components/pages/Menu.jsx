import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MenuItem from '../layout/MenuItem';

export default function Menu() {
    const [foods, setFoods] = useState([]);
    

    const url = 'https://ig-food-menus.herokuapp.com/our-foods'

    useEffect(() => {
        const response = axios.get(url)
        .then(response => {
           console.log(response.data)
           setFoods(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    const foodItems = foods.map(food => {
        return (
    
            <MenuItem 
                key = {food.id}
                img = {food.img}
                name = {food.name}
                price = {food.price}
                rate = {food.rate}
                country = {food.country}
            />
            
        )
    })
  
    return (
    <div className='menu'>
        <div className="menu--title">
            <div className="menu--list">
                {foodItems.length ? foodItems : <div className='menu--pic--div'><img className='menu--pic' src='http://4.bp.blogspot.com/-BjF9U7VitCY/Uhc4ipgeb2I/AAAAAAAABZE/pk8xn0CAxnE/s1600/Gizdodo+dodo+gizzard+1.jpg' alt='' /> </div>}
            </div>

        </div>

    </div>
  )
}
