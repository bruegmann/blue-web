# Blue Web

Blue Web is the base library for [Blue React](https://bruegmann.github.io/blue-react) and [Blue Blazor](https://bruegmann.github.io/blue-react). This library builds heavily on top of [Bootstrap](https://getbootstrap.com/docs/) and also provides additional solutions in CSS and JavaScript.

## Use Blue Web

Install with NPM:

```
npm i blue-web
```

[![npm version](https://img.shields.io/npm/v/blue-web)](https://www.npmjs.com/package/blue-web)

## Implementation

If you have a React or Blazor project, you should use the components of [Blue React](https://bruegmann.github.io/blue-react) or [Blue Blazor](https://bruegmann.github.io/blue-blazor). Otherwise you can also write the markup of those components directly in HTML. Check out the examples in the docs to find out how.

## Customization and theming

Since Blue Web is based on Bootstrap, you can customize many things by overriding Sass or CSS variables. For more information, see the [Bootstrap documentation](https://getbootstrap.com/docs/5.3/customize/overview/). Blue Web also provides some additional variables that you can use and override. Take a look at [dist/styles/\_variables.scss](https://github.com/bruegmann/blue-web/blob/main/dist/styles/_variables.scss) to see all of them.

Here is an example of how to override variables using Sass:

```scss
// Override Bootstrap Sass variable
$primary: tomato;

// Override Blue Web Sass variable
$theme: orange;

// Stylesheet for Blue Web. Already contains Bootstrap.
@import "~blue-web/dist/style";
```

An example of how to override CSS variables:

```css
:root {
    /* Override Bootstrap CSS variable */
    --bs-body-font-family: "Inter", sans-serif;

    /* Override Blue Web CSS variable */
    --blue-sidebar-bg: #333;
}
```
