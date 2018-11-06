## Part 2 - Let's build our folio, with React

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

#### GraphCMS challenge

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

### Extra feature

Let's add state to our component and build a like counter:

```
💙 (6)
```

### Congrats! 🎉

- You have built your first react app
- You have your folio live!
