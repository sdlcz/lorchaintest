// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { Form, Card, Image, Icon, Item} from 'semantic-ui-react';
import logo from './logo.png';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [avatar, setAvatar] = useState('');
  const [public_repos, setPublicRepos] = useState('');
  const [repository, setRepository] = useState('');

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const setData = ({ name, login, followers, following, avatar_url, public_repos, repos_url }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setAvatar(avatar_url);
    setPublicRepos(public_repos);
    setRepository(repos_url);
  };

  return (
        <div class="main">
          <div class="navbar">
          <div class="search">
          <Form class="search-wrapper">
          <Form.Group>
            <Icon name='search' />
            <Form.Input
              placeholder='Enter GitHub username'
              name='github username'
              />
          </Form.Group>
        </Form>
          </div>
          </div>
      <img class="frame" src="" alt="Bootstrap" width="30" height="24" />
      <div class="card">
         <Card>
    <Image src={avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <a><Card.a>{userName}</Card.a></a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='users' />
              {followers} followers
      </a>
      <a>
        <Icon name='user' />
              {following} following
      </a>
          </Card.Content>
        </Card>
      </div>
      <h1>test</h1>
        <Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description></Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
    </div>
  );
}

export default App;
 