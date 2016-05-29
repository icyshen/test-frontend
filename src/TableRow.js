import React from 'react';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({childrenVisible: !this.state.childrenVisible});
    }
    render() {
        let children;
        let buttonText;
        let visible = false;
        let search = this.props.search.toLowerCase();
        let field = this.props.field;
        let toggleClass = this.state.childrenVisible ? 'toggle-btn toggle-minus' :
                                                       'toggle-btn toggle-plus';
        let childrenClass = this.state.childrenVisible ? 'children-nodes' : 'children-nodes hidden';
        let length = this.props.node.nodes.length;
        if (length) {
            children = this.props.node.nodes.map((node) => {
                return <TableRow node = {node} key = {node.id}
                    search = {this.props.search} field = {this.props.field}/>;
            });
            buttonText = length + ' ' + this.props.node.nodes[0].level;
        }
        if (!search) {
            visible = true;
        } else{
            if (field) {
                visible = this.props.node[field].toLowerCase().indexOf(search) > -1;
            } else{
                visible = this.props.node.region.toLowerCase().indexOf(search) > -1 ||
                          this.props.node.time.toLowerCase().indexOf(search) > -1 ||
                          this.props.node.forms.toLowerCase().indexOf(search) > -1 ||
                          this.props.node.voters.toLowerCase().indexOf(search) > -1 ||
                          this.props.node.update.toLowerCase().indexOf(search) > -1;
            }
        }
        return (
            <div className="row-node">
                <ul className={visible ? "row-content" : "row-content hidden"}>
                    <li className={this.props.node.level + " region region-type"}>
                        <span>{this.props.node.region}</span>
                        <i className="icon-download"></i>
                        {length ? <button onClick={this.toggle} className={toggleClass}>{buttonText}</button> : ""}
                    </li>
                    <li>{this.props.node.time}</li>
                    <li>{this.props.node.forms}</li>
                    <li>{this.props.node.voters}</li>
                    <li>{this.props.node.update}</li>
                </ul>
                <div className={childrenClass}>
                    {children}
                </div>
            </div>
        );
    }
}

export default TableRow;
