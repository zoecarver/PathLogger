### Path Logger
For babel.

### What is it
This makes it easier to read and debug the path of a babel visitor.

### How to use
Not yet published to npm.
1. `$ npm i git@github.com:pudility/PathLogger.git`
2. Import
```js
import * as PathLogger from 'PathLogger';
```
3. Start the server
```js
PathLogger.start;
//or
PathLogger.start.then(() => dosomething());
```
4. Log path
```js
PathLogger.log(path)

//log versions:
return {
//...
visitor: {
  //...
  SomeType(path){
    PathLogger.log(path)
    //...
```

5. Open Server (go to [localhost:8080](http://localhost:8080/))