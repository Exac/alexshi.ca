import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cheerio from 'cheerio';
import * as rp from 'request-promise';
import * as puppeteer from 'puppeteer';

/**
 * SETTINGS
 */
const app: express.Application = express();
const url = 'http://thomasmclennan.ca';
// const url = 'https://www.realtor.ca/Residential/Single-Family/19697431/2606-660-NOOTKA-WAY-Port-Moody-British-Columbia-V3H0B7';
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
            console.log('$' + $);
            return $;
        })
        .catch((err) => {
            console.log('err');
            return err.error;
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
    const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
    const page = await browser.newPage();
    page.setJavaScriptEnabled(true);
    await page.setViewport({ width: 1280, height: 720 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0');
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    await page.goto(url);

    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio,
        };
    });

    return res.send('done');
    await browser.close();
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
