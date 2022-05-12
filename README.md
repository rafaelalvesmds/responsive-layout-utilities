<h1 align="center"> 
	🚧 🚀 in progress... 🚀 🚧
</h1>
<br><br><br>


# Responsive Layout

- Creating an Angular application

<br>

## Creating an Angular application

### Install the Angular CLI
<i> only for those who have never run an angular application </i>

<br>

````bash
npm install -g @angular/cli
````

````bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
````
<br>

### Create a workspace and initial application
<br>

````bash
ng new my-app
````
<br>

###  Install Angular Material
<br>

````bash
ng add @angular/material
````
<br>

### Create Home Components 
<br>

````bash
ng g m --route home --module app.module
````
<br>

### Create Shared Components 
<br>

````bash
ng g c input
````
````bash
ng g m input
````
<br>

### Install Flex-Layout 
<br>

````bash
npm i @angular/flex-layout
````
<br>

<i> Add in Module Component ( Ex: Home ) </i>
````bash
import { FlexLayoutModule } from '@angular/flex-layout';
````

![image](https://user-images.githubusercontent.com/84939473/168107768-c10a4352-d7cf-40ff-9629-c2c8757a46b2.png)

