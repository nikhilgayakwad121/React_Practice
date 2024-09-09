### Type script :

myFile.ts

Check the TypeScript version with:
tsc --version

if you're using an outdated version, upgrade TypeScript by running:
npm install -g typescript

### compile with: 

tsc myFile.ts

### Now we will get the .js generated file,  To  run the .js file with :

node myFile.js

### NOTE: If we do not want to create .js file when there is error in .ts file

tsc --noEmitOnError myFile.ts

### NOTE: if we want to use accessors

tsc --target es5 myFile.ts 

To generate the tsconfig.json file

npx tsc --init


