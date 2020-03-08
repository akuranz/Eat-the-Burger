# burgers

## Deployed Dashboard

https://github.com/akuranz/Employee-Tracker

## Deployed Project

https://arcane-badlands-26812.herokuapp.com/

## Description

Eat-the-burger uses a model-view-controller (MVC) design pattern to create a simple tracker app. The app uses MySQl and an orm to create a simple database of burger types and weather or not they have been eaten by the user.

## Instructions for User

Keep track of the type of burgers you'd like to "devour" in the future by typing a descriptive name in the box called "Add a burger." Once you have eaten a burger, click the "devour >>" button to move it to list of burgers you have already eaten. If you would like to move the burger back to the list of burgers you'd like to devour, click the "return to list >>" button beneath the burger you'd like to move.

## HTML

This app uses Handlebars to create an HTML templates for the main page and each burger added to the database.

## Javascript

JQuery is used on the front end to make several AJAX calls to post to and update the database when a new burger is created or the devoured status is updated.

## Node Packages

Eat-the-burger is an express app that uses a MySql database and Handlebars for templating HTML.

"express": "^4.17.1"
"express-handlebars": "^3.1.0"
"mysql": "^2.18.1"

## Licensing

This project uses one Font Awesome icon:

- hamburger is a free Font Awesome icon with Attribution 4.0 International (CC BY 4.0).

MIT License

Copyright (c) [2020][abby kuranz]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
