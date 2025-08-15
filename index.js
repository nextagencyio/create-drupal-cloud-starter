#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const chalk = require('chalk');

// Get project name from command line args
const projectName = process.argv[2];

// Validate project name
if (!projectName) {
  console.log(chalk.red('❌ Please specify a project name:'));
  console.log(chalk.cyan('  npm create drupal-cloud-app'), chalk.green('<project-name>'));
  console.log();
  console.log('For example:');
  console.log(chalk.cyan('  npm create drupal-cloud-app'), chalk.green('my-drupal-app'));
  process.exit(1);
}

// Validate project name format
if (!/^[a-z0-9-_]+$/i.test(projectName)) {
  console.log(chalk.red('❌ Project name can only contain letters, numbers, hyphens, and underscores.'));
  process.exit(1);
}

console.log();
console.log(chalk.blue('🚀 Creating Drupal Cloud Next.js app:'), chalk.green(projectName));
console.log();

try {
  // Create the Next.js app using your Drupal Cloud starter
  console.log(chalk.gray('📦 Setting up Next.js with Drupal Cloud starter...'));
  
  execSync(
    `npx create-next-app@15 "${projectName}" --example https://github.com/nextagencyio/drupal-cloud-starter --use-npm --eslint`,
    { 
      stdio: 'inherit',
      cwd: process.cwd()
    }
  );

  console.log();
  console.log(chalk.green('✅ Success!'), `Created ${projectName} at ${path.resolve(projectName)}`);
  console.log();
  console.log('Next steps:');
  console.log(chalk.cyan(`  cd ${projectName}`));
  console.log(chalk.cyan('  npm run dev'));
  console.log();
  console.log('Happy coding! 🎉');
  
} catch (error) {
  console.log();
  console.log(chalk.red('❌ Failed to create app.'));
  console.log(chalk.red('Error:'), error.message);
  console.log();
  console.log('Please check:');
  console.log('• Your internet connection');
  console.log('• The project name is valid');
  console.log('• You have the latest version of Node.js');
  process.exit(1);
}