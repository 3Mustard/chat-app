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
          <Accordian.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.setActiveIndex}
          ></Accordian.Title>
        </Accordian>
      </Segment>
    )
  }
}

export default MetaPanel;
