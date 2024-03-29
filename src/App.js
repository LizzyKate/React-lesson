import "./App.css";
import Complex from "./complex-props";
import Props from "./props";
import Search from "./search";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

function App() {
  return (
    <div className="property">
      <Props name="Sara" />
      <Complex
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Search />
    </div>
  );
}

export default App;
