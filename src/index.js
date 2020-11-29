import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
    return (
        <button className="square"
                onClick={props.onTap}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i){
        return <Square value={this.props.squares[i]}
                       onTap={() => this.props.onTap(i)}
        />;
    }

    render(){
        return (
            <div>
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
    constructor(props){
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            step_num: 0,
            x_is_next: true
        }
    }

    render(){
        const history = this.state.history
        const current = history[this.state.step_num]
        const winner = calculateWinner(current.squares)
        const moves = history.map((step, move) => {
            const desc = move ? `Go to move # ${move}` : `Go to game start`
            const moves_coords = step.squares.reduce((accu, a_move, index) => {
                if (! a_move) return accu
                return accu + ` ${a_move} at coord ${index_to_coord(index)} |`
            },'')
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                    &nbsp;&nbsp;    <span>Moves: {moves_coords}</span>
                </li>
            )
        })


        let status
        if (winner) {
            status = `Winnder: ${winner}`
        } else {
            status = `Next player: ` + (this.state.x_is_next ? 'X' : 'O')
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onTap={(i) => this.handleTap(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

    handleTap(i){
        const history = this.state.history.slice(0, this.state.step_num + 1) //reset history
        const current = history[history.length - 1]
        const new_squares = current.squares.slice();
        if (calculateWinner(new_squares) || new_squares[i]) {
            return;
        }
        new_squares[i] = this.state.x_is_next ? 'X' : 'O'
        this.setState({
                history: history.concat([{squares: new_squares}])
                , step_num: history.length
                , x_is_next: ! this.state.x_is_next
            }
        )
        ;
    }

    jumpTo(step){
        this.setState({
            step_num: step,
            x_is_next: (step % 2) === 0
        })
    }

}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);

function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

/**
 * Convert index to row,col
 * 4 becomes 2, 2
 * @param index
 * @returns {(number)[]}
 */
function index_to_coord(index){
    const row = Math.floor(index / 3) + 1
    const col = index % 3 + 1
    return [row, col]
}

/**
 * Get last move based on current square and previous square
 * @param cur_sq
 * @param prev_sq
 */
function get_last_move(cur_sq, prev_sq){
    let last_move, last_move_index
    cur_sq.forEach((cur_move, index)=>{
        if (prev_sq[index] !== cur_move){
            last_move = cur_move
            last_move_index = index
        }
    })
    if (! last_move || !last_move_index) return false
    return [last_move, index_to_coord(last_move_index)]
}
