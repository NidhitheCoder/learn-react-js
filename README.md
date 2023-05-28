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
