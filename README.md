# Reproduce error: 

* This is just a demo project. The interesting part for Spectator is the 'component1' component. 
* Start 'ng serve' and you see a simple page. 
* Start 'jest --watch' and the tests start. Watch for the 'component1.component*.spec.ts' tests. 

* This is a Angular 12 project with a Spectator 7.1. 

These are the commands I did: 

* Update project to Angular 13

$ npx @angular/cli@13 update @angular/core@13 @angular/cli@13 --force -allow-dirty

* Update Spectator from 7.1.4 to 10.0.0. 

$ npm i --save-dev @ngneat/spectator@latest

Does not work. The error message is: 

<code>
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! node_modules/@ngneat/spectator
npm ERR!   dev @ngneat/spectator@"10.0.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Users\Johan\AppData\Local\npm-cache\eresolve-report.txt for a full report.
</code>

Next step is to force the update

$ npm i --save-dev @ngneat/spectator@latest --force -allow-dirty

Works. BUT ...

Starting the 'jest --watch' reveals an error. 




