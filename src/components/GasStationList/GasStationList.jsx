import React, { Component } from 'react';
import GasStation from '../GasStation/GasStation';

import {
    PageSizeSelect,
    PageSizeSelectLabel,
    PageSizeContainer,
    PaginationContainer,
    PageSelect,
    PageSelectLabel,
    PageSelectContainer
} from './styles';

class GasStationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            itemsPerPage: 10,
            totalPages: null,
            pageSizeOptions: [{
                value: 10,
                name: '10'
              },
              {
                value: 25,
                name: '25'
              },
              {
                value: 50,
                name: '50'
              }
            ],
            pageSelectOptions: []
        }
    }

    componentDidMount() {
        const { stations } = this.props;
        const { itemsPerPage } = this.state;
        // find out how many pages we have by comparing itemsPerPage vs total items.
        const totalPages = Math.ceil(stations.length / itemsPerPage)
        this.setState({ totalPages: totalPages });
    }

    renderGasStations() {
        const { stations } = this.props;
        const { itemsPerPage, currentPage } = this.state;
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + (itemsPerPage - 1);

        const stationsToDisplay = stations.slice(startIndex, endIndex )
        return stationsToDisplay.map((gasStation) => {
            return <GasStation key={gasStation.address} station={gasStation} />
        })
    }

    renderPageSelectOptions() {
        const { totalPages } = this.state;
        let pageSelectOptions = [];

        if (totalPages === 0) {
            return null;
        }

        for (let i = 0; i < totalPages; i++) {
            const option = <option key={i} value={i + 1}>{i + 1}</option>
            pageSelectOptions.push(option);
        }

        return pageSelectOptions
    }

    handlePageSizeChange = (event) => {
        const pageSize = event.target.value;
        const { currentPage } = this.state;
        const { stations } = this.props;
        const totalPages = Math.ceil(stations.length / pageSize);

        if (totalPages <= currentPage) {
            this.setState({ itemsPerPage: pageSize, totalPages: totalPages, currentPage: currentPage });
        }

        this.setState({ itemsPerPage: pageSize, totalPages: totalPages });
    }

    handlePageSelectChange = (event) => {
        const pageSelected = event.target.value;
        this.setState({ currentPage: pageSelected - 1 });
    }

    render() {
        const { pageSizeOptions } = this.state;

        return(
            <div>
                <PaginationContainer className="col-10 offset-1">
                    <PageSizeContainer>
                        <PageSizeSelectLabel for="pageSizeSelect">Per Page</PageSizeSelectLabel>
                        <PageSizeSelect
                            className="form-control"
                            id="pageSizeSelect"
                            onChange={this.handlePageSizeChange}>
                                {pageSizeOptions.map((option, i) => {
                                return <option key={i} value={option.value}>{option.name}</option>
                                })}
                        </PageSizeSelect>
                    </PageSizeContainer>
                    <PageSelectContainer>
                        <PageSelectLabel for="pageSelect">Page #</PageSelectLabel>
                        <PageSelect
                            className="form-control"
                            id="pageSelect"
                            onChange={this.handlePageSelectChange}>
                            {this.renderPageSelectOptions()}
                        </PageSelect>
                    </PageSelectContainer>
                </PaginationContainer>
                {this.renderGasStations()}
            </div>
        )
    }
}

export default GasStationList;