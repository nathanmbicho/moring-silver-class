# Portfolio Blog Management App - Assignment Week 2
## REDUX & JEST

This is a simple portfolio blog post management application built with React. It provides required features to CREATE, READ AND UPDATE blog posts. The app is designed with a tailwind UI and allows users to manage blogs, view them, and edit.

## Features

- **Create**: Add new blog post.
- **Read**: View all blog posts in.
- **Update**: Edit a blog post.

## Technologies Used

- **React**: For building the app.
- **TypeScript**: For type safety.
- **PropTypes**: For prop validation.
- **Tailwind CSS**: For styling the components.
- **Redux**: For managing all shared states.
- **Jest**: For testing all reducers.

## Application Structure

The app consists of the following components:

- **Header**: Displays the title and description of the app with a button to open the form.
- **PostCard**: Displays individual blog posts with the option to edit them.
- **DialogForm**: A modal form used to add or edit a blog post.
- **App**: The main component that manages the state of the posts, form data, and dialog visibility.

``` bash
FOLDER STRUCTURE

/src

  /components
    Header.tsx
    PostCard.tsx
    DialogForm.tsx

  /store
    /posts
      /__tests__
        postsSlice.test.js
      postsSlice.js
    store.ts

  layout.tsx
  page.tsx
```

## Setup

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/nathanmbicho/moring-silver-class.git
```

### 2. Install dependencies
Navigate to the project folder name ASSIGNMENT2

```bash
cd moring-silver-class/assignment2
```

Run npn install to install the dependecies

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

## Contributing

Feel free to fork this repository Mark and submit any pull request with any improvements. Thank you.

## License

This project is licensed under the [MIT License](https://mit-license.org) 🚀🚀🚀.