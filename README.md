# Employee-Tracking-CLI
Uses Mysql database to maintain employees in a company

# Description 
This program is made to be able to add, update, and view the different departments and employees of a company.

# Technologies
The main technologies in making this program work include:
1. Inquirer (NPM Package)
2. MySql2 (NPM Package)
3. MySql

# Installation
Below contains the required steps to be able to run this program correclty:
1. First clone the application from github and save it to directory of your choice
2. Navigate to the aformentioned directory using the terminal or gitbash
3. Once in the correct directory, run `npm install` to install the required packages used in the application
4. Still in the directory, run `mysql -u root -p` to open up mysql controls in the terminal/gitbash
5. You will have to type in your own mysql password to be able to move on the next step
6. Once you have access to mysql, run `source db/schema.sql` and then `source db/seeds` to import the correct data into the database
7. Now you can run `npm start` to begin the application.

# Purpose
This application builds on important database configuration techniques and empowers the programer to be able to better understand
the usefullness of mysql and all it has to offer.

![employee tracker snapshot](https://user-images.githubusercontent.com/37945822/140661982-4fed159f-761c-4229-8047-11707e935b1b.JPG)
