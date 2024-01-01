# TypeScript: The Complete Developer's Guide

## Lesson 79. Configuring the TS Compiler

### TLDR

- $ touch index.ts
- add console.log("hi there") to [sort/index.ts]()
- $ <code>tsc</code> index.ts
- $ <code>mkdir</code> src
- $ <code>mv</code> \*.ts ./src
- $ <code>tsc</code> --init <!-- Generates sort/tsconfig.json -->
- $ <code>vim</code> tsconfig.json
  - rootDir: "sort/build" // Specify an output folder for all emitted files.
  - outDir: "sort/src" // Specify an output folder for all emitted files.
- $ <code>tsc</code> // Takes transpiled files from sort/src and places them into sort/build
- $ rm sort/build/index.js
- $ tsc
- Verify sort/build/index.js exists // Which verifies tsc is working correctly with our configuration
- $ <code>tsc</code> -W // Continually watches our code for changes, recompiles upon changes made in rootDir i.e. sort/src
- <code>vim</code> index.ts, with logSomething() arrow fn
- tsc -W: [10:46:05 AM] File change detected. Starting incremental compilation...
- Verify the changes, by viewing sort/build/index.ts
<hr/>
<br />

### On this page

- [Reminder of How TSC (TypeScript Compiler) Works]()
- [Organizing our Project]()
- [Configuring the TypeScript Compiler]()

### Reminder of How TSC (TypeScript Compiler) works

quick reminder of how typescript compiler works
if we have all of our source code in the root project directory things will get messy quickly.

### Organizing our project

- mkdir src
- mv \*.ts ./src
- mkdir sort/build
  - The idea of build is to organize our compiled code

We don't need to mess with the build directory.
We are only going to edit code inside of sort/src

### Configuring the TypeScript Compiler

Let's figure out how to setup our TypeScript Compiler to work with these two separate directories
sort/src, and sort/build

To do so, we need to generate a tsconfig.json file, which controls how the
TypeScript compiler behaves.

- tsc --init

Anytime we run the TSC compiler at our terminal, its going to automatically, check to see if we have a config inside of here.

If we do, its going to use those custom setting to customize the compiler

Get all code in src, to build,

rootDir: ./src
outDir: ./build

- tsc

Verify tsc is working with our configuration inside tsconfig.json

#### tsc watch

tsc -W means to watch all files inside of rootDir i.e. /src
