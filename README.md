# Microfrontend Setup with React and Single-SPA

This project demonstrates a microfrontend architecture using [Single-SPA](https://single-spa.js.org/), integrating two React applications (`app1` and `app2`) and a `root-config` application that orchestrates these microfrontends.
We can craete as many microfrontends using this setup. This setup can also allow us to run angular/vue/react etc applications together. 

## Project Structure

Microfrontend-Setup-React/
 ├── app1/
 ├── app2/
 └── root-config/


- **app1/**: First React microfrontend application.
- **app2/**: Second React microfrontend application.
- **root-config/**: Application responsible for orchestrating the microfrontends using Single-SPA.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

1. **Install Dependencies**

   Navigate to each application directory and install the necessary dependencies:

   ```bash
   cd app1
   npm install
   cd ../app2
   npm install
   cd ../root-config
   npm install
 ```
## Run the React Applications

2. Start both React applications. They can run independently or simultaneously:

app1:

cd app
```bash
npm run start
```
cd app2
```bash
npm run start
```
Run the Root Config Application

The root-config application orchestrates the microfrontends:

cd root-config
```bash
npm run start
```
Access the application at http://localhost:9000.

Notes
Ensure that each application runs on a unique port to avoid conflicts.
The root-config application uses Single-SPA to manage and load the microfrontends dynamically.
