import React ,{Component} from 'react';
import {Socialmedia,Social,Icon,SocialDesc,Span,SpanInfo} from './style.js';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

class SocialMedia extends Component
{


    state ={
        social:[]
    }

    componentDidMount(){
        axios.get('js/data.json').then(res => {this.setState({social:res.data.social})})
    }

    render(){
        const {social}=this.state;
        const SocialList=social.map((SocialItem) => {

                return(
                   <Social item={SocialItem.id} key={SocialItem.id}>
                        <Icon className={SocialItem.icon}></Icon>
                        <SocialDesc>
                            <Span>{SocialItem.title}</Span>
                            <SpanInfo>{SocialItem.body}</SpanInfo>
                        </SocialDesc>
                  </Social>

                )
        })
        return (
            <Socialmedia>

                {SocialList}

            </Socialmedia>
        );

}
}
export default SocialMedia;
