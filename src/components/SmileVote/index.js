import React from 'react';

import styles from './smileVote.module.css';


class SmileVote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: [
                {id: 1, smile: '😀', vote_count: 0},
                {id: 2, smile: '😃', vote_count: 0},
                {id: 3, smile: '😂', vote_count: 0},
                {id: 4, smile: '😢', vote_count: 0},
                {id: 5, smile: '😡', vote_count: 0},
            ],
            winnerSmile: '',
        }

        this.handleSmileVote = this.handleSmileVote.bind(this);
        this.handleShowResult = this.handleShowResult.bind(this);
    }

    handleSmileVote(id) {
        this.setState(prevState => ({
            smiles: prevState.smiles.map(smile =>
                smile.id === id ? {...smile, vote_count: ++smile.vote_count} : smile
            )
        }))
    }

    handleShowResult() {
        const maxCount = Math.max(...this.state.smiles.map(smile => smile.vote_count));
        const winnerSmile = this.state.smiles.find(smile => smile.vote_count === maxCount).smile;
        this.setState({winnerSmile});
    }

    render() {
        return(
            <div className={styles.smile_vote_block}>
                <ul>
                    {this.state.smiles.map(smile => (
                        <li key={smile.id} className={styles.list_elem} onClick={() => this.handleSmileVote(smile.id)}>
                            <div className={styles.smile_item}>{smile.smile}</div>
                            <div className={styles.smile_count}>{smile.vote_count}</div>
                        </li>
                    ))}
                </ul>
                <button className={styles.btn_show_vote_result} onClick={this.handleShowResult}>Show Result</button>
                {this.state.winnerSmile
                    ?
                        <div className={styles.smile_winner}>Winner: {this.state.winnerSmile}</div>
                    :
                    <></>
                }
            </div>
        )
    }
}

export default SmileVote;