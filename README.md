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

## Props vs. State

**Props:** The input or arguments passed to a component. Similar to function arguments. We should treat props as immutable or unchangeable. React will rerender and "react" to it to update the DOM.

**State:** The data managed by a component that can change over time. Similar to local variables. States are mutable and the data can be changed. React will rerender and "react" to it to update the DOM.

## Seperation of Concerns

**Lead Concept:** Divide a program into distinct sections where each section handles a specific functionality, rather than having everything in one place. Each module is reponsible for one specific function.

**Benefits:** This allows our programs to be more modular, easy to understand, maintain, and modify. We can build and test every module independently and use them again in other programs.

**Module:** All the complexity and implementation details are hidden behind a structured interface.

## Popular UI Libraries

1. Bootstrap - easy to use

2. Material UI - Google's material design used to make Google products.

3. Tailwind CSS - Utility first CSS library. Never have to write CSS.

4. Daisy UI - Full fledged components with cleaner markup

5. Chakra UI - React component library built on top of Tailwind CSS

## State Hook

**Lead Concept:** React updates asynchronously and not immediately to minimize unncessary rerenders. The state is stored outside of its components because we do not want the state to be reset by functions. You can only use hooks at the top of your components.

## Best Practices

**Lead Concept:** Avoid redundant state variables like a full name or anything that can be computed from existing variables. Make sure to group related variables inside an object but avoid deeply nested structures.

## Purity

**Pure Function:** Given the same input, the output will always be the same. React expects every component to be a pure function for performance reasons.

**Pure Components:** Keep components pure by keeping any changes out of render phase.

## Sending HTTP Requests

1. **HTTP:** *H*yper*t*ext *T*ransfer *P*rotocol is a protocol for transferring data over the internet. Browser sends an HTTP request to the server asking for some content, the server responds with an HTTP response (contains HTML, CSS, etc.) needed to display the website in our browser.

2. **fetch()**: function which is implemented in all modern browsers and allows you to send a request to the server.

3. **Axios**: a library that allows you to make HTTP requests to communicate with API's or other web servers more easily and efficiently.

## Promises

**Asynchronous:** An operation that may take a long time, essentially long-running.

**Lead Concept:** A promise is an object that holds the eventual result or failure of an asynchronous operation.
