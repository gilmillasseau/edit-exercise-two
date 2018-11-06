## Part 2 - Let's build our folio, with React

[![Screenshot-2018-11-06-at-23-18-19.png](https://i.postimg.cc/t4d7kBL3/Screenshot-2018-11-06-at-23-18-19.png)](https://postimg.cc/cvHs4B1C)

### Workshop resources:

- Graph CMS: https://app.graphcms.com

- Chat room: https://tlk.io/edit-portugal

### Requirements

- Node 8.11.2 LTS
- Text editor (sublime, vscode, atom etc)
- Bash terminal (git bash for windows)

### Get started

`npx create-react-app edit-exercise-one`

This will create a folder on called `edit-exercise-one`

`cd edit-exercise-one && npm start`

### First we need data

#### GraphCMS overview and setup

- Login into GraphCMS

- Create a `New Project` from `Scratch`

- After that we can start building our models

Create `Technologies` from `enum` type:

```
enum TechnologiesList {
    Node
    React
    Angular
    Jquery
    Html
    Css
    Sass
    Graph
  }
```

Create `Project` from `model` type:

```Project
type Project @model {
    description: String @defaultValue(value: "Project description")
    projectImages: [Asset!]! @relation(name: "AssetProjectProjectImages")
    technologies: [TechnologiesList!]
    title: String! @defaultValue(value: "Project title")
}
```

### Try to connect your app with Graph API

The goal of the React challange is to create an app in which you can showcase your own projects on a list, and then access each one individually to check the details on a detail page.

The list is already implemented and the implementation will be explained, then it's up to you to create the detail page and connect it to the GraphQL server.

First of all, duplicate the `.env` file, rename it to `.env.local` and fill it with the GraphCMS token and ID:

```
REACT_APP_GRAPH_CMS_FOLIO_TOKEN=<your token>
REACT_APP_GRAPH_CMS_FOLIO_ID=<your graphcms id>
```

### Extra feature

Build project detail view!

### Congrats! 🎉

- You have built your first react app
- You have your folio live!
