const fs = require('fs');

const readmeFile = 'README.md';

const badge = `
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=Salahbendary&layout=compact)
`;

fs.readFile(readmeFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const updatedData = data.replace(
    /<!-- Most Used Languages Section -->[\s\S]*<!-- End of Most Used Languages Section -->/,
    `<!-- Most Used Languages Section -->${badge}<!-- End of Most Used Languages Section -->`
  );

  fs.writeFile(readmeFile, updatedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Language stats badge updated successfully!');
  });
});
