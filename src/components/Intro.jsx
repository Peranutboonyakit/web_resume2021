import React from 'react'
import styled from 'styled-components'
import Yellow from '../img/Yellow.jpg'
import AnimateShape from './AnimateShape'


const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>I'm Pepo</Title>
                <Desc>My name is Peranut Boonyakit.</Desc>
                <Desc>I am 25 years old.</Desc>
                <Desc>I was born in Phetchabun and now I live in Nonthaburi.</Desc>
                <Desc> I graduated with a bachelor's degree in Industrial Physics and Medical Instrument
                    from King Mongkut's University of Technology North Bangkok.</Desc>
                <Desc> I have skill for Developer from Codecamp Thai Programmer.</Desc>
            </Left>
            <Right>
                <Image src={Yellow} />
            </Right>
            <AnimateShape />
        </Container>
    )
}
export default Intro
const Image = styled.img`
    width: 75%;
    border-radius: 50%;
    z-index: 1;
`
const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
    z-index: 1;
`
const Left = styled.div`
   width: 60%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const Title = styled.h1`
    width: 50%;
    font-size: 60px;
`
const Desc = styled.p`
    width: 60%;
    font-weight: 20px;
    margin-top: 10px;
    font-size: 20px;
`
const Right = styled.div`
   width: 40%;
   display: flex;
   align-items: center;
`
