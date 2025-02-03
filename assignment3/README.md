# Portfolio Blog Management App - Assignment Week 3
## Firebase

Firebase authentication and authorization, Routing with react-router, and date-fns and Firestore server timestamps to add a wait time to each ticket
This is a simple portfolio blog post management application built with React. 

## Features

- **Create**: Add new blog post.
- **Read**: View all blog posts in.
- **Update**: Edit a blog post.

## Technologies Used

- **React**: For building the app.
- **TypeScript**: For type safety.
- **PropTypes**: For prop validation.
- **Tailwind CSS**: For styling the components.
- **Firebase**: For handling authentication, authorization 
- **(Firestore Database)**: Data store and management.

## Application Structure

The app consists of the following components:

- **Header**: Displays the title and description of the app with a button to open the form.
- **PostCard**: Displays individual blog posts with the option to edit them.
- **DialogForm**: A modal form used to add or edit a blog post.
- **Layout**: The main component that manages the state of the posts, form data, and dialog visibility.

- **Dashboard**: Page showing all posts, adding them and logout (Main Page).
- **Login**: Login logic to firebase.
- **AuthContext**: A kinda middleware to check is authenticated and set currentUser.
- **Firebase Config**: Firebase configuration file.

``` bash
FOLDER STRUCTURE

/src

  /components
    Header.tsx
    PostCard.tsx
    DialogForm.tsx
    
  /context
    authContext.tsx
    
 /dashboard
    page.tsx
    
 /firebase
    config.ts
 
 /login
    page.tsx
    

  /store
    /posts
      /__tests__
        postsSlice.test.js
      postsSlice.ts
    store.ts

  layout.tsx
 
```

## Setup

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/nathanmbicho/moring-silver-class.git
```

### 2. Install dependencies
Navigate to the project folder name ASSIGNMENT3

```bash
cd moring-silver-class/assignment3
```

Run npn install to install the dependencies

```bash
npm install
```

### 3. Run the app
After installing dependencies, you can run the app

```bash
npm run dev
```

### 3. Run tests
You can run the tests

```bash
npm test
```


The application will open in your browser at http://localhost:3000 (in you are not using this port).

The login credentials are
```bash
email: {'my-school-email'}
password: 'password'
```

## Contributing

Feel free to fork this repository Mark and submit any pull request with any improvements. Thank you.

## License

This project is licensed under the [MIT License](https://mit-license.org) 🚀🚀🚀.