const fs = require('fs');
const content = fs.readFileSync('dist/assets/index-CuBaPAoz.js', 'utf8');

const searchString = 'id="services"';
const index = content.indexOf(searchString);

if (index !== -1) {
    const start = Math.max(0, index - 500);
    const end = Math.min(content.length, index + 3000);
    fs.writeFileSync('extracted_services_html.txt', content.substring(start, end));
    console.log('Services HTML written to extracted_services_html.txt');
} else {
    // Try without quotes
    const searchString2 = 'id=services';
    const index2 = content.indexOf(searchString2);
    if (index2 !== -1) {
        const start = Math.max(0, index2 - 500);
        const end = Math.min(content.length, index2 + 3000);
        fs.writeFileSync('extracted_services_html.txt', content.substring(start, end));
        console.log('Services HTML found by index2 and written to extracted_services_html.txt');
    } else {
        console.log('Services HTML not found');
    }
}
