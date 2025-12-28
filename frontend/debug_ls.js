const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src');

try {
    const files = fs.readdirSync(dir);
    console.log('Files in src:');
    files.forEach(file => {
        const stats = fs.statSync(path.join(dir, file));
        console.log(`${file} (${stats.isDirectory() ? 'DIR' : 'FILE'}) - ${stats.size} bytes`);
    });
} catch (e) {
    console.error('Error:', e.message);
}
