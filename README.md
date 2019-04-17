# Front End Repo for Black Hole


  When A user goes to the login screen, the user has the option to register if they are new, or login if they have already gone through the process of registering. The user will be greeted by a list of all their venting posts that they have written. The user will be able to see on each post how much time their post has left before being sucked into the blackhole. 
  The frontend portion of the BlackHole project is using react to create the project and redux to manage and update the state. To render different components to the screen, we are conditionaly rendering components.


## Action folder

|Folder name|File Name|Description|
|---|---|---|
|actions|`index.js`|index.js holds the user login operations along with all other CRUD operations|


## Components folder

|Folder name|File Name|Description|
|---|---|---|
|DumpContainer|`DumpContainer.js`| DumpContainer is a statefull class component that is the heart of the application, and deals with the logic of switching what's viewed|
|Home|`index.js`|Home folders index.js file is the main screen that users first see before logging in|
|Login|`login.js`|Login folders login.js file will conditionally render a login or register form depending on if you've registered or not before|

## Reducer folder

|Folder name|File Name|Description|
|---|---|---|
|reducers|`chred.js`|chred.js contains the switch statements for all CRUD operations that are needed|
|reducers|`combo.js`|combo.js combines the index.js and index.js files|
|reducers|`index.js`|index.js contains the switch statement for all login operations|

## Utilities folder

|Folder name|File Name|Description|
|---|---|---|
|Utilities|`index.js`|the index.js file contains an axios.create function that creates a headers that sets the authorization to a token set in local storage|

