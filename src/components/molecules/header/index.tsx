import * as React from "react";
import { Menu } from "semantic-ui-react";
import { Center } from "../../../style/emotion";

interface HeaderProps {
  style?: React.CSSProperties;
  items: { [key: string]: string }[];
  onClick: (name: string) => void;
  name?: string;
}

export default class HeaderMol extends React.Component<HeaderProps, {}> {
  render() {
    const active = location.href.split("/").slice(-1)[0];
    const { onClick, style, items, name } = this.props;
    return (
      <div style={{ ...style }}>
        <div>
          <Menu pointing secondary>
            <Menu.Menu position="left">
              <Menu.Item name={name} onClick={() => {}} />
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
          </Menu>
        </div>
      </div>
    );
  }
}
