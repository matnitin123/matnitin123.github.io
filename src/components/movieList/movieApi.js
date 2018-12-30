/**
 * Created by matan on 25/12/2018.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import config from '../../common/config';
import * as globalFunction from '../../common/globalFunction';
import * as constants from '../../common/constants';

class movieApi {
    static getMovieInitList(){

        function get(){
            const apiUrl = config.FULL_URL;
            return request('GET', apiUrl);
        }

        function request(method, apiUrl) {
            const fetchArray = [];
            _.forEach(constants.MOVIE_TITLE_ARRAY, (item) => {

                const url = apiUrl+'&t='+item;
                fetchArray.push(fetch(url), {method: 'GET'})

            });



            return new Promise((resolve, reject) => {
                Promise.all(fetchArray)
                    .then(globalFunction.parseJSONArray)
                    .then((results) => {
                    const movieInit = _.map(results, (item) => {
                        if(item.data.Title &&
                            item.data.Year &&
                            item.data.Runtime &&
                            item.data.Genre &&
                            item.data.Director
                        ){
                            return {
                                title: item.data.Title,
                                year: Number(item.data.Year),
                                runtime: item.data.Runtime.replace(" min",""),
                                genre: item.data.Genre,
                                director: item.data.Director,
                            }
                        }
                    });
                    /**
                     * Delete the all
                     * */
                    return resolve(_.filter(movieInit, (item) => {return item}))
                }).catch((err) => {
                    if(err){
                        return reject(err)
                    }
                });

            });
        }
        return get();
    }
}

movieApi.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        api: state.apiReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(movieApi);