import React from 'react';

class Board extends React.Component {
  render() {
    let className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}

class BoardSwitcher extends React.Component {
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === 0;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
