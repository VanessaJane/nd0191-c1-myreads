# MyReads Project

MyReads is a web application that provides the ability to display a list of books by category, corresponding to the bookshelves "Curently Reading", "Want to Read" and "Read". Besides, the function of searching books by keywords is also provided. When using this application, users can arbitrarily switch categories of books.

This project is completely built on the foundation powered by Udacity, which can find [here](https://reactjs.org/docs/create-a-new-react-app.html).

## How to build

1. Pre-requisites:
   To be able to run this source code, please make sure the following stuffs are installed on your device:
   - git
   - node.js and npm (or yarn)
2. Clone repo:

   ```bash
   git clone https://github.com/VanessaJane/nd0191-c1-myreads.git
   ```

3. Install and run the app:

   - Using npm

   ```bash
   cd nd0191-c1-myreads/starter

   npm install #install all dependencies

   npm start #start the app
   ```

   - Using yarn

   ```bash
   cd nd0191-c1-myreads/starter

   yarn install #install  all dependencies

   yarn start #start the app
   ```

## Source code architecture

```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── .gitignore
├── LICENSE.txt
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
    │   ├── BookDetails.js # render a book card, includes title, thumbnail, and authors, ...
    │   ├── BookShelf.js # reader a shelf display in main page. Can be "Currently Reading", "Want to Read" or "Read".
    │   ├── ListBooks.js # List of book shelves, the main view.
    │   ├── SearchPage.js # render the search page. Includes a search box, and a list of search results.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

Backend Server is hosted by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is my first project using ReactJS, and was an exercise during my participation in [React Udacity NanoDegree](https://learn.udacity.com/nanodegrees/nd019). After the review is approved, I will not continue working, maintain this repository any more.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## License

See [Udacity's license](starter/LICENSE.txt).
