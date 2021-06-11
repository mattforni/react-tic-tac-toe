import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * In React terms the Square Component is a "controlled component" because
 * it receives values from Board and inform Board when it is clicked.
 */
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick({value: 'X'})}
      >
        {this.props.value}
      </button>
    );
  }
}

// The best approach is to store state in the parent component instead in children
class Board extends React.Component {
  // In JavaScript classes, you need to always call super when defining the constructor of a subclass
  // To “remember” things, components use state which is private to the component that defines it
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  /**
   * In React, it’s conventional to use on[Event] names for props which represent
   * events and handle[Event] for the methods which handle the events.
   *
   * Calling `setState` triggers a redraw of the component and all child components.
   */
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    /**
     * Passing props is how information flows in React apps, from parents to children.
     * We also pass a function so that clicking on the child updates state of the parent
     * When making a component multi-line add ( ) so JavaScript does not break after the return
     */
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

