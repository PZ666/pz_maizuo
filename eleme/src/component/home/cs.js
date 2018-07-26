import React,{Component} from "react";
import { Carousel, WingBlank } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'; 

export default class CS extends Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
      render() {
        return (
          <WingBlank>
            <Carousel
              autoplay={true}
              infinite
        
            >
              {this.state.data.map(val => (
              
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                  />
              ))}
            </Carousel>
          </WingBlank>
        );
      }
}