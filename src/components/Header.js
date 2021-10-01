import React, { useState, useEffect } from 'react';
import GitHubButton from 'react-github-btn'
import './Header.css'
import Toggle from './Toggle';
import { keepTheme } from '../utils/theme';

function Header()
{
    
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    useEffect(() =>
    {
        keepTheme();
        if(localStorage.getItem('theme') === 'theme-dark')
        {
            setTogClass('dark')
        }
        else if(localStorage.getItem('theme') === 'theme-light')
        {
            setTogClass('light')
        }
    }, [theme]);

    return (
        <div className="header">
            <h1>
                Emoji Search <span role="img" aria-label="Unicorn Emoji">🦄</span>
            </h1>
            <p>
                A simple emoji search tool made with ReactJS.
            </p>
            <p>
                <GitHubButton href="https://github.com/BraydenTW/react-emoji-search" data-color-scheme={`no-preference: ${togClass}; light: ${togClass}; dark: ${togClass};`} data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star BraydenTW/react-emoji-search on GitHub">Star</GitHubButton>
                &nbsp;&nbsp;
                <GitHubButton href="https://github.com/BraydenTW/react-emoji-search/fork" data-color-scheme={`no-preference: ${togClass}; light: ${togClass}; dark: ${togClass};`} data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork BraydenTW/react-emoji-search on GitHub">Fork</GitHubButton>
            </p>

            <div className="container">
                <Toggle />
                <p className="theme-info">
                    Switch to your preferred theme.
                </p>
            </div>
        </div>
    )
}

export default Header
