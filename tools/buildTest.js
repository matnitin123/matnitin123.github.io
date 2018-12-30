import webpack from 'webpack';
import config from '../webpack.config';

import colors from 'colors';


webpack(config).run((error, stats) => {
    if (error) { // so a fatal error occurred. Stop here.
        console.log(error.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: ');
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log('Your app is compiled in test mode in /dist. It\'s ready to roll!');

    return 0;
});