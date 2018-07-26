import React, { Component } from "react";
import HeaderCom from "../common/header/header";
import SearchCom from "../common/search/search";
import FooterCom from "../common/footer/footer";
import FilterCom from "../common/filter/filter";
import { connect } from "react-redux";
import 'antd-mobile/dist/antd-mobile.css'; 
import "./home.css";
import BScroll from "better-scroll"

import {
    getHomeTitleAction,
    getHomeNavAction,
    getHomeAdAction,
    getHomeGoodsAction
} from "../../store/action/createAction";

import { Carousel, WingBlank } from 'antd-mobile'
// import IScroll from "iscroll";

class HomeCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1, 2],
            offset:0
        }
    }
    render() { 
        return (
            <div id="container">
                <HeaderCom title={this.props.title} />
                <SearchCom />
                <div id="wrapper">
                <div id="scroll">
                <div className="content-home">
                    <div id="nav">
                <WingBlank>
                <Carousel
                infinite
                >    
                      {
                          this.state.data.map((item,index)=>{
                            if (index === 0) {
                                return <ul key={index}>
                                    {   
                                        this.props.nav.map((item, index) => {
                                            console.log()
                                            if (index !== this.props.nav.length - 1) {
                                                return <li key={index}>
                                                    <img src={this.handleToImg(item.image_hash)} />
                                                    <span>{item.name}</span>
                                                </li>
                                            }
                                        })
                                    }
                                </ul>
                            } else {
                                return <ul className="nav_to" key={index}>
                                    {
                                        this.props.nav.map((item, index) => {
                                            if (index === this.props.nav.length - 1) {
                                                return <li key={index}>
                                                    <img src={this.handleToImg(item.image_hash)} />
                                                    <span>{item.name}</span>
                                                </li>
                                            }
                                        })
                                    }
                                </ul>
                            }
                          })
                      }
                        </Carousel>
                       
                    </WingBlank>   
                           
                    </div>
                    
                    <div id="ad">
                        <div className="ad_main">
                            <h3>品质套餐</h3>
                            <p>搭配齐全吃得好</p>
                            <p>立即抢购></p>
                            <img src="http://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png" />
                        </div>
                        <div className="ad_main">
                            <h3>{this.props.ad[0] ? this.props.ad[0].name : ""}</h3>
                            <p>{this.props.ad[0] ? this.props.ad[0].description : ""}</p>
                            <p>立即抢购></p>
                            <img src={this.handleToImg(this.props.ad[0] ? this.props.ad[0].image_hash
                                : "")} />
                        </div>
                    </div>
                    <div id="shoplist-title">
                        <h3>推荐商家</h3>
                    </div>
                    <FilterCom />
                    {/* 商品列表开始 */}
                    <div id="shoplist">
                        <ul>
                            {
                                this.props.items.map((item,index)=>{
                        
                                    // {item.restaurant.activities[0].description}
                                    return <li key={index}>
                                            <div className="list_t">
                                                <div className="shop_logo">
                                                    <img src={this.handleToImg(item.restaurant.image_path)}/>
                                                </div>
                                                <div className="list_t_r">
                                                    <div className="list_t_r_1">
                                                        <div>
                                                            <i className="brand">品牌</i>
                                                            <span>{item.restaurant.name}</span>
                                                        </div>
                                                        <span>保</span>
                                                    </div>
                                                    <div className="list_t_r_2">
                                                        <div>
                                                            <span>{item.restaurant.rating}</span>
                                                            <span>月售{item.restaurant.recent_order_num}单</span>
                                                        </div>
        
                                                        <span>{item.restaurant.delivery_mode?item.restaurant.delivery_mode.text:""}</span>
        
                                                    </div>
                                                    <div className="list_t_r_3">
                                                        <div>
                                                            <span>¥{item.restaurant.piecewise_agent_fee.rules[0].price}起送</span>
                                                            <span> {item.restaurant.  piecewise_agent_fee.tips}</span>
                                                        </div>
                                                        <div>
                                                            <span>{item.restaurant.distance/1000}km |</span>
                                                            <span> {item.restaurant.order_lead_time}分钟</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list_b">
                                                <div className="list_b_l">
                                                    <div className="list_b_l_t">
                                                        <span className="first">首</span>
                                                        <span>{item.restaurant.activities[0].description}</span>
                                                    </div>
                                                    <div className="list_b_l_b">
                                                        <span className="reduce">减</span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <div className="list_b_r">
                                                    <span>23个活动</span>
                                                </div>
                                            </div>
                                        </li>
                                })
                            }
                        </ul>
                    </div>
                        {/* 商品列表结束 */}
                    </div>
                    </div>
                    </div>  
                    <FooterCom />
                </div>

                )
            }
        
    handleToImg(hash){

        let imgUrl ="http://fuss10.elemecdn.com/";
        if(hash.indexOf("jpeg")>-1){
            return imgUrl+hash[0]+"/"+hash[1]+hash[2]+"/"+hash.slice(3)+".jpeg";
        }
        
        if(hash.indexOf("png")>-1){
            return imgUrl+hash[0]+"/"+hash[1]+hash[2]+"/"+hash.slice(3)+".png";
        }
            //7d8a867c870b22bc74c87c348b75528djpeg
            //http://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg
        }

    componentDidUpdate() {
        let myScroll = new BScroll("#wrapper",{mouseWheel:true,click:true})
        // myScroll.on("scrollEnd",function(){
        //     if(stop){
                
        
        //         this.props.getHomeGoodsUpdate( this.state.offset)
        //         this.setState({
        //             offset:this.state.offset+8
        //         })
        //     }
            
        // })
    }
    componentDidMount(){
                    /*
                        https://h5.ele.me
                        /restapi/bgs/poi/reverse_geo_coding
                        latitude=28.208012
                        longitude=112.881993
                    */
                    this.props.getHomeData();
                    
                }
            }
const mapDispatchToProps = dispatch=>({
                    getHomeData: function(){
                    getHomeTitleAction(dispatch)
                    getHomeNavAction(dispatch)
                    getHomeAdAction(dispatch)
                    getHomeGoodsAction(dispatch)
                   }
        })
const mapStateToProps = state=>({
                    title: state.homeReducers.title,
                    nav:state.homeReducers.nav,
                    ad:state.homeReducers.ad,
                    items:state.homeReducers.items
            })
            
            export default connect(mapStateToProps,mapDispatchToProps)(HomeCom)
            
            
            /*
app.use("/restapi",httpProxyMiddleware({
                    target: "https://h5.ele.me",
                changeOrigin:true
              }))
            
*/