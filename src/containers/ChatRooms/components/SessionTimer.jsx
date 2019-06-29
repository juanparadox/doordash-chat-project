import React from 'react';

export default class SessionTimer extends React.PureComponent {
    millisecondsElapsed = 0;
    minutesElapsed = 0;
    timerInterval;
    state = {
        elapsedTime: '0 minutes'
    }

    componentDidMount() {
        // Start tracking time
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    /** Starts the session timer */
    startTimer = () => {
        this.timerInterval = setInterval(() => {
            this.millisecondsElapsed += 1000;
            // Get minutes passed
            const minutesElapsed = Math.floor((this.millisecondsElapsed / 1000) / 60);
            // If minutes have changed, update
            if (minutesElapsed !== this.minutesElapsed) {
                this.setState({ elapsedTime: `${minutesElapsed} minutes` });
            }
            this.minutesElapsed = minutesElapsed;
        }, 1000)
    }

    render() {
        return (
            this.state.elapsedTime
        )
    }
}