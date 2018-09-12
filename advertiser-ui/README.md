# Advertiser UI

## Requirements

In order to run this project you will need Node.js installed. I used yarn for dependency management but npm will also work.

## Install

Get all the dependencies

    $ yarn install

## Start development server

    $ yarn start
    
## Generate a build

    $ yarn build
    
## Run in production

In order to run in production a web server is needed like nginx. The procedure is:
- Run yarn build to create a build of the application
- Copy the dist folder to the web server

## Run tests

    $ yarn test
    
## Generate styleguidist documentation 

Start the documentation server

    $ yarn style-guide-server
    
Build the documentation. This is generated in /styleguide

    $ yarn style-guide-build
