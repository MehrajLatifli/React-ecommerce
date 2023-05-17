import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import {changeCategory } from '../stores/categorySlice';
import { setSelectedValue } from '../stores/categorySlice';




const Category = () => {
    
    const dispatch = useDispatch();

    const handleChange = (event) => {
      const selectedValue = event.target.value;
      dispatch(setSelectedValue(selectedValue));
    };

  return (

    <select id="categorySelect" onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
      </select>

      

  )
}

export default Category;