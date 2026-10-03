# Cristovao Freitas Portfolio

A lightweight portfolio presenting skills, GitHub project previews, and playable browser games.

The Studio design uses warm mustard, forest, and wine surfaces, bold typography,
and playable games near the top. The current QA role is visible in the introduction;
professional history, skills, and all qualifications remain available below the
project collection. Earlier roles and certification details expand on demand.

## Local preview

Open `index.html` in a browser. No build step is required.

## GitHub Pages

The public `cristovao-dev/my-portfolio` repository publishes
[this site](https://cristovao-dev.github.io/my-portfolio/) from the `main`
branch and root folder.

Asset URLs in `index.html` include a release version to prevent cached styles
and scripts from mixing with updated HTML. Bump that version when publishing
changes to those assets.

The projects section is a curated selection of 12 repositories from
`cristovao-dev` as of September 2026. Private repositories appear as short
previews without source links. Do not automatically add every repository when
refreshing the list; add projects when they are ready to be shown. Project data
is in `script.js`, and the two live game links are in `index.html`.
