# Lab: Class 16

## Project: cloud-server

### Author: Audrey Patterson

## Links and Resources

- [Deployed express server - GUI](http://cloudserverlab-env.eba-pemdy2tq.us-west-2.elasticbeanstalk.com/)
- Deployed Server - CLI

- [Pull Request Dev to Main](https://github.com/arpatterson31/cloud-server/pull/1)

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
