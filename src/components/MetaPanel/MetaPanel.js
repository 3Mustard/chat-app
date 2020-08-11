import React from 'react';
import { Segment, Accordian, Header, Icon } from 'semantic-ui-react';

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
        <Accordian styled attached='true'>

          {/* INDEX 0 */}
          <Accordian.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.setActiveIndex}
          > 
            <Icon name='dropdown'/>
            <Icon name='info'/>
            Channel Details
          </Accordian.Title>
          <Accordian.Content active={activeIndex === 0}>
              details
          </Accordian.Content>

          {/* INDEX 1 */}
          <Accordian.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.setActiveIndex}
          >
            <Icon name='dropdown'/>
            <Icon name='user circle'/>
            Top Posters
          </Accordian.Title>
          <Accordian.Content active={activeIndex === 1}>
            posters
          </Accordian.Content>

          {/* INDEX 2 */}
          <Accordian.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.setActiveIndex}
          >
            <Icon name='dropdown'/>
            <Icon name='pencil alternate'/>
            Created By
          </Accordian.Title>
          <Accordian.Content active={activeIndex === 2}>
            creator
          </Accordian.Content>
        </Accordian>
      </Segment>
    )
  }
}

export default MetaPanel;
