# Redux
./actions
./reducers
./store

# Components
./components

# Componts Structure

## App

- Handle Routes
- Full page CSS (default fonts, colors, etc)

./App.js
./App.css
./App.test.css


## Pages

- Handles full body, delegating each to each component it's own data fetch
- Just to organize headers, breadcrumbs, etc
- Avoid nested routes (makes hard to find which components are handled by each router) (use react components composition instead)
- Extract data from router to send to components


## Component Structure

- Each component has it's own folder.
- Each component has an `index.js` that exports every that could be exported from this folder (like an interface). Default exported should be a self-suficient component (like a container)
- Each file has the name of the `default export` component from it
- Each component has it's own Container connected to reducer.
- Every callback should be implemented using mapDispatchToProps (not inside the container component)
- It should be coded to be included into every part of the page (so, should not contains headers, breadcrumbs, etc)

./PostView/
./PostView/index.js
./PostView/AddComment.js
./PostView/PostView.js
./PostView/PostViewContainer.js
