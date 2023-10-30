# Set Up a New TypeScript Project

## Initialize a node project

```sh
npm init --yes
mkdir -p ./src ./test ./docs
```

---

```sh
npm install --save-dev typescript ts-node
```
The semantic difference here is that dependencies are used in production — whatever your project would entail. On the other hand, devDependencies are a collection of the dependencies used during the development of your application: the modules that you need to use to build it but don't need when it's running.

ts-node is a TypeScript execution engine and REPL for Node.js. It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.js tools and libraries.

## Typescript

```sh
npm install --save-dev @types/node
```
This package contains type definitions for node (https://nodejs.org/).
See https://www.npmjs.com/package/@types/node

```sh
npx tsc --init
```

## Eslint

```sh
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint
```
See https://typescript-eslint.io/getting-started/


```sh
touch .eslintrc.json
```
https://eslint.org/docs/latest/use/configure/configuration-files
Here’s an example JSON configuration file that uses the typescript-eslint parser to support TypeScript syntax:
```json
{
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": { "project": ["./tsconfig.json"] },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString" : false,
                "allowNumber" : false
            }
        ]
    },
    "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
}
```

## Test

## Git

```sh
git init
echo 'node_modules
build
coverage
.idea' > ./.gitignore
```

# Reference
- https://nodesource.com/blog/the-basics-getting-started-with-npm/
- https://www.mailslurp.com/blog/fastest-way-to-start-a-typescript-project/
- https://www.digitalocean.com/community/tutorials/typescript-new-project
- https://marketsplash.com/tutorials/typescript/how-to-init-typescript-project/
