# Video Game Store - React Basics

## Overview

Overview of the project.


## Project Website

If you would like to find out more about the project, please checkout: [Insert Link](https://www.redaysblog.com/projects/)

## Installing the libraries

This project uses the React framework as well as many essential libraries which can be installed by:

```bash 

> npm create vite@latest

> cd [project-name]

> npm i

> npm run dev

```

## Project Structure

1. [**node_modules**](https://github.com/redayzarra/study-react/tree/master/node_modules) folder: Where all libraries and dependencies are installed. Never have to touch this.

2. [**public**](https://github.com/redayzarra/study-react/tree/master/public) folder: Where public assets, such as images or other media, exist. 

3. [**src**](https://github.com/redayzarra/study-react/tree/master/src) folder: Where the source code of our application exists such as components (App component lives here).

4. [**index.html**](https://github.com/redayzarra/study-react/blob/master/index.html) file: Where the structure of our website is. This is just a basic html file where we have a div of the id of "root" which is where our application is stored. 

5. [**package.json**](https://github.com/redayzarra/study-react/blob/master/package.json): Information about our project, including name and dependencies. 

6. [**tsconfig.json**](https://github.com/redayzarra/study-react/blob/master/tsconfig.json): Settings for the TypeScript compiler to convert our code to Javascript

## What is React?

**Lead concept:** React is a Javascript library that provides specific functionality. React is great at creating dynamic user interfaces but lacks other useful functions. For this reason, React is used alongside other libraries and tools to create fully-functional web applications. 

## How does React work?

**Lead concept:** We have a component tree with the "App" being the root and the "Message" being the child. React takes this component tree and builds a Virtual DOM. The virtual DOM is a lightweight representation of the component tree and each node represents a component and its properties. When the data in a component changes, then React updates the corresponding node in the Virtual DOM. It then compares the virtual DOM with the previous version to update nodes in the actual DOM (done by React DOM).