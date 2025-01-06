episode 1  react 
# 1. before ready to make production > for speed
 - remove random comments 
 - remove console.log
 - minify code 
 - bundle file 
 - compress file 
 - optimize images 

# create react app 
- npx - basic react app for production ready 
- create own create app (insetad of using already existing app)
- react only cannot build faster application 
- other js code , libraries make fast and scalble 
- react makes but with other package makes app fast 


# npm 
- node package manager 
- [npm](https://www.npmjs.com/)
- standard repository 
- biggest package 
- all the lib , packages comes from npm 
- when create react npm create -> automatically have npm 

`npm>>`
--> npm init 
- package.json - dependency 
- package.json - manage version and configuration for npm 


<!-- install dependency  -->
`bundler` -  this helps  code needs to be compressed , cleaned , minified 
1. webpack
2. parcel
3. vite and more bundlers


# parcel 
=>  `-S` - used in production 
=>  `-D` - dev dependency - used in development phase for developers 
--> npm install -D parcel



# "parcel": "^2.13.3"
-  `^` - make the version upto data , install minor upgrade
   `~` - make the version upto data , install major upgrade
note :  minor upgrade is safe 

# package-lock.json
 tracks the exact version

# parcel depend on other dependency
  - nodemodules repo -> repo 
 - one depend amoung other 
 - every package has own dev depedncy , package.json file 

 
# create react app 
--> npx parcel react.html
-> Server running at http://localhost:1234
-> npx - executing package 
-> npm - install package 

# npm instead of cdn 
--> react is js package / code 
--> cdn is not preferred way 
--> fetch from -> network call from unpkg.com
if already have react in node is better 
--> cdn will be version stops , v1 , v2 
--> npm will update itself 
# --> npm install react
# --> npm install react-dom
<!-- $ npm i react-dom  // i means install  -->

-->  npx parcel index.html
# import react  from  npm insdie the app.js
`err` = Browser scripts cannot have imports or exports.
normal browser script doest have import export 
tell browser its a module



 







