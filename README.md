# sveltekit-tailwind-starter-template

Everything you need to build a Svelte project with TailwindCSS. This is a starter template for a barebones SvelteKit app that implements Tailwind

## Installing

You can install this template at any directory you would like. Simply, you can do a `git clone` on this repository.

The best way to get this template on your machine is a tool called [degit](https://github.com/Rich-Harris/degit). 

After you have installed `degit` on your machine, simply run the command `degit nicelion/sveltekit-tailwind-starter-template my-new-project` to install it in a new directory "my-new-project". When using `degit`, the files in the main repo are copied into the directory you specify, without the git history.

### How to run on localhost
After you have cloned or scaffolded this repo using degit...

Install dependencies:

```sh
npm install
```

To run in dev mode mode:

```sh
npm start
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
