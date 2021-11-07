# release
yarn login --registry https://registry.npmjs.org
yarn publish --registry https://registry.npmjs.org --access public --new-version 0.1.1 --tag beta
yarn tag add @signed/jest-probe-reporter@0.1.1 latest
yarn logout

# unpublish
npm login
npm unpublish @signed/jest-probe-reporter@0.1.0
npm logout
