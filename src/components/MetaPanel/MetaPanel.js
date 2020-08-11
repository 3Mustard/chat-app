import React from 'react';
import { Segment, Accordion, Header, Icon } from 'semantic-ui-react';

class MetaPanel extends React.Component {
  state = {
    activeIndex: 0
  }
  
  // onClick(event: SyntheticEvent, data: object)
  setActiveIndex = (event, titleProps) => {
      console.log('these are the titleprops in metaPanel.js', titleProps);
      const { index } = titleProps;
      const { activeIndex } = this.state;
      const newIndex = activeIndex === index ? -1 : index;
      this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
  
    return (
      <Segment>
        <Header as='h3' attached='top'>
          About # Channel
        </Header>
        <Accordion styled attached='true'>

          {/* INDEX 0 */}
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.setActiveIndex}
          > 
            <Icon name='dropdown'/>
            <Icon name='info'/>
            Channel Details
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
              details
          </Accordion.Content>

          {/* INDEX 1 */}
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.setActiveIndex}
          >
            <Icon name='dropdown'/>
            <Icon name='user circle'/>
            Top Posters
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            posters
          </Accordion.Content>

          {/* INDEX 2 */}
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.setActiveIndex}
          >
            <Icon name='dropdown'/>
            <Icon name='pencil alternate'/>
            Created By
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            creator
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
}

export default MetaPanel;
