
import fs from 'fs';
import cheerio from 'cheerio';

fs.readFile('src/index.html', 'utf8', (readError, markup) => {
    if (readError) {
        return console.log(readError);
    }

    const $ = cheerio.load(markup);

    // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
    $('head').append('<link rel="stylesheet" href="/styles.css">');

    fs.writeFile('dist/index.html', $.html(), 'utf8', (writeError) => {
        if (writeError) {
            return console.log(writeError);
        }
        console.log('index.html written to /dist'.green);

        return writeError;
    });

    return readError;
});