import _ from 'lodash';
import async from 'async';

export function parseJSONArray(responses){
    const actionArray = [];
    _.forEach(responses, (response) => {
        if(response.status === 200){
            actionArray.push(
                (cb) => {
                    response.text().then(function(text) {
                        cb(null, {ok: true, data: JSON.parse(text)});
                    });
                }
            );
        }
    });
    return new Promise((resolve, reject) => {
        async.parallel(actionArray, (err, results) => {
            return resolve(results)
        })
    });
}