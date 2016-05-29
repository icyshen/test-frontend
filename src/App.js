import React from 'react';
import TableRow from './TableRow';
import {render} from 'react-dom';

let randomNumber = () => {
    return Math.floor(Math.random() * (99999 - 9999) + 9999);
};
let nodes = [
    {
        id: 1,
        level: 'state',
        region: 'First State',
        time: '2015/12/30',
        forms: '' + randomNumber(),
        voters: '' + randomNumber(),
        update: '' + randomNumber(),
        nodes: [
            {
                id: 2,
                level: 'district',
                region: 'Delta District',
                time: '2013/07/10',
                forms: '' + randomNumber(),
                voters: '' + randomNumber(),
                update: '' + randomNumber(),
                nodes: [
                    {
                        id: 3,
                        level: 'town',
                        region: 'Alpha Town',
                        time: '2015/11/30',
                        forms: '' + randomNumber(),
                        voters: '' + randomNumber(),
                        update: '' + randomNumber(),
                        nodes:[]
                    },
                    {
                        id: 4,
                        level: 'town',
                        region: 'Beta Town',
                        time: '2016/04/08',
                        forms: '' + randomNumber(),
                        voters: '' + randomNumber(),
                        update: '' + randomNumber(),
                        nodes:[]
                    },
                    {
                        id: 5,
                        level: 'town',
                        region: 'Charlie Town',
                        time: '2016/09/22',
                        forms: '' + randomNumber(),
                        voters: '' + randomNumber(),
                        update: '' + randomNumber(),
                        nodes:[]
                    }
                ]
            },
            {
                id: 6,
                level: 'district',
                region: 'Echo District',
                time: '2013/08/04',
                forms: '' + randomNumber(),
                voters: '' + randomNumber(),
                update: '' + randomNumber(),
                nodes:[]
            },
            {
                id: 7,
                level: 'district',
                region: 'Hotel District',
                time: '2016/002/17',
                forms: '' + randomNumber(),
                voters: '' + randomNumber(),
                update: '' + randomNumber(),
                nodes:[]
            }
        ]
    },
    {
        id: 8,
        level: 'state',
        region: 'Second State',
        time: '2013/05/20',
        forms: '' + randomNumber(),
        voters: '' + randomNumber(),
        update: '' + randomNumber(),
        nodes:[
            {
                id: 9,
                level: 'district',
                region: 'Test District',
                time: '2013/08/04',
                forms: '' + randomNumber(),
                voters: '' + randomNumber(),
                update: '' + randomNumber(),
                nodes:[]
            },
            {
                id: 10,
                level: 'district',
                region: 'Lucky District',
                time: '2016/002/17',
                forms: '' + randomNumber(),
                voters: '' + randomNumber(),
                update: '' + randomNumber(),
                nodes:[
                    {
                        id: 11,
                        level: 'town',
                        region: 'Temp Town',
                        time: '2015/11/30',
                        forms: '' + randomNumber(),
                        voters: '' + randomNumber(),
                        update: '' + randomNumber(),
                        nodes:[]
                    },
                    {
                        id: 12,
                        level: 'town',
                        region: 'Java Town',
                        time: '2016/04/08',
                        forms: '' + randomNumber(),
                        voters: '' + randomNumber(),
                        update: '' + randomNumber(),
                        nodes:[]
                    },
                ]
            },
            {
                id: 13,
                level: 'district',
                region: 'Echo District',
                time: '2013/08/04',
                forms: '' + randomNumber(),
                voters: '' + randomNumber(),
                update: '' + randomNumber(),
                nodes:[]
            },
        ]
    },
    {
        id: 14,
        level: 'state',
        region: 'Third State',
        time: '2011/05/20',
        forms: '' + randomNumber(),
        voters: '' + randomNumber(),
        update: '' + randomNumber(),
        nodes:[]
    },
    {
        id: 15,
        level: 'state',
        region: 'Fourth State',
        time: '2009/05/07',
        forms: '' + randomNumber(),
        voters: '' + randomNumber(),
        update: '' + randomNumber(),
        nodes:[]
    },
    {
        id: 16,
        level: 'state',
        region: 'Fifth State',
        time: '2000/03/12',
        forms: '' + randomNumber(),
        voters: '' + randomNumber(),
        update: '' + randomNumber(),
        nodes:[]
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterVisible: false,
            search: '',
            field: ''
        };
        this.toggleFilter = this.toggleFilter.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }
    toggleFilter() {
        this.setState({filterVisible: !this.state.filterVisible});
    }
    updateField(field, fieldName) {
        this.setState({
            filterVisible: !this.state.filterVisible,
            field: field,
            fieldName: fieldName
        });
    }
    updateSearch(event) {
        this.setState({search: event.target.value});
    }
    render() {
        let fieldName = this.state.fieldName || 'Filter';
        return (
            <div id="data-table">
                <div className="table-filter">
                    <div className="filter">
                        <div className="filter-toggle" onClick={this.toggleFilter}>
                            {fieldName}
                            <span className="caret">&#9660;</span>
                        </div>
                        <ul className={this.state.filterVisible ? "" : "hidden"}>
                            <li onClick={this.updateField.bind(this, 'region', 'Region')}>
                                Region
                            </li>
                            <li onClick={this.updateField.bind(this, 'time', 'Last inpot')}>
                                Last inpot
                            </li>
                            <li onClick={this.updateField.bind(this, 'forms', 'Number of forms')}>
                                Number of forms
                            </li>
                            <li onClick={this.updateField.bind(this, 'voters', 'Number of voters')}>
                                Number of voters
                            </li>
                            <li onClick={this.updateField.bind(this, 'update', 'Update')}>
                                Update
                            </li>
                            <li onClick={this.updateField.bind(this, '', 'Any')}>
                                Any
                            </li>
                        </ul>
                    </div>
                    <div className="search-btn">
                        <i className='icon-search'></i>
                    </div>
                    <div className="input-wrapper">
                        <input className="filter-text" type="text" placeholder="Search"
                            value={this.state.search} onChange={this.updateSearch}/>
                    </div>
                </div>
                <div className="row-node table-header">
                    <ul className="row-content">
                        <li className="region">Region</li>
                        <li>Last inpot</li>
                        <li>Number of forms</li>
                        <li>Number of voters</li>
                        <li>Update</li>
                    </ul>
                </div>
                {this.props.nodes.map((node) => {
                    return <TableRow node = {node} key = {node.id}
                        search = {this.state.search} field = {this.state.field}/>;
                })}
            </div>
        );
    }
}

render(<App nodes = {nodes}/>, document.getElementById('app'));
