import * as React from "react";
import { Button, Modal } from "semantic-ui-react";

export default class ModalMol extends React.Component<{ label: string }> {
  render() {
    return (
      <Modal trigger={<Button>{this.props.label}</Button>}>
        {this.props.children}
      </Modal>
    );
  }
}
