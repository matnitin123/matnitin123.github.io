import React from 'react';
import { Route, IndexRoute, browserHistory} from 'react-router';
import MovieList from './components/movieList/movieList';


export default <Route path="/" component={MovieList} history={browserHistory}>
                    <IndexRoute component={MovieList}/>
                </Route>;