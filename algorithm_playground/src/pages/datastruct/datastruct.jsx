import React from 'react';
import CardList from '../../components/card-list/card-list';


class dataStruct extends React.Component {
    state = {
        options: [
            {
                name: 'Stack',
                linkUrl: 'stack'
            },
            {
                name: 'Queue',
                linkUrl: 'queue'
            },
            {
                name: 'Linked List',
                linkUrl: 'll'
            }
        ]
    }
    render() { 
        return ( 
            <div className='Content'>
                <center>
                    <h1>Data Structures</h1>
                </center>
                <CardList options={this.state.options} />
            </div>
        );
    }
}
 
export default dataStruct;
