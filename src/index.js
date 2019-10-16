import React, {Component} from 'react';
import {View, Button} from 'react-native';

class ButtonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class_name: '',
      mode_class: '',
      variant: '',
    };
  }
  componentDidMount() {
    this.setState({class_name: this.props.className || ''});
    switch (this.props.mode) {
      case 'delete':
        this.setState({
          mode_class: 'atoms-Button-delete',
          variant: 'outline-danger',
        });
        break;
      case 'disabled':
        this.setState({
          mode_class: 'atoms-Button-disabled',
          variant: 'outline-secondary',
        });
        break;
      case 'light':
        this.setState({
          mode_class: 'atoms-Button-light',
          variant: 'outline-info',
        });
        break;
      case 'dark':
        this.setState({
          mode_class: 'atoms-Button-dark',
          variant: 'outline-dark',
        });
        break;
      case 'login':
        this.setState({mode_class: 'atoms-Button-login'});
        break;
      case 'signin':
        this.setState({mode_class: 'atoms-Button-signin'});
        break;

      case 'active_outline':
        this.setState({
          mode_class: 'atoms-Button-active_outline',
          variant: 'outline-primary',
        });
        break;
      case 'active':
      default:
        this.setState({
          mode_class: 'atoms-Button-active',
          variant: 'primary',
        });
        break;
    }
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={this.props.onClick} title={this.props.children} />
      </View>
    );
  }
}
export default ButtonScreen;
