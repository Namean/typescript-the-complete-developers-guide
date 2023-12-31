# 53 App Overview

Starting in this video, we're going to work on our first application and throughout the rest of this course. All we're going to focus on is design patterns!!

We're going to learn how to use TypeScript effectively inside of an application and how to leverage its features to write really reusable code.

### Application Mock up

We're going to make a basic web application.

- Randomly generate a user
- randomly generate a company

first name
last name
age

longitude and latitude

show markers on google maps

The goal of the application is to get you familiar with

### Goal

- Get an understanding of classes and interfaces
- How to make use of interfaces effectively
- to get some code reuse in our application

### Environment Setup

We're going to do a small amount of setup to get some TypeScript code running inside the browser.

We're going to use a tool called parcel bundler.

This is a commandline tool that we're going to use in place of node.

Parcel bundler is all about getting TypeScript executed inside the browser very easily, so its going to automate a lot of tooling for us.

We'll eventually learn to setup a TypeScript project manually, but for right now. we're going to use parcel.

npm i -g parcel

### 54. Bundling with Parcel

- Create an index.html file
- include script index.ts

Parcel will transpile or .ts files to js and include them

### 56. IMPORTANT Info About faker Installtion

IMPORTANT Info About Faker Installation
In the upcoming lecture, we will be installing the Faker library. You may notice that the GitHub repository for Faker is empty or is displaying some confusing messaging. The library currently no longer exists and is not being maintained.

A community fork of Faker was made to save the project:

https://github.com/faker-js/faker

To use this library, you can install it by running:

npm install @faker-js/faker

You'll then need to update all of your imports:

import { faker } from "@faker-js/faker";

As of their v6 release, TS support is now native and does not require installing the @types declarations.

https://github.com/faker-js/faker#typescript-support
