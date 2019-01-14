import * as React from "react";
import { Menu } from "semantic-ui-react";
import { Center } from "../../../style/emotion";

interface HeaderProps {
  style?: React.CSSProperties;
  items: { [key: string]: string }[];
  onClick: (name: string) => void;
  name?: string;
  handleAccout?: () => void;
  TweetButton?: any;
}

export default class HeaderMol extends React.Component<HeaderProps, {}> {
  render() {
    const active = location.href.split("/").slice(-1)[0];
    const {
      onClick,
      style,
      items,
      name,
      handleAccout,
      TweetButton
    } = this.props;
    return (
      <div style={{ ...style }}>
        <div>
          <Menu pointing secondary>
            <Menu.Menu position="left">
              <Menu.Item name={name} onClick={handleAccout} />
            </Menu.Menu>
            <Center row>
              {items.map(item => {
                const name = Object.keys(item)[0];
                const dir = item[name];
                return (
                  <Menu.Item
                    key={name}
                    name={name}
                    active={dir === active}
                    onClick={() => {
                      onClick(dir);
                    }}
                  />
                );
              })}
            </Center>
            <Menu.Menu position="right">{this.props.children}</Menu.Menu>
          </Menu>
        </div>
      </div>
    );
  }
}
