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

  - Create react component.
