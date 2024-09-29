# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Boostrap

To make use of bostrap styles and icons we need to instakk boostrap

`npm install bootstrap bootstrap-icons`

After install, we will configure the bootstrap and bootstrap-icons libraries. Change the angular.json file and add the bootstrap.scss, bootstrap-icons.css and bootstrap.bundle.min.js files as below:

"styles": [
"node_modules/bootstrap/scss/bootstrap.scss",
"node_modules/bootstrap-icons/font/bootstrap-icons.css",
"src/styles.scss"
],
"scripts": [
"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]

Now we will install the @ng-bootstrap/ng-bootstrap library which contains native Angular support:

`ng add @ng-bootstrap/ng-bootstrap`

After install, we will import the NgbModule module. Change the app.module.ts file and add the lines as below:

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

imports: [
BrowserModule,
NgbModule,
AppRoutingModule,
],
