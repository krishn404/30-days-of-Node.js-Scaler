const fs = require('fs');

function readFileContent(filePath) {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
    } else {
      console.log('File Content:');
      console.log(content);
    }
  });
}

// Test cases:
readFileContent('test-files/file1.txt');
readFileContent('test-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');
