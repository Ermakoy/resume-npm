#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const chalk = require('chalk');

const response = chalk.bold.green;

const resume = require('./resume.json');

const resumePrompts = {
  type: 'list',
  name: 'resumeOptions',
  message: 'What do you want to know about me?',
  choices: [...Object.keys(resume), 'Exit']
};

function main() {
  console.log('Hello,My name is Andrey and welcome to my resume');
  resumeHandler();
}

async function resumeHandler() {
  const { resumeOptions } = await inquirer.prompt(resumePrompts);
  if (resumeOptions === 'Exit') return;

  console.log(response('--------------------------------------'));
  resume[`${option}`].forEach(info => console.log(response(`|   => ${info}`)));
  console.log(response('--------------------------------------'));

  const { exitBack } = await inquirer.prompt({
    type: 'list',
    name: 'exitBack',
    message: 'Go back or Exit?',
    choices: ['Back', 'Exit']
  });
  
  if (exitBack == 'Back') {
    resumeHandler();
  } else {
    return;
  }
}

main();
