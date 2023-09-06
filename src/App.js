import React, { useState, useEffect } from "react";
import { Form, Card, Image, Icon } from "semantic-ui-react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    name,
    login,
    followers,
    following,
    avatar_url,
    public_repos,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <div>
      <div class="navbar">
        <a class="logo">
          <Icon name="github" />
        </a>
        <div class="search">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Input
                placeholder="Enter GitHub user"
                name="github user"
                onChange={handleSearch}
              />
              <Form.Button content="Search" />
            </Form.Group>
          </Form>
        </div>
      </div>
      {error ? (
        <h1 class="display-error">{error}</h1>
      ) : (
        <div class="card">
          <Card>
            <Image src={avatar} wrapped ui={false} class="picture" />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Header>{userName}</Card.Header>
              {/* <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description> */}
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="users" />
                {followers} Followers
              </a>
            </Card.Content>

            <Card.Content extra>
              <a>
                <Icon name="user" />
                {following} Following
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="github square" />
                {repos} Repos
              </a>
            </Card.Content>
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;
