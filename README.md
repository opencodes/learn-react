Welcome to React JS!
===================


React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time.

 - Lots of people use React as the V in MVC. React abstracts away the DOM from you, giving a simpler programming model and better performance. 
 - React can also render on the server using Node, and it can power native apps using React Native. 
 - React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.

----------


###React Features

- **JSX** − JSX is JavaScript syntax extension. It isn't necessary to use JSX in React development, but it is recommended.
- **Components** − React is all about components. You need to think of everything as a component. This will help you to maintain the code when working on larger scale projects.
- **Unidirectional data flow and Flux** − React implements one way data flow which makes it easy to reason about your app. Flux is a pattern that helps keeping your data unidirectional.

###React Advantages
- React uses virtual DOM which is JavaScript object. This will improve apps performance since JavaScript virtual DOM is faster than the regular DOM.
- React can be used on client and server side.
- Component and Data patterns improve readability which helps to maintain larger apps.
- React can be used with other frameworks

###React Limitations
- React only covers view layer of the app so you still need to choose other technologies to get a complete tooling set for development.
- React is using inline templating and JSX. This can seem awkward to some developers.

### Installation & Setup

```
npm install -g babel
```
```
npm install -g babel-cli
```
Create application folder and run
```
npm init
```
We will use webpack bundler in these tutorials so let's install webpack and webpack-dev-server.
```
npm install webpack --save
```
```
npm install react --save
npm install react-dom --save
```
Install babel component to support es6
```
npm install babel-core
npm install babel-loader
npm install babel-preset-react
npm install babel-preset-es2015
```
Webpack Config
```
touch webpack.config.js
```
In webpack.config.js add below code
```
var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
```
In package.json add 
````
"start": "webpack-dev-server --hot"
````
And ***npm start*** to run the application.

index.html
```
<!DOCTYPE html>
<html lang = "en">
   <head>
      <meta charset = "UTF-8">
      <title>React App</title>
   </head>
   <body>
      <div id = "app"></div>
      <script src = "index.js"></script>
   </body>
</html>
```
App.jsx
```
import React from 'react';
class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}
export default App;
```
main.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
```
NOTE : 
Whenever you want to use something, you need to import it first. If you want to make component usable in other parts of the app, you need to export it after creation and import it in the file where you want to use it.

https://github.com/vasanthk/react-es6-webpack-boilerplate
