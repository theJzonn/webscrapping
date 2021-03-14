const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://thejzonn.github.io/PortfolioV3/#/projects');
    //await page.waitForTimeout(5000);
    const projects = await page.evaluate(() => {
        let projects = [];
        const elements = document.querySelectorAll('div.projects_box__1SPHr');
        for(const element of elements){
            projects.push({
                title: element.querySelector('h2').textContent,
                description: element.querySelector('p').textContent,
                link: element.querySelector('a').href
            });
        }
        return projects;
    });

    console.log(projects);
    await browser.close();
})();