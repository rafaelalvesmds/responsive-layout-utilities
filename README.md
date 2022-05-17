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
- Ways to make the page responsive;
- Bibliographic reference;

<br>
<br>

## 🖼️ Layouts ( Desktop, Tablet, Smartphone )
<br>

![2](https://user-images.githubusercontent.com/84939473/168598322-65894e3f-7ca4-4006-a799-68b8692aeab6.png)
<br>
<br>

![3](https://user-images.githubusercontent.com/84939473/168598355-d488c62b-090c-42a3-b7f9-5bc5131a5f75.png)
<br>
<br>
 
 ![4](https://user-images.githubusercontent.com/84939473/168598379-f2cc9db2-6fd1-4905-b0ca-8099279a949c.png)
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
https://github.com/rafaelalvesmds/responsive-layout/tree/main/src/app/pages/exemples
<br>
<br>

### component.ts
  <br>

<i>Get a variable with the current page width</i>
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
<br>

<i>mediaQuery</i>
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
<br>

<i>FlexLayout commands</i>
 
<table>
  <tr>
    <th>fxLayout</th>
    <th>fxLayoutAlign</th>
    <th>fxLayoutGap</th>
    <th>fxFlex</th>
  </tr>
  
  <tr>
    <td> Direction </td>
    <td > Alignment </td>
    <td> Interval </td>
    <td> Size </td>
  </tr>
</table>

<br>

<i>Responsibilities</i>

<table>
  <tr>
    <th>xl</th>
    <th>lg</th>
    <th>md</th>
    <th>sm</th>
    <th>xs</th>
  </tr>
  
  <tr>
    <td> 1920px < 5000px </td>
    <td >1280px < 1919px </td>
    <td> 960px < 1279px </td>
    <td> 600px < 959px </td>
    <td> < 599px </td>
  </tr>
</table>
<br> <br>

## Bibliographic reference

- https://angular.io/
- https://material.angular.io/
- https://www.npmjs.com/package/@angular/flex-layout
- https://tburleson-layouts-demos.firebaseapp.com/#/docs
- https://github.com/angular/flex-layout/wiki/API-Documentation

<br>

## Author

   <table> <td ><a href="https://github.com/rafaelalvesmds"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/84939473?s=96&v=4" width="100px;" alt=""/><br /><sub><b>Rafael Alves</b></sub></a><br /></td></table>
