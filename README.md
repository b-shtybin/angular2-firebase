##Description:
This is a complete bundle for development of the app on AngularJS 2 + Firebase ( REST Backend ) + Bootstrap 3 tech stack. Simple blog and authorization are implemented as a demo

##Requirments:
- Angular CLI - [Angular-cli github](https://github.com/angular/angular-cli)
- Typings - [Typings github](https://github.com/typings/typings)

##Boilerplate includes:

1. Module for user authorisation (Firebase Auth Basic):

 - sign up
 - sign in

2. Module for posts management

 - view
 - create
 - edit
 - delete

##Boilerplate doesn't include:

- ACL, each authenticated user can manage posts
- Current version not includes tests
- UI Errors - all errors displays in console

#Installation:

1. `cd project_folder`
2. `npm install`
3. `cp src/environments/environment.example.ts src/environments/environment.ts`
4. add configuration for firebase app in file `src/environments/environment.ts`
5. `ng serve` - server will up on http://localhost:4200

#Included Classes

###SharedHelperService

Service for common functions.
It includes one function for check authentication status of user, at current moment.

###PostsModule

Module manipulates posts (display, create, edit, delete)

###AuthModule

Module works with Firebase Basic Auth.
It does all necessary operation for provide valid authentication.
Also provides two router guards for check "is user guest" and "is user authenticated"

