import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import add_a_private_contact from './resources/contacts/add-a-private-contact.png';
import add_contact from './resources/contacts/add-contact.png';
function Contacts() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Contacts Home</Link>
          </li>
          <li>
            <Link to="/Contacts">Figma Snapshots - M2 Done</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Contacts">
            <ContactsFigmaSnapshots />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Contacts Home</h2>
    </div>
  );
}

function ContactsFigmaSnapshots() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  console.log('path:' + path);
  console.log('url:' + url);
  return (
    <div>
      <h2>Contacts Figma Snapshots - M2 Done</h2>
      <ul>
        <li>
          <Link to={`${url}/add-contact`}>Add Contact</Link>
        </li>
        <li>
          <Link to={`${url}/add-private-contact`}>
            Add Contact - Add private contact
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a snapshot.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  console.log('topicId:' + topicId);
  return (
    <div>
      {topicId === 'add-contact' && (
        <>
          <h5> Add Contact</h5>
          <AddContact />
        </>
      )}
      {topicId === 'add-private-contact' && (
        <>
          <h5> Add Contact - Add private contact</h5>
          <AddPrivateContact />
        </>
      )}
    </div>
  );
}

function AddPrivateContact() {
  return (
    <div>
      <h6>M2 Done</h6>
      <img
        style={{
          width: '641px',
          height: '609px',
          opacity: '0.90',
          backgroundColor: 'aquamarine',
        }}
        src={add_a_private_contact}
      />
    </div>
  );
}

function AddContact() {
  return (
    <div>
      <h6>M2 Done</h6>
      <img
        style={{
          width: '650px',
          height: '574px',
          opacity: '0.90',
          backgroundColor: 'aquamarine',
        }}
        src={add_contact}
      />
    </div>
  );
}

export default Contacts;
