import React from 'react';
import CardList from '../../components/card-list/card-list';


class Homepage extends React.Component {

    state = {
        options: [
            {
                name: 'Data Structures',
                linkUrl: 'ds/'
            },
            {
                name: 'Algorithms',
                linkUrl: 'algo/'
            },
            {
                name: 'Machine Learning',
                linkUrl: 'ml/'
            }
        ]
    }
    render() { 
        return ( 
            <div className='Content'>
                <center>
                    <h1>Algorithm Playground</h1>
                </center>
                <CardList options={this.state.options} />
            </div>
        );
    }
}
 
export default Homepage;
