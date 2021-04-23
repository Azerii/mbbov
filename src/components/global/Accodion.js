import React,{useState} from 'react'
import styled from 'styled-components'
import {stroke} from '../../assets/index'

const Wrapper = styled.div`
  .question{
    width:880px;
    margin:2rem auto;
    height: 96px;
    background: #F4F2FD;
    display: flex;
    align-items: center;
    padding:0px 48px;
    cursor: pointer;
    justify-content:space-between;
    font-weight: 500;
    font-size: 22px;
    color: #1C0F61;

  }

  .question:hover{
    background: #f4f2fd5b;
  }
  .answer{
    width:880px;
    padding:20px 48px;
    margin:auto;
    display: ${props=> props.isShow ? 'block' : 'none'}
  }
  .ans{
    font-weight: 500;
    font-size: 18px;
    color: #1C0F61;
  }
  @media (max-width: 480.98px) {
    .question,.answer {
      width: auto;
    }
   .question img {
      margin-left: 1rem;
    }
    .question{
      font-size: 18px;
    }
    .answer{
      font-size: 15px;
    }
  }
  @media (min-width: 481px) and (max-width: 767.98px) {
    .question,.answer {
      width: auto;
    }
   .question img {
      margin-left: 1rem;
    }
    
  }
  @media (min-width: 768px) and (max-width: 1023.98px){
    .question,.answer {
      width: 709px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1199.98px){}
  `



const Accordion = ({question,answer}) => {
  const [show, setShow] = useState(false)

  const toggleAccordionHandler = () => {
    setShow(!show)
  }
  return (
    <Wrapper isShow={show}>
            <div
                onClick={toggleAccordionHandler}
                className="question">
                <p>
                  {question}
                </p>
                <img src={stroke} alt=""/>
            </div>
            <div className="answer">
                <p className="ans">
                  {answer}
                </p>
            </div>
     </Wrapper>
  )
}
export default Accordion;