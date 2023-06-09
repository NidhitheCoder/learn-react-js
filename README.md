# learn-react-js

Learn some reactjs with the help of reactjs documents

## React Js

- React is a javascript library for building user interfaces.
- Design simple views for each state in your application, and react will efficiently update and render just the right components when your data changes.
- Build encapsulated components that manage their own state, then compose them to make complete UIs.

### A simple component

- React components implement a `render` method that takes input data and return what to display. This example uses an XML like syntax called JSX. Input data that is passed into the component can be accessed by `render()` via `this.props`.

Simple component example :-

```
class SayHello extends React.Component {
    render () {
        return <div>hello {this.props.name}</div>
    }
}

root.render(<SayHello name="Sara" />);
```

### A stateful component

- A component can maintain internal state data that accessed via this.state. When a component's state data changes, the rendered markup will be updated by re-invoking `render()`.

-

```
    class Timer extends React.Component {
            constructor(props) {
            this.state = { seconds: 0}
        }

        tick() {
            this.setState((state) => ({
                seconds: state.seconds + 1
            }))
        }

        componentDidMount() {
            this.interval = setInterval(() => this.tick(), 1000)
        }

        componentWillMount() {
            clearInterval(this.interval)
        }

        render() {

            return(
                <div>seconds: {this.state.seconds}
            )
        }
    }

    root.render(<Timer />)

```

### JSX

- `const element = <h1>hello world</h1>;`
- JSX is an extension of javascript.
- JSX is a template language.
- React does'nt require using jSX, but most people find it as a helpful as a visual ait when working with ui inside the javascript code.
- It also allows react to show more useful error and warning messages.

### Add React to a website

- Reference: https://legacy.reactjs.org/docs/add-react-to-a-website.html
- You can place a container <div> like this anywhere inside the <body> tag.
- Steps

  - Add a div tag with a unique ID property. unique id property helps to find the div from the javascript code later.
  - Add needed script tags for react js.

    ```
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="like_button.js" ></script>

    ```

  ### Create React App

  - Create react app is the best way to start building single page applications.
  - it setup in your development environment so that you can use the latest javascript features, provide a nice developer experience and optimizes app production.
  - you need node >= 14.0.0 and npm >= 5.6

  - To create a react project,
    ```
        npx create-react-app my-app
        cd my-app
        npm start
    ```

### Next Js

- Next js is a popular and lightweight framework for static and server rendered applications build with react . It includes styling and routing solutions out of the box, And assume that we are using node.js as the server environment.
- Next js is a flexible react framework that gives you building block to create fast web applications.
- Next js handles the tooling and configuration needed for react and provide additional structures, features, and optimizations for your application.
-

: Few things for building web applications.

- User interface
- Routing
- Data fetching
- Rendering
- Integrations
- Infrastructure
- Performance
- Scalability
- Developer Experience

### Gatsby

- Gatsby is the best way to create static websites with react.
- Gatsby lets you use react components but outputs are pre-rendered HTML and CSS to guarantee the fastest load-time.
- You can pulling data from headless CMS easily.
- Gatsby is an open-source static site generator build on top of Node.js using react and Graph-SQL.
-

### Flexible tool chains

1. Neutrino- It combines the power of webpack with the simplicity of the presets, and includes a presets of react app and react components.
2. Nx - It is a toolkit for full-stack monorepo development, with build in support for react, next js and express and more.
3. Parcel - Parcel is a fast, zero configuration web application bundler that works with react.
4. Razzle - - Razzle is a server-rendering framework that doesn't require any configuration, but offers more flexibility that next js.

### creating a toolchain from scratch

- A javascript build chain basically typically consist of:
  1. Package manager - A package manager, such as `yarn` or `npm`. It lets you take advantage of vast ecosystem of third-party packages, and easily install or update them.
  2. Bundler - A bundler, such as a `webpack` or `parcel`. It lets you write modular code and bundle it together into small packages to optimize load time.
  3. Compiler - A compiler such as `babel`. It lets you write modern javascript that still works in older browser.

## CDN Links

- A CDN(Content Delivery Network) is a network of servers that distributes content from an origin server throughout the world by caching content to close where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and store elsewhere as needed.

- Both react and reactDOM are available over a CDN.

  ```
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  ```

- The versions above are only meant for development, and are not suitable for production.

- Minified production version for react:

  ```
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

  ```

- Why the crossorigin attribute ?
  - A crossorigin attribute sets the mode of the request to an HTTP CORS request.
  - A webpage often make a requests to load resources on other servers.
  - A crossorigin request is a request for a resource from another origin.A resource can be a stylesheets, iframes, images, fonts or a script.
  - CORS is an HTTP-header based mechanism that allows a server to indicate any origins (domains. schemes, or port) other that its own from which a browser should permit loading resources.
  - `<script crossorigin src="..."></script>`
  - We need to set crossorigin attribute when serve react from a CDN.

### Release channels

- use-cases of react's release channels

1. Latest - latest is for stable, semver react releases. It's what you get when you install react from npm. user this for all user applications.

-

2. Next- next track the main branch for the react source code repository. use this for integration testing between react and third party projects.

3. Experimental - Experimental includes experimental apis and features that are'nt available in the stable releases. these also track the main branch, but with additional branch features flags turned on.

- All releases are published to npm, but only latest uses semantic versioning.
- The only officially supported release channel for user-facing applications is latest.

### JSX

- JSX is a syntax extension to javascript.JSX reminds you of a template language, but it comes with the full power of javascript.
- JSX produces react Elements.
- A component that contain both login and template/markup in a single file.
- React does'nt require using JSX, but most people must find it helpful as a visual aid when working with UI inside the javascript code. It also allows react to show more useful error and warning messages.
- you can put any valid javascript expressions inside the curly braces in JSX.
- After compilation, JSX expressions become regular javascript functions calls and evaluate to javascript objects. This means you can use JSX inside if statement and for loops, assign into a variables, accept it as arguments, and return it from functions.
- You may use quotes to specify string literals as attributes.

### Elements

- Elements are smallest building block of react apps.
- An element describes what you want to see on the screen.
- `const element = <h1>Hello World!</h1>;`
- Unlike DOM elements react elements are plain objects, and are cheap to create.
- react DOM take care of updating the DOM to match the React elements.
- Elements are what components made of.
- React elements are immutable.
- Once you create an element you can't change its children or attributes.
- The only way to update the ui is to create a new element, and pass it to root.render().
- React DOM compares the element and its children to previous one , and only applies the DOM updates necessary bring the DOM to the desired state.

### Components

- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
- Components are like javascript functions. they accept arbitrary inputs(called "props") and return react elements describing what should appear on the screen.
- Always start component names with capital letter. React treats components stating with lowercase as DOM tags.

Javascript function component :-

```
function Welcome(props) {
  return<h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Smith">;

```

- ES6 class component :-

```
class Welcome extends React.component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

const element = <Welcome name="Sara">;
```

### Composing components
- Components can refer other components in their input.This lets us to use same component abstraction for any level of detail.
- whether you declare a component as a function or class , it must never modify its own props. such functions are called pure becouse they do not attempt to change their inputs, and always return the same result for the same inputs.
