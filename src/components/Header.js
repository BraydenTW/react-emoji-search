import GitHubButton from 'react-github-btn'
import './Header.css'

function Header() {
  
  return (
    <div className="header">
      <h1>
        Emoji Search <span role="img" aria-label="Unicorn Emoji">🦄</span>
      </h1>
      <p>
        A simple emoji search tool made with ReactJS.
      </p>
      <p>
          <GitHubButton href="https://github.com/BraydenTW/react-emoji-search" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star BraydenTW/react-emoji-search on GitHub">Star</GitHubButton>
          &nbsp;&nbsp;
          <GitHubButton href="https://github.com/BraydenTW/react-emoji-search/fork" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork BraydenTW/react-emoji-search on GitHub">Fork</GitHubButton>
      </p>
    </div>
  )
}

export default Header
