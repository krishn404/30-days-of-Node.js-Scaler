const fs = require('fs/promises');

async function writeToFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log(`Data written successfully to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to file ${filePath}: ${error.message}`);
  }
}

// Test cases
writeToFile('test-files/output1.txt', 'Sample content.');
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
writeToFile('permission_denied.txt', 'This file has read-only permissions.'); // Create and set read-only permissions
writeToFile('existing_file.txt', 'Overwriting existing content.'); // Create a file with some content
