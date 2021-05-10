# Lab: Class 16

## Project: cloud-server

### Author: Audrey Patterson

## Links and Resources

- Deployed server - GUI
- Deployed Server - CLI

## Process

### GUI Deploy

- Zip server files `zip -rp server.zip *` - don't include node_modules or package-lock.json files
- Go to AWS Console -> Services -> Elastic Beanstalk
- Create Application
- Give it a name
- Platform - Node.js
- App Code -> upload code -> local file -> choose file -> `server.zip`

### CLI Deploy

- CMD line -> `eb init` -> confirm region -> select app -> codeCommit = N
- `eb deploy`
