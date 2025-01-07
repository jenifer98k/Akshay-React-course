# git
push code to github 
-- create folder in github 
<!-- command -->
- git init 
<!-- default branch in main  -->
- git branch -M main
- git add .
- git commit -m "episode-1"
- https://github.com/jenifer98k/Akshay-React-course - create repo
- git remote add origin https://github.com/jenifer98k/Akshay-React-course.git
- git push -u origin main
- git add .
- git commit -m "Renamed ReacdME.md to ReadME.md"
- git push origin main

# npm - never put inside githib 
- create file .gitignore
- go to file .gitignore
- write /node_modules
- never put in github 

# put package.jspon and lock.josn inside the github 
- it maintains the logs 
- maintains exact ash, version '
- if you have package and packagelock.json . you can re create all the node modules 
- --> npm install 
this command will install based on package.json package mentioned 

rm -rf node_modules package-lock.json
npm install

