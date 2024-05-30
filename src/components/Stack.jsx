import React from 'react';
import node from '../assets/images/icons/node.svg';
import sass from '../assets/images/icons/sass.svg';
import nextjs from '../assets/images/icons/nextjs.svg';
import express from '../assets/images/icons/express.svg';
import figma from '../assets/images/icons/figma.svg';
import github from '../assets/images/icons/github.svg';
import javascript from '../assets/images/icons/javascript.svg';
import mongodb from '../assets/images/icons/mongodb.svg';
import notion from '../assets/images/icons/notion.svg';
import react from '../assets/images/icons/react.svg';
import redux_toolkit from '../assets/images/icons/redux_toolkit.svg';
import tailwind from '../assets/images/icons/tailwind.svg';
import typescript from '../assets/images/icons/typescript.svg';

const Stack = ({ direction }) => {
    return (
        <div className='stack-container'>
            <div
                className={
                    direction === 'right'
                        ? 'stack-move-right'
                        : 'stack-move-left'
                }>
                <img src={node} alt='node' />
                <img src={sass} alt='sass' />
                <img src={nextjs} alt='nextjs' />
                <img src={express} alt='express' />
                <img src={figma} alt='figma' />
                <img src={github} alt='github' />
                <img src={javascript} alt='javascript' />
                <img src={mongodb} alt='mongodb' />
                <img src={notion} alt='notion' />
                <img src={react} alt='react' />
                <img src={redux_toolkit} alt='redux_toolkit' />
                <img src={typescript} alt='typescript' />
                <img src={tailwind} alt='tailwind' />
            </div>
            <div
                className={
                    direction === 'right'
                        ? 'stack-move-right'
                        : 'stack-move-left'
                }>
                <img src={node} alt='node' />
                <img src={sass} alt='sass' />
                <img src={nextjs} alt='nextjs' />
                <img src={express} alt='express' />
                <img src={figma} alt='figma' />
                <img src={github} alt='github' />
                <img src={javascript} alt='javascript' />
                <img src={mongodb} alt='mongodb' />
                <img src={notion} alt='notion' />
                <img src={react} alt='react' />
                <img src={redux_toolkit} alt='redux_toolkit' />
                <img src={typescript} alt='typescript' />
                <img src={tailwind} alt='tailwind' />
            </div>
        </div>
    );
};

export default Stack;
