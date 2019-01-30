# NgPackageProject

## Getting started

### Steps

```
npm install -g verdaccio
```

```
verdaccio
```

```
npm set registry http://localhost:4873
npm adduser --registry http://localhost:4873
```

```
npm install
```

```
npm run build:lib
cd projects/ngxx-validate/dist
```

```
npm publish --registry http://localhost:4873
```

Your package published

You can do this now

```
npm install ngxx-validate --save
```

### Don't forget this, npm registry default value:

```
npm set registry http://registry.npmjs.org
```

## Conguralations, your private package is ready.

### Helpful Documents

https://angularfirebase.com/lessons/build-an-angular-library-with-ngpackagr/
<br />
https://www.sitepoint.com/private-npm-packages-verdaccio/
