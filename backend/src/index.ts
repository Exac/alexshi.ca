import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cheerio from 'cheerio';
import * as rp from 'request-promise';

/**
 * SETTINGS
 */
let options: any = {};
const app: express.Application = express();

/**
 * Models
 */
async function parse() {
    let options = {
        uri: `https://www.realtor.ca/Residential/Single-Family/19697431/2606-660-NOOTKA-WAY-Port-Moody-British-Columbia-V3H0B7`,
        // headers: {
        //     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        //     'Accept-Encoding': 'gzip, deflate, br',
        //     'Accept-Language': 'en-US,en;q=0.5',
        //     'Cache-Control': 'no-cache',
        //     'Connection': 'keep-alive',
        //     'Cookie': 'GUID=45c62598-3bf7-49a9-b2d0-82597c6847f3; Language=1; app_mode=1;',
        //     'Host': 'www.realtor.ca',
        //     'Pragma': 'no-cache',
        //     'Upgrade-Insecure-Requests': '1',
        //     'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0'
        // },
        transform: function (body: any) {
            let $ = cheerio.load(body);
        }
    };
    return rp(options)
        .then(($) => {
            console.log( '$' + $ );
            return $;
        })
        .catch((err) => {
            console.log('err' );
            return err;
        });
}

/**
 * Middleware
 */
app.set('port', process.env.PORT || 80);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes
 */
app.get('/', (req, res) => {
    return res.json({ 'wew': 'lad' });
});
app.get('/nootka', async function (req, res) {
    await parse()
        .then(($) => {
            res.send('success' + $)
        })
        .catch((err) => {
            res.send(err.message)
        });

})

/**
 * Server
 */
const server = app.listen(app.get('port'), () => {
    console.log(
        `Server is running @ http://localhost:%d in %s mode.`,
        app.get('port'),
        app.get('env')
    );
});

export default app;
