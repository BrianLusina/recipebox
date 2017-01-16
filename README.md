# Recipe Box

A simple React app for recipes!

Here are sample user stories fulfilled:

+ I can create recipes that have names and ingredients.

+ I can see an index view where the names of all the recipes are visible.

+ I can click into any of those recipes to view it.

+ I can edit these recipes.

+ I can delete these recipes.

+ All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there.


Simply clone the project enter the directory and install the dependencies

``` sh
$ git clone https://github.com/BrianLusina/recipebox.git
$ cd recipebox
$ npm install
$ npm run start
```
> That is all that is required to have the application and start it.

## To run tests

``` sh
$ npm run test
```
> Runs tests for the application

## Deploy

Since this project is hosted on `surge.sh`, you will have to edit the domain in the package.json file and input your own
that is if you have a surge account.

``` json
"git":{
"scripts":{
	"pre-push":"npm run build&&surge --project ./build --domain <YOUR_DOMAIN_NAME>.surge.sh"
}
```
> This will work best if you have surge installed


Or, you could host this project on github-pages, in which case you will need to have gh-pages installed

``` sh
$ npm install -D gh-pages
```

After which you will require to add a `homepage` link in your package.json

``` json
homepage: "https://<YOURUSERNAME>.github.io/<REPO_NAME>"
```

In addition, add this to the `script` block in the `package.json` file

``` json
"deploy":"npm run build && gh-pages -d ./build"
```
> This will run a build and deploy the build folder to yout github pages account.


That is it, Enjoy!