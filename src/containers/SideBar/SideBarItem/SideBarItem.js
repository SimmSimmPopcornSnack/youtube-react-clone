import React from "react";
import {Icon, Menu} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import "./SideBarItem.scss";

export class SideBarItem extends React.Component {
    render() {
        // React will ignore custom boolean attribute, therefore we pass a string
        // we use this attribute in our SCSS for styling
        const highlight = this.props.highlight ? 'highlight-item' : null;
        return (
            <Link to={{ pathname: this.props.path }}>
                <Menu.Item className={['sidebar-item', highlight].join(' ')}>
                    <div className="sidebar-item-alignment-container">
                        <span><Icon size="large" name={this.props.icon} /></span>
                        <span>{this.props.label}</span>
                    </div>
                </Menu.Item>
            </Link>
        );
    }
    shouldBeHighLighted() {
        const {pathname} = this.props.location;
        console.log(`pathname = `, pathname);
        if(this.props.path = "/") {
            return pathname === this.props.path;
        }
        return pathname.includes(this.props.path);
    }
}

export default withRouter(SideBarItem);
