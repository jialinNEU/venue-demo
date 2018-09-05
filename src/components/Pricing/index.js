import React, { Component } from 'react';

import Zoom from 'react-reveal/Zoom';
import MyButton from '../utils/MyButton';

import './pricing.css';

class Pricing extends Component {
    
    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Unde et in. Adipisci dolorem vitae nulla architecto sed eum earum voluptas facilis. Aut natus distinctio consequuntur libero quae. Et sunt qui minima nisi. Similique dolor nihil omnis sapiente et.',
            'Assumenda dolor possimus pariatur. Unde ut at veritatis. Mollitia quia corporis doloremque qui nostrum voluptatem quia corporis perferendis. Rerum ut in maiores eos. Ipsam sit debitis architecto dolores est ut. Est nesciunt eius impedit minima deleniti libero eum.',
            'Odit nulla aliquam consequatur beatae dolore amet itaque. Et velit quia. Illo ea vel occaecati est magnam. Sint officiis veritatis voluptatem earum. Quia consequatur sunt possimus. Et quis ratione quaerat.'
        ],
        linkto: ['http://baidu.com', 'http://baidu.com', 'http://baidu.com'],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom
                key={i}
                delay={this.state.delay[i]}
            >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )


    render() {
        return(
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;