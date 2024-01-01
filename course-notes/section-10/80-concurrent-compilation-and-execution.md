We've now got a semi-automated build process for our code,

I want to you to think about what this means on a pratical level.

Now we have to figure out how to run this thing

- Verify tsc -w is running in sort/
- Open an additional terminal window
- $ <code>node</code> build/index.js // This runs our file
- npm init -y
- npm install nodemon concurrently
- edit package.json, remove the existing script
- add the 3 scripts "start:build", "start:run", and "start"
- edit index.ts

### Automating our process with Additional Tooling

This process is still tedious we can automate a bit more of this process
Having to run node build would be a pain

nodemon: Is going to allow us to rerun Node anytime a file changes in our project
concurrently: Is repsonsible to help us run multiple scripts from a single point of execution.

- edit package.json
- add the 3 scripts "start:build", "start:run", and "start"

```json

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:build": "tsc -W",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
}

```

- edit index.ts
  console.log(123);

Summary, we now have a semi-automated build system, that we'll use through out this course.
