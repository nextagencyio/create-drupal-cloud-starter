#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please specify a project name:');
  console.log('  npm create drupal-cloud-app my-app');
  console.log('  npx create-drupal-cloud-app my-app');
  process.exit(1);
}

const projectPath = path.resolve(projectName);

if (fs.existsSync(projectPath)) {
  console.error(`Directory ${projectName} already exists.`);
  process.exit(1);
}

console.log(`Creating a new Drupal Cloud app in ${projectPath}...`);

// Create project directory
fs.mkdirSync(projectPath, { recursive: true });

// Copy template files
const templatePath = path.join(__dirname, '..', 'template');
copyRecursiveSync(templatePath, projectPath);

// Update package.json with project name
const packageJsonPath = path.join(projectPath, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
packageJson.name = projectName;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Installing dependencies...');
process.chdir(projectPath);
execSync('npm install', { stdio: 'inherit' });

console.log(`
Success! Created ${projectName} at ${projectPath}

Inside that directory, you can run several commands:

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd ${projectName}
  npm run dev

Happy coding!
`);

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}