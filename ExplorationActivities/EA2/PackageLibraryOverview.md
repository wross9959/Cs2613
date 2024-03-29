# MongoDB Exploration Activites

- [MongoDB Exploration Activites](#mongodb-exploration-activites)
  - [Which package/library did you select](#which-packagelibrary-did-you-select)
  - [What is the package/library](#what-is-the-packagelibrary)
    - [What purpose does it serve](#what-purpose-does-it-serve)
    - [How do you use it](#how-do-you-use-it)
  - [What are the functionalities of the package/library](#what-are-the-functionalities-of-the-packagelibrary)
    - [Examples from my code](#examples-from-my-code)
  - [When was it created](#when-was-it-created)
  - [Why did you select this package/library](#why-did-you-select-this-packagelibrary)
  - [How did learning the package/library influence your learning of the language](#how-did-learning-the-packagelibrary-influence-your-learning-of-the-language)
  - [How was your overall experience with the package/library](#how-was-your-overall-experience-with-the-packagelibrary)
    - [When would you recommend this package/library to someone](#when-would-you-recommend-this-packagelibrary-to-someone)
    - [Would you continue using this package/library? Why or why not](#would-you-continue-using-this-packagelibrary-why-or-why-not)

## Which package/library did you select

For Exploration Activity 2 I chose to look into basic database managment. When researching online I came across `MongoDB` for Node JS. I read over the documentation and came up with the idea of a Data Struture and Algorithms database.

## What is the package/library

MongoDB is a general purpose document database that is more suited for more modern day applications. With mongoDB you can develop databases quick and easy using a NodeJS driver or even using the terminal.

### What purpose does it serve

MongoDB is currently growing as one of the most wanted databases in the world due to its easabily for developers to store, manage and gather data when creating powerful applications.

### How do you use it

There are a couple of things the user must have done before running the program.
If you don't have Mongodb for NodeJS downloaded you must:

1. Go to MongoDB.com for there downloading manual
   - [Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
   - [MacOS](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
   - [Linux](https://www.mongodb.com/docs/manual/administration/install-on-linux/)
2. Go to Mongosh for the downloading manual for shell install [Manual](https://www.mongodb.com/docs/mongodb-shell/install/#std-label-mdb-shell-install) 
3. Once MongoDB is install go into mongoDBs compass application.
4. Press connect (this will create a local server on your computer)
5. Then once complete go to terminal and run this command for Node Js `npm init -y` and `npm install mongodb`

For my project, I used MongoDBs CRUD operations and built a Node JS driver from them. My program was designed for all CRUD operations when it comes to using a database for data structures and algorithms.

## What are the functionalities of the package/library

Using MongoDB programmers can do the following:

- Create Databases
- Create Collections
- Insert Data
- Find Data
- Data Query's
- Data Sorting
- Deleting
- Dropping Data
- Update Data
- Limit Data
- Join Data

More can be found on [MongoDB](https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial#:~:text=as%20a%20driver.-,MongoDB%20Node.,and%20observations%2C%20among%20other%20features.&text=You%20can%20create%20a%20database,fully%20managed%20cloud%20database%20service.)

### Examples from my code

```js

// Connection to MongoDB server
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

```

```js
    // Create a collection
    await db.createCollection('QuickSort');
```

```js
    // Get a collection
    const collection = db.collection('QuickSort');
```

```js
    // Get a collection
    const collection = db.collection('QuickSort');
```

```js
    // Insert Operations

    // One
    await collection.insertOne({ your: 'document' })

    // Many
    await collection.insertMany([{ doc1 }, { doc2 }, ...])
```

```js
    // Find Operations

    // One
    await collection.findOne({ yourQuery: 'value' })

    // Many
    await collection.find([{ yourQuery: 'value' }, {yourQuery: 'value2'}]).toArray()
```

```js
    // Update Operations

    // One
    await collection.updateOne({ yourQuery: 'value' }, { $set: { yourField: 'newValue' } })

    // Many
    await collection.updateMany({ yourQuery: 'value' }, { $set: { yourField: 'newValue' } })

```

```js
    // Delete Operations

    // One
    await collection.deleteOne({ yourQuery: 'value' })

    // Many
    await collection.deleteMany([{ yourQuery: 'value' }, {yourQuery: 'value2'}])
```

## When was it created

MongoDBV was first created in 2009 and has quickly grown to become one of the most wanted databases in the world.

## Why did you select this package/library

I chose MongoDB because I wanted to look into more full stack websites and applications with storing data. I have an intrest in big data and maybe even working in data scince when im done school so I took this EA as an opportunity to learn more.

## How did learning the package/library influence your learning of the language

I learn alot more with asynchronous functions due to the calls in the database with mongoDB, I have had my fair share with await functions. Going into Cs2613 I was never a big fan of JavaScript, especially with asynchronous functions. Doing this EA it did grow on me and how powerful asynchronous functions can be.

## How was your overall experience with the package/library

This library is great the coding community has tons of documents and examples online if you get stuck. Going forward when researching I did find a couple of other projects I would enjoy building with MongoDB with cloud databases and would highly suggest anyone look into their library.

### When would you recommend this package/library to someone

I would highly recommend MongoDB for any project big or small that involves databases. It's very beginner-friendly to users who have never done any database programming. There are tons of free resources online that showcase all the different functionalities of mongoDB.

### Would you continue using this package/library? Why or why not

Yes, just looking through the documentation I want to look into cloud data and using react create a fullstack website using mongoDB. I think mongoDB is a very good package to learn and create light weight databases.
