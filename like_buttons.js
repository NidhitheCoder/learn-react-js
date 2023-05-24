const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: false };
  }

  render() {
    if (this.state.like) {
      return "You liked this.";
    }

    return e(
      "button",
      { onclick: () => this.setState({ like: true }) },
      "like"
    );
  }
}

const domContainer = document.querySelector("#like_button_container");

const root = reactDOM.createRoot(domContainer);
root.render(e(LikeButton));
