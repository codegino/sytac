# Technical Assignment

Check the deployed application [here](https://trafficmeister.vercel.app/).

## Running the application

### Prerequisite

Please use Node V16.13.0+ when running the commands below to avoid any issues.

- [NVM](https://github.com/nvm-sh/nvm)
- [Node Isntaller](https://nodejs.org/en/download/)

### Setup

```bash
yarn install
```

### Running in dev mode

```bash
yarn start
```

### Running the production bundle

```bash
yarn build

yarn global add serve

serve -s build
```

### Running the tests

```bash
yarn test

# OR run with coverage
yarn coverage
```

---

## Assumptions

### Choice of tech stacks

Since there are no clear criteria on how tech stack choice will be assessed, I
listed some assumptions on what I chose to use.

#### Create React App

I can work in higher-level frameworks like Next.JS, Gatsby, Remix, or even in
Vanilla setup, but to be on the middle part, I'll use the common CRA to
bootstrap the project.

#### Emotion

Again, I can use different ways to style React, from vanilla CSS to ready-made
components. For the sake of finding a middle ground, I will be using Emotion
since, syntax-wise, it can be a combination of other libraries.

#### TypeScript, ESLint, Prettier, Husky

Automatically check the code for issues even before it reaches the remote repo.

#### Others

I can utilize open-source to deliver projects faster to clients, but for the
sake of this exercise, I will recreate the other requirements from scratch.

---

### Folder structure

There are thousands of ways to organize the codebase; I'll use this approach for
this exercise.

- `components` - Reusable components
  - `elements` - primitive elements like input, button, etc.
  - `typography` - texts components like h1, h2, h3, p, etc.
- `icons` - I extracted this in case we want to reuse some icons
- `models` - business related type definitions
- `modules` - feature related components(these may be reused across pages)
- `pages` - entry point for all web pages(currently only home page)
- `state/store` - utility for sharing state. We can store redux and such here.
- `utils` - common utility functions
- `__mocks__` - test related utilities
- `__test__` - Contained all test cases.

### Naming convention

There are multiple ways to do this. For this exercise, I used these simple
conventions:

- File name matches their component name(Pascal case) and has a default export.
- Others will follow the camel casing and will be named export.

---

### Notes on optimization

I have no idea how reviewers will assess the performance aspect. So checked
React Profiler, and I added basic optimizations for things I'm sure are
essentially needed. I made notes for other cases where I think premature
optimization is unnecessary.
