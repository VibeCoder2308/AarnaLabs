const fs = require('fs');
const content = fs.readFileSync('dist/assets/index-CuBaPAoz.js', 'utf8');

const searchString = 'Websites';
const index = content.indexOf(searchString);

if (index !== -1) {
    const start = Math.max(0, index - 3000);
    const end = Math.min(content.length, index + 3000);
    fs.writeFileSync('extracted_services.txt', content.substring(start, end));
    console.log('Services content written to extracted_services.txt');
} else {
    console.log('Services not found');
}
