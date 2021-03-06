import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { landing_image_2, tick_orange, tick_purple } from '../../assets/index'
import {tick} from '../../assets/index'
import Button from './Button';

const Wrapper = styled.div`
padding:145px 93px;
display: flex;
justify-content:space-between;
flex-direction:${props=>props.imageLeft ? 'row-reverse':'uset'};
.text{
  width:50%;
}
h2{
  color: #1C0F61;
  margin-bottom:42.5px;
  font-size:48px;
  font-weight:700;
  width:550px;
  line-height:72px;
 .orange{
color: #FB9204;
 }
 .purple{
color: #CC0DF2;
 }
 .blue{
   color: #0639F9;
 }
}
li + li{
  margin-top:30.5px;
}
.hero{
  width:51.5%;
} 

ul{
  margin-bottom:118px;
}

@media (max-width:1200px){
  h2{
    margin-bottom: 42.5px;
    font-size: 40px;
    width: 433px;
    line-height: 49px;
}

}

@media (max-width:1024px){
  padding: 100px 45px;
  h2{
    margin-bottom: 42.5px;
    font-size: 32px;
    width: 410px;
    line-height: 49px;
}
}

@media (max-width:840px){
  h2{
    font-size: 28px;
    width: 332px;
    line-height: 49px;
}
}

@media (max-width:768px){
  flex-direction:column-reverse;
  padding: 40px 45px;
  .text{
    width:100%;
    h2{
    font-size: 30px;
    width: 76%;
    line-height: 49px;
    }
  }
  .hero{
    width:100%;
  } 
  
  ul{
    margin-bottom:60px;
  }

}

@media (max-width:500px){
    .text{
      h2{
    font-size: 20px;
        line-height: 31px;
    width: 89%;
  }
}
button{
  margin: auto;
}

}

`

const LiWrapper = styled.li`
  color: #4E4B66;
  font-size:18px;
  display: flex;
  align-items:center;
  
  img{
    height:36px;
    width:36px;
    margin-right:12px;
  }
  @media (max-width:768px){
    font-size:16px;
    img{
      height:25px;
      width:25px;
    }
}
`
const Li = ({value,tickColor}) => {
  return (
    <LiWrapper>
     {tickColor === 'blue' ? <img src={tick} alt="" /> :null}
     {tickColor === 'orange' ? <img src={tick_orange} alt="" /> : null}
     {tickColor === 'purple' ? <img src={tick_purple} alt="" /> : null}
       <span>
        {value}
        </span>
    </LiWrapper>
  )
}

const Features = (
  {
    image,
    tickColor,
    title,
    imageLeft,
    listArray = [
    ]
  }
) => {
  let newTitle = title;
  const words = title.split(" ");
  if (tickColor === 'blue') {
    newTitle = words.map(
      word => {
        if (word === words[3] || word === words[4]) {
          return <span className='blue'> {word}</span>
        }
        else return ' ' + word + ' '
      }
    )

  }

  if (tickColor === 'orange') {
    newTitle = words.map(
      word => {
        if (word === words[words.length - 1] || word === words[words.length - 2]) {
          return <span className='orange'> {word}</span>
        }
        else return ' ' + word + ' '
      }
    )

  }
  
  if (tickColor === 'purple') {
    newTitle = words.map(
      word => {
        if (word === words[words.length - 1] || word === words[words.length - 2]) {
          return <span className='purple'> {word}</span>
        }
        else return ' ' + word + ' '
      }
    )

  }
  return (
    <Wrapper imageLeft={imageLeft}>
      <div className='text'>
        <h2>{newTitle}</h2>
        <ul>
          {listArray.map(
            list => <Li
              value={list}
              tickColor={tickColor}
            />
          )}
        </ul>
        <Button text='Get Started' />
        
      </div>
      <img
        className='hero'
        src={image || landing_image_2}
        alt="landing_image_2" />
    </Wrapper>
  )
};
Features.propTypes = {
  image: PropTypes.string,
  tickColor: PropTypes.string,
  title: PropTypes.string,
  listArray: PropTypes.object.isRequired,
};
export default Features;