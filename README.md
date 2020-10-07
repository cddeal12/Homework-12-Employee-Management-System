# Homework-12-Employee-Management-System ![License Badge for MIT](https://img.shields.io/badge/License-MIT-green)

# Description
This is a CLI app that can create a database for organizing departments, roles, and employees within a company. It tracks which items belong to which broader categories and can track employee salaries
            
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

<a name="installation"><a>
### Installation
After downloading the repository, open a terminal in the main file and use 'npm install' to get the appropriate dependencies. This app uses mysql to store database information. You will need a localhost connection running on your machine with the default port of '3306'. You will also need to open the file named 'index.js' and rename the variables located under the 'USER VARIABLES' header. rename userName to the user you would like to run mysql with, and userPassword to your appropriate mysql password. Finally, in the same terminal you used before, simply use the command 'node index' whenever you wish to run the app.

<a name="usage"><a>
### Usage
When the app starts, you will be prompted with many options for how to view and manipulate the database. If it is your first time running the app, you will need to create some departments first. You can create these, as well as roles and employees by selecting the 'add to database' option on the first prompt. You will be prompted to give the department a name. When creating roles and employees you will need to input multiple pieces of information. The code will error and stop if the information inputted is in the wrong format or if it ever refers to another item in the database that does not exist. Unless otherwise specified all pices of information should be given as simple text. If you are asked for the id of an item, you will need to input a number.

You can view the id of any object in the database by selecting 'View Database' on the main prompt and then selecting the category of item you wish to see. 

You can also delete items from the database by selcting 'Delete' from the main prompt. 

Finally, you may update an employee's role by selcting 'Update Employee' from the main prompt, and then inputting information in the same way as when creating a new item.

<a name="license"><a>
### License
Homework-12-Employee-Management-System

Copyright © 2020 Caleb Deal
        
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


<a name="questions"><a>
### Questions
Please direct questions to my github account, cddeal12 found at [https://github.com/cddeal12](https://github.com/cddeal12)
Alternatively you can reach me by email at cddeal12@gmail.com
