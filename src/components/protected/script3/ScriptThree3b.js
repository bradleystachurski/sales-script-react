import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'

class ScriptThree3b extends Component {
  render() {
    return (
      <div className="script-container">
        <h2>Qualifying Call with Decision Maker - No Adwords Account</h2>

        <h3>Important Objectives</h3>

        <ul>
          <li><em>Qualify prospect: find out if prospect is advertising, getting results, what’s important to them</em></li>
          <li><em>Offer/send prospect valuable content</em></li>
          <li><em>Schedule follow up</em></li>
        </ul>

        <hr/>

        <p><strong>You:</strong> That’s frustrating! So you aren’t getting good results from (Groupon/Valpak)...hmmm, are you sure you aren’t interested in seeing, for free, how to get results from Google?</p>

        <hr/>

        <h3>Answers</h3>

        <List>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> Yes (or if they have questions)</span>
            }
            containerElement={<Link to="/script3/1ai" />}
            >
          </ListItem>
          <ListItem
            primaryText={
              <span><strong>Owner:</strong> No</span>
            }
            containerElement={<Link to="/script3/3bb" />}
            >
          </ListItem>
        </List>
      </div>
    )
  }
}

export default ScriptThree3b
