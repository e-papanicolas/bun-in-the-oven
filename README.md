# bun-in-the-oven

Trying out the oven-sh/bun javascript runtime!

### commands

- `bun install` to install from `package.json`
- `bun add <pkg-name>` or `bun remove <pkg-name>`
- `bun run clean` or `bun clean` with:

```json
"scripts": {
    "clean": "rm -rf dist out node_modules"
  }
```

- `bun create react ./app` to Create React App
- `bun dev` to start dev server
- `bun add -d bun-types` to get TypeScript working with the global API, add `bun-types` to your project
- add types to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["bun-types"]
  }
}
```

- `bun install` can be configured via `bunfig.toml`, environment variables, and CLI flags, but configuring with `bunfig.toml` is optional
- bun run automatically loads environment variables from .env into the shell/task. .env files are loaded with the same priority as the rest of bun, so that means:

1. `.env.local` is first
2. if (`$NODE_ENV` === `"production"`) `.env.production` else `.env.development`
3. `.env`

- `bun create` to see a list of examples of project templates (aka react, next)
- `bun bun <./path-to.js>` to generate a `node_modules.bun` file containing all imported dependencies (recursively)
- `bun init` is a quick way to start a blank project with Bun. It guesses with sane defaults and is non-destructive when run multiple times

> It creates:
>
> - a `package.json` file with a name that defaults to the current directory name
> - a `tsconfig.json` file or a `jsconfig.json` file, depending if the entry point is a TypeScript file or not
> - an entry point which defaults to `index.ts` unless any of index.`{tsx, jsx, js, mts, mjs}` exist or the `package.json` specifies a module or main field
> - a `README.md` file
>
> If you pass `-y` or `--yes`, it will assume you want to continue without asking questions.
>
> At the end, it runs `bun install` to install `bun-types`

- `bun completions` installs completions for zsh, runs on every `bun ungrade`
