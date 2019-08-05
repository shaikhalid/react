import React from 'react';
import './stack.scss';

import CoolBox from '../../components/rectangle/rect-traveling'




class Stack extends React.Component {
    constructor(props)   {
        super(props);

        this.size = 10;
        this.visualHeight = 500;
        this.rectHeight = this.visualHeight/this.size; this.rectWidth = 100;
        this.state = { x1:0, y1:0, x2:0, y2:this.visualHeight };
    
        this.stack = [];
        this.vStack = [];
        this.top = -1;
        this.value = null
    }

    setSize = (e) =>    {
        this.size = parseInt(e.target.value);
        this.rectHeight = this.visualHeight/this.size;
        this.forceUpdate();
    }

    getValue = (e) => {
        this.value = e.target.value;
    }

    push = (val) =>  {
        console.log('pushing')
        if (this.top===this.size)    {
            console.log('returned')
            return
        }
        this.top+=1;
        this.stack.push(val)
        this.vStack.push({  id:this.top, value:val,
                            h:this.rectHeight, w:this.rectWidth,
                            x1:this.state.x1, y1:this.state.y1,
                            x2:this.state.x2, y2:this.state.y2  })

        this.setState({
            y1: this.state.y1-this.rectHeight*2,
            y2: this.state.y2-this.rectHeight*2
        }, () => console.log(this.state.y1,this.rectHeight))
        
    }

    pushButton = () =>  {
        console.log('pushed')
        this.setState({
            changed : !this.state.changed
        })
        this.push(this.value)
    }

    render() { 
        return ( 
            <div>
                <div className='animated'>
                    <div className='b-a'>
                        {this.vStack.map(e => <CoolBox key={e.id} {...e}>{e.value}</CoolBox>)}
                    </div>
                </div>
                <div className='push-btn'>
                    <input type="text" onChange={this.setSize}/>
                    <input type="text" onChange={this.getValue}/>
                    <button onClick={this.pushButton}>
                        Push
                    </button>
                </div>
            </div>
        );
    }
}
 
export default Stack;