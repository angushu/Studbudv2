# Studbud
A web app designed by Angus Hu. SID:470394155

Access the web app [_here_](http://localhost:1234/index.html).

In this document, I will outline the functionality of the features and justify the iterations made from A2:Web App Pitch. I will also outline future improvments that would improve the overall design of each of the features.

## Table of Contents
* [Introduction](#Introduction)
* [Home](#Home)
* [Prepare](#Prepare)   
* [Practice](#Practice)
* [Revise](#Revise)
* [Reflection](#Reflection)
* [References](#References)

## Introduction

The Studbud app has been designed for the client Desco, and is intended to be functional on both
desktop and mobile phones. As such, the design was created on a 13" MacBook Pro and was later scaled
down to be responsive on an iPhone SE. This will account for most of the intended user base of secondary students.

Based on initial User Research, a target demographic of secondary students sitting the HSC was chosen.
Following initial user research, features that would support the learning of secondary students were identified and categorised into the following sections:

* Prepare - consisting of a task list creator and covey quadrant
* Practice - consisting of a stopwatch and a pomodoro timer
* Revise - consisting of an acronym generator

<!-- If you have screenshots you'd like to share, include them here. -->

## Home
### Description
The home page is intended to introduce new students to the features of the app. The design consists of some introductory text, feature cards as well as a music player.

[Desktop Home](public/justification/desktop_home.png)
[Mobile Home](public/justification/mobile_home.png)

[Navigation](public/justification/navigation.png)

### Iterations
#### Music Player
* Takes a more prominent role compared to original mockups. However, it is also only displayed on the home page. 
* Is itended to be updated weekly to showcase a curated playlist or album to accompany students as they study
#### Feature Cards
* Instead of aligning items in a triangular pattern, for simplicity this was adjusted to be displayed in a row
#### Navigation
* Instead of having a pop out menu, for ease of use and in consideration of the effort to transfer between features, the navigation for the app is fixed to the LHS of the screen.
### Future Improvements
* Further development of the navigation with the incorporations of icons
* Refining the mobile version of the Studbud app.
* Incorporation of the help/info feature.

## Prepare
### Description
The prepare section consists of a task list will then be allocated into a quadrant so that students can prioritise the way they study.

[Desktop Prepare](public/justification/desktop_prepare.png)
[Mobile Prepare](public/justification/mobile_prepare.png)

[Desktop Prepare Open Modal](public/justification/desktop_prepare_modal.png)
[Mobile Prepare Open Modal](public/justification/mobile_prepare_modal.png)

### Iterations
#### Taskform Inputs
* Taskform Inputs were sinplified to make it less tedious for students to input tasks. 
#### Covey Quadrant Differentiation
* The tasks are pushed into quadrants based on priority of the task either (High/Low) and task length (greater than or less than 30 minutes). This will provide students with an intuitive way of approaching tasks.

#### Modal Box
* The modal box feature expands the task so that students can get a greater description of what the task entails

### Future Improvements
* Refinement of the modal box so that users can adjust thier inputs
* The addition of a checklist button so that users can complete tasks, instead of deleting them
* Better incorporating local storage functionality so that users can view previously completed tasks

## Practice

### Description
The practice section is intended to help students practice studying under exam conditions and to help them segment thier time for productive study sessions.

[Desktop Stopwatch](public/justification/desktop_stopwatch.png)
[Mobile Stopwatch](public/justification/mobile_stopwatch.png)

[Desktop Pomodoro](public/justification/desktop_pomodoro.png)
[Mobile Pomodoro](public/justification/mobile_pomodoro.png)

### Iterations
#### Removal of the control panel
* Instead of having customised inputs to process, students are now given a fixed amount of time in the pomodoro timer, which eliminates the capacity to procrastinate

#### Pomodoro Timer
* For simplicity of use, the pomodoro timer now has fixed phases of time. As the student progresses through each stage of their study session, the clockface will change colour to indicate time has passed

#### Focused Task
* From the mockup, this element was not included due to the complexity to code it. It is also assumed that students will be able to switch between pages using local storageto view thier inputted tasks, negating its usefulness

### Future Improvements
* Incorporation of alerts once the pomodoro timer enters a new phase
* changing of the styling of the pomodoro timer container to give the user more indication of time progressing


## Revise
### Description
The revise section is intended to aid students in the recall of key concepts that they have learnt, acting as a tool for them to create acronyms and test themselves as they study.

[Desktop Revise](public/justification/desktop_revise.png)
[Mobile Revise](public/justification/mobile_revise.png)


[Desktop Revise Open Modal](public/justification/desktop_revise_modal.png)
[Mobile Revise Open Modal](public/justification/mobile_revise_modal.png)

### Iterations
### Acronym generator overhaul
Due to the complexity of creating containers that can be shifted, added and moved would be tedious and challenging. Instead, the concept was refined to be a textbox in which users will input a phrase, which will then be manipulated to produce an acronym using the first letters. The whole inputted phrase can be accessed by clicking the acronym container.

### Future Improvements
* Tidier styling of the acronym so that it is more aesthetic

## Reflection
This assignment taught me a lot about the process of front-end web development a few key insights included:
* Being more flexible in designing layouts to account for user interactivity
* The difficulty of designing web responsive apps that scale well to mobile phones
* Navigating the process of maintaining a server and version controls.

Towards the completion of my assignment, I encountered problems with Github concerning pushing file sizes that were too big. This can be attributted not setting up a git.ignore file properly before the commencement of my assignment. As a result, I decided to continue developing locally despite not being able to push to then create a new repository so that I could submit a final version of my assignment.

The link to the old repository and old commits can be found [_here_](https://github.com/angushu/Studbud).

Overall, this unit was challenging, yet rewarding and has pushed me to become a better designer.

## References
Potts, T. (2021). Learn HTML, CSS & JavaScript by coding a Stopwatch | A beginner tutorial. Retrieved 6 June 2022, from https://www.youtube.com/watch?v=49f1cjZWRJA&ab_channel=TylerPotts

Rybczonek, M. (2020). How to Create an Animated Countdown Timer With HTML, CSS and JavaScript | CSS-Tricks. Retrieved 6 June 2022, from https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/?fbclid=IwAR0kYNySvWpznb5n8p1yyv-fkQMlKJYuDad_f2ZL2QuDJQjXGseKvXOAoVM

W3schools. (2022). Learn to Code. Retrieved 6 June 2022, from https://www.w3schools.com/?fbclid=IwAR0dS4aMX7cuzX_7cZ8MApbcENuEOnbWZWspTHhEPurMqNSnFbh)(