import React from 'react';
import SearchedPage from '../page/SearchedPage';
import { Navigate } from 'react-router-dom';

const SearchedRoute = ({ matchedList }) => {
	console.log('Matched Item id is? ', matchedList);
	return matchedList === true ? <SearchedPage /> : <Navigate to='/signup' />;
};

export default SearchedRoute;
