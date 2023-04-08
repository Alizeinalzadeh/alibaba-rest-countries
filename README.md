## Live Demo 

[http://blg.alizeinalzadeh.ir:3000](http://blg.alizeinalzadeh.ir:3000)

## Getting Started Using Docker

run below commands and enjoy:

```bash
sudo docker build -t alibaba-rest-countries .
```

```bash
docker run --publish 3000:3000 alibaba-rest-countries
```

## Runing Tests
There are unit tests for some of the components.
```bash
yarn test
```

## Getting Started Locally

First, Install packages:

```bash
yarn
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Note**

-   Don't use npm for running project

## Project Structure

**Adapter folder** <br>
All api requests are here, you can extends `BaseAxiosService` class for creating new api requests.<br>

**Components folder** <br>
All about components. Also there is a `ui` folder which includes all of project ui components such as _buttons_, _inputs_ and ...<br>
If you need specific component which is just using in a page, you can find it in `pages` folder. <br>

**Environments folder** <br>
Project env files. The main file is `environmnet.ts` file which includes translated values of main env files<br>

**Hooks folder** <br>
Well, there are some hook here.

**Interfaces folder** <br>
Some core interfaces which are general in all pages. note that components interfaces are located in their own folders. <br>

**Pages folder** <br>
All needed informations are available in [nextjs](https://nextjs.org/docs/basic-features/pages) documantion.<br>

**Public folder** <br>
All static files, including static images, logo, icons, fonts and ... should place here. <br>

**Styles folder** <br>
All global styles should be here. Typography styles and scss variables are defined in this folder. Also there is a `global.css` file which we use to quick override of some general classes of react libraries.<br>

**Types folder** <br>
Although we use typescript for the project some of installed libraries doesn't have any types definition, so we create types for them. <br>
Also you can use this command to solve this problem in more dynamic and standard approach: `yarn add @types/[library_name]`<br>

**Utils folder** <br>
There are many javascript utils which are used in many files of our project. You can find all of them here.

## Production Build

First, Install packages:

```bash
yarn
```

Then, run the build command:

```bash
yarn build
```

Finally, start the production server:

```bash
yarn start
```

visit http://localhost:3000 :)

## Frontend Technologies

<div style='display:flex; justify-content:flex-start; gap: "16px"'>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" height="50px" />
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"  height="50px" />
<img src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"  height="50px" />
<img src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"  height="50px" />
<img src="https://sass-lang.com/assets/img/styleguide/seal-color-reversed-c50d9b78.png"  height="50px" />
<img src="https://static.axios.com/img/axios-site/axios-placeholder-1x1.png"  height="50px" />
<img src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" height="50px" />
<img src="https://swapps.com/wp-content/uploads/2018/03/webpack.jpg" height="50px" />

</div>
