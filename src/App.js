import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {
  class CommentC extends React.Component {
    render() {
      return <div>class component Naturally, I agree with this article.</div>;
    }
  }
  return (
    <div>
      <Article />
      <CommentC />
      <Comment />
    </div>
  );
}

export default App;
