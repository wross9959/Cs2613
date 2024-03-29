// @author Will Ross #3734692
// Date: 2021-09-26
// Course: Cs2613
// Assesment: Exploration Activity 2

//importing the required modules
const { MongoClient } = require('mongodb');
const readline = require('readline');
const fs = require('fs');


//creating the readline interface
function promptUser(prompt) {

    return new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(prompt, (input) => {
            rl.close();
            resolve(input);
        });
    });
}

//main function for calling the database and collection
async function main() {

    // Connection URI
    const uri = "mongodb://localhost:27017";
    
    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {

        // Connect to the MongoDB local host
        await client.connect();
        console.log('Connected successfully to server');

        // Connect to the database
        const db = client.db('DataStructuresAlgorithm');
        console.log('Welcome to the data structures and algorithms database\n');

        let on = true;
        collection = null;

        while(on){

            if(collection === null){
                await console.log('\nCurrently no Algorithm is selected\n');
            }
            else{
                await console.log('\nCurrent Algorithm: ' + collection.collectionName + '\n');
            }

            let operationChoice = await userChoice();

            if(operationChoice > 4 && collection === null){
                collection = await changeCollection(db);
            }
            
            switch(operationChoice) {
                case '1':
                    collection = await addCollection(db);
                    break;
                case '2':
                    collection = await changeCollection(db);
                    break;
                case '3':
                    await deleteCollection(db);
                    break;
                case '4':
                    await getCollections(db);
                    break;
                case '5':
                    await addDocument(collection);
                    break;
                case '6':
                    await updateDocument(collection);
                    break;
                case '7':
                    await deleteDocument(collection);
                    break;
                case '8':
                    await viewDocuments(collection);
                    break;
                case '9':
                    on = false;
                    break;
                default:
                    console.log('Invalid choice try again');
            }
            if(operationChoice > 0 && operationChoice < 9){
                await userConfirmation();
            }
        }

    } catch (e) {
        console.error(e);
    } finally {
        // Ensure that the client will close when you finish/error
        await client.close();
    }
}

// Function user input and choice
async function userChoice() {

    console.log('Choose an option:');

    // Algorithm options
    console.log('1. Create a new algorithm');
    console.log('2. Change algorithm');
    console.log('3. Delete a algorithm');
    console.log('4. View all algorithms');

    // Document options
    console.log('5. Add a language to the algorithm');
    console.log('6. Update a language to the algorithm');
    console.log('7. Delete a language to the algorithm');
    console.log('8. View all languages in the algorithm');

    // Exit option
    console.log('9. Exit');

    let input = await promptUser('Enter your choice: ');
    return input;
}

// Function to add a new collection (algorithm)
async function addCollection(db) {

    // Prompt the user to enter the name of the new collection
    let UserInput = await promptUser('Enter the name of the new Algothrim: ');

    try{
        // Check if the collection already exists
        if(await db.collection(UserInput).count() > 0){
            console.log('That algorithm already exists');
            return;
        }
       return await db.createCollection(UserInput);
        console.log('Algorithm created successfully');

    }catch(e){
        console.error(e);
    }
    
    
   

}

// Function to change the collection (algorithm)
async function changeCollection(db) {
    
    // Show all available collections (algorithms)
    await getCollections(db);
    try{
        const toReturn = await db.collection(await promptUser('Choose a algorithm: '));
        if(toReturn.count() === 0){
            console.log('That algorithm does not exist');
            return;
        }

        console.log('Algorithm changed successfully');
        
        return toReturn;
        
    } catch (e) {
        console.error(e);
    }
}


// Function to delete a collection
async function deleteCollection(db) {

    try{
        // Prompt the user to choose a collection to delete
        await getCollections(db);
        let UserInput = await promptUser('Choose a algothrim to delete: ');

        if(db.collection(UserInput).count() === 0){
            console.log('That algorithm does not exist');
            return;
        }

        if((await promptUser(`Are you sure you want to delete ${UserInput}? (Y/N): `)).toUpperCase() == 'Y') {
            
                await db.collection(UserInput).drop();
                console.log('Language deleted successfully');
        }

    }catch(err){
        console.error(err);
    }
    
    
}

// Function to get a list of all collections in the database (algorithms)
async function getCollections(db) {

    try{
        const collections = await db.listCollections().toArray();

        // Makes sure that if there is no collections it prints not collections found rather then '[]'
        if(collections.length == 0){
            console.log('No algorithms found');
            return;
        }
        // for each loop to get the name of the collections
        console.log('Current algorithms:');
        collections.forEach(collection => {
            console.log('\t- ' +collection.name);
        });
        

    }catch(e){
        console.error(e);
    }
    
}

// Function to add a document to a collection
async function addDocument(collection) {

    try{
        // Prompt the user to enter the name of the new collection 
        let lang = await promptUser('What language would you like to add: ');

        if(await collection.find( {Language: lang} ).count() > 0){
            console.log('That language already exist');
            return;
        }

        let filePath = await promptUser('Code file Path: ');
        let code = await addFile(filePath);
        let RunTime = await promptUser('Run Time input: ');
        let notes = await promptUser('Any notes: ');
        

        await collection.insertOne({Algorithm: collection.collectionName, Language: lang, Code: code, RunTime: RunTime, Notes: notes});
        console.log("The language was successful added");

    }catch(e){
        console.error(e);
    }
}

// Function to update a document in a collection
async function updateDocument(collection) {

    try{
        // Prompt the user to enter the name of the new collection 
        let lang = await promptUser('What language would you like to update: ');

        if(await collection.find( {Language: lang} ).countDocuments() === 0){
            console.log('There is no language with that name');
            return;
        }
        let updateFields = {};
        let filePath = await promptUser('Code file Path or put press enter to skip: ');
        if(filePath !== ''){

            let code = await addFile(filePath);
            updateFields.Code = code;
        }
        let runTime = await promptUser('Run Time input: ');
        if(runTime !== ''){
            updateFields.RunTime = runTime;
        }
        let notes = await promptUser('Any notes: ');
        if(notes !== ''){
            updateFields.Notes = notes;
        }
        
        if(Object.keys(updateFields).length > 0){
            await collection.updateOne({Algorithm: collection.collectionName, Language: lang}, { $set: updateFields });
            console.log("Item was successful added");
        }
        else{
            console.log('No changes were made');
        }
    }catch(e){
        console.error(e);
    }
}

// Function to delete a document
async function deleteDocument(collection) {


    // Prompt the user to choose a collection to delete
    await viewDocuments(collection);
    let lang = await promptUser('Choose a language to delete: ');

    if(await collection.find( {Language: lang} ).count() == 0){
        console.log('That langauge does not exist');
        return;
    }

    if((await promptUser(`Are you sure you want to delete ${lang}? (Y/N): `)).toUpperCase() == 'Y') {
        try{
            await collection.deleteOne({Algorithm: collection.collectionName, Language: lang});
            console.log('The language was deleted successfully');
        }catch(err){
            console.error(err);
        }
    }  
}

// Function to view all documents in a collection
async function viewDocuments(collection) {
    try {
        // Query the collection and print all documents
        const docs = await collection.find({},{projection: {_id: false}}).toArray();

        if (docs.length === 0) {
            console.log('No documents found in the collection.');
            return;
        }

        console.log('Found algorithm languages:');
        console.log('\n---------------------------------\n');
        docs.forEach(doc => {
            console.log(`Algorithm: ${doc.Algorithm}`);
            console.log(`Language: ${doc.Language}`);
            console.log(`Code:\n ${doc.Code} \nEnd of Code\n`);
            console.log(`Run Time: ${doc.RunTime}`);
            console.log(`Notes: ${doc.Notes}`);
            console.log('\n---------------------------------\n');
        });

    } catch (err) {
        console.error(err);
    }

}

// This functions needed so the user can see what they have done before being promted by the menu
async function userConfirmation() {
    // Promt the user to confirm to go back to menu
    await promptUser(`Press enter to go back to the menu:\n`);
}
// This function was so the user could add a file of code to the database it just puts the file into a string to be stored by mongodb
async function addFile(filePath) {
    try{
        const fileContent = await fs.readFileSync(filePath, 'utf8');
        return fileContent;

    }catch(e){
        console.error(e);
    }
}

// Execute the main function
main().catch(console.error);
