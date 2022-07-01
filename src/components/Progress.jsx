import React from 'react';
//import { Progress } from 'react-bootstrap';


class Progress extends React.component {
    render () {
        const { percentage } = this.props;
        const styleComponent = {
            width: percentage + '%'
        }
        return (
          <div className = 'progress mt-3 m-5'>
            <div className = 'progress-bar-striped progress-bar-animated bg-danger'
                 role = 'progressbar'
                 aria-valuenow = { percentage }
                 aria-valuemin = '0'
                 aria-valuemax = '100'
                 aria-label = 'progressbar'
                 style = { styleComponent }>
            </div>
        </div>
        )
    }
}

export default Progress;