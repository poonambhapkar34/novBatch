# AngularNovbatch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
//vs code , nodejs , angular envr:  npm install -g @angular/cli --> it will install latest version of angular globally into ur machine
//ng version :to know angular installed or not
//node -v : to know node js installed or not
powershell unathourity error:
set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
Get-ExecutionPolicy
// to creat new poroject :  ng new project_name
If u r facing error inbetween project creation :
node_module is their : simply delete it and run cmd: nmp i /npm i -f
//to run angular appliction : ng serve --open /ng s -o/ ng s / ng serve

common mistake Error: This command is not available when running the Angular CLI outside a workspace. : u r running serve command outside project name folder: to remove this open terminal on ur project name and do ng s.
//organisation:
url : to clone project 
steps: 1. folder >>right git bash here >> terminal git clone "url" >> credintials >>enter
2. open cloned project into vs code 
3.check for node_module folder :it should not their, >>>
4. npm i
if facing error: npm i -f
again delet node_module folder and again do npm i or npm i -f.
>>if did successufull installaion of npm pcks>> ng s/cmd will given to u by ur team memers to serve application

ng g c admin
ng g m admin --routing
ng g m admin --route admin --module app.module 