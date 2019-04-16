# Front End Repo for Black Hole

The frontend portion of the BlackHole project is using react to create the project and redux to manage and update the state of the pro

## Action folder

|Folder name|File Name|Description|
|---|---|---|
|actions|`chact.js`|chact.js is used to fulfill all CRUD operations|
|actions|`index.js`|index.js holds the user login operations|


## Components folder

|Folder name|File Name|Description|
|---|---|---|
|DumpContainer|`dump.js`| DumpContainer folders dump.js file allows for you to update any post entry submittion |
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

