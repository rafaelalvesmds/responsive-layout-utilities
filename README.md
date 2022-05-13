<h1 align="center"> 
	🚀 Responsive Layout 🚀
</h1>

<br>
<br>

# Summary

- Layouts
- Creating an Angular application;
- Structure the project ( Folders and Modules );
- Create generic components ( Input, Header );
- Ways to make the page responsive
- 

<br>
<br>

## 🖼️ Layouts ( Desktop, Tablet, Smartphone )
<br>


![MacBook Pro 14_ - 1](https://user-images.githubusercontent.com/84939473/168274203-655052d3-4bd8-4cdb-b3ef-33c7e955bc99.png)
<br>
<br>

![iPad Pro 12 9_ - 1](https://user-images.githubusercontent.com/84939473/168274234-18d34317-8bd5-40c3-b21b-a2927f1ae593.png)
<br>
<br>

![13 Pro - 3](https://user-images.githubusercontent.com/84939473/168273793-43fe1fe6-767f-4035-baf2-89a9bd0e46e5.png)
<br>
<br>

## ▶️ Creating an Angular application

### Install the Angular CLI
<i> only for those who have never run an angular application </i>

````bash
npm install -g @angular/cli
````

````bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
````
<br>

### Create a workspace and initial application

````bash
ng new my-app
````
<br>

###  Install Angular Material

````bash
ng add @angular/material
````
<br>

### Install Flex-Layout 

````bash
npm i @angular/flex-layout
````
<br>
<br>

## 📁 Structure the project ( Folders and Modules );
<br> 

![image](https://user-images.githubusercontent.com/84939473/168277820-94689354-6d64-4e71-8623-8ed7b36b9ea3.png)

<br>

### Create Home Components 

````bash
ng g m --route home --module app.module
````
<br>

### Create Shared Components 

````bash
ng g c input
````
````bash
ng g m input
````
<br>

### Add FlexLayoutModule in imports of Module Components
````bash
import { FlexLayoutModule } from '@angular/flex-layout';
````
<br>

## 🌐 Create generic components ( Input, Header );

### Input
https://github.com/rafaelalvesmds/responsive-layout/tree/main/src/app/shared/input
<br>

### Header
https://github.com/rafaelalvesmds/responsive-layout/tree/main/src/app/shared/header
<br>
<br>
<br>

## 🔀 Ways to make the page responsive;
  <br>

### component.ts
  <br>


````bash
  getScreenWidth!: number;

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
  ````
  <br>
  
### component.scss
````bash
// Tablet
@media only screen and (min-width: 599px) and (max-width: 1279px) {

}

// Smartphone
@media only screen and (max-width: 599px) {

}
````
<br>

### component.html
````bash
fxFlex [ default ]
fxFlex.xl [ screen and (min-width: 1920px) and (max-width: 5000px) ]
fxFlex.lg [ screen and (min-width: 1280px) and (max-width: 1919px) ]
fxFlex.md [ screen and (min-width: 960px) and (max-width: 1279px) ]
fxFlex.sm [ screen and (min-width: 600px) and (max-width: 959px) ]
fxFlex.xs [ screen and (max-width: 599px) ]
````
<br>
