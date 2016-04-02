# MfrInv JavaScript Standards
Standards and style guide for JavaScript development

## Overview
This module is a set of [ESLint](http://eslint.org/) rules for JavaScript development (with an emphasis on Node.js) created by [Manufacturers’ Inventory](https://manufacturersinventory.com/).

## Usage
The easiest way to add these rules to your project is to include the rule module and ESLint locally to your project. Both the rules and ESLint can be added via NPM. After that you'll need to create an `.eslintrc.*` file in your project. See below for details.

1. Run `npm install --save-dev eslint-config-mfrinv eslint`
1. Create an `.eslintrc.*` file that extends `mfrinv`
1. Optionally create a NPM script such as `"lint": "eslint ."`

Your `.eslintrc.*` file contains your project specific ESLint configuration and is how you'll reference the `mfrinv` rules. As a minimal example, here is how a `.eslintrc.json` file would look that simply includes the `mfrinv` rules.

```
{
    "extends": "mfrinv"
}
```

Once the `.eslintrc.*` file is created you are ready to lint your project. If you've created the script from step 3 above, you can run `npm run lint` and see the results.

## Edits
There are two main ways to edit the [ESLint rules](http://eslint.org/docs/rules/). If it is a global change you can find and edit the specific rule in `/rules/*.js`. For convenience the name of the files correspond to the ESLint rule categories.

If the rule change is project specific, directory specific, or file specific you have some additional options. [ESLint configuration](http://eslint.org/docs/user-guide/configuring) is very flexible and allows you to specify rules at varying levels of granularity. Broadly, you can create a `.eslintrc.*` file in any directory which will override rules up through your project directory to your home directory. You can also add comments to a specific file that configures rules. See the official docs for more information.

It is often convenient to edit the rules and environment for tests.

## Rules
TBD