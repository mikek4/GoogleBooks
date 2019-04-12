import React, { Component } from "react";
import Container from "../Container"
import SearchForm from "../SearchForm";
import API from "../../utils/API";
import Card from "../Card";
import Row from "../Row/";
import Col from "../Col";
import BookDetail from "../BookDetail";



class BooksContainer extends Component {
    state = {
        result: [],
        search: ""
    };


    componentDidMount() {
        this.searchBooks("Slaughterhouse Five");
    }

    searchBooks = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
    };


    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-8">
                        <Card>
                            {this.state.result.volumeInfo.title ? (
                                <BookDetail
                                    title={this.state.result.volumeInfo.title}
                                    authors={this.state.result.volumeInfo.authors}
                                    description={this.state.result.volumeInfo.description}
                                    image={this.state.result.volumeInfo.imageLinks.medium}
                                    link={this.state.result.selfLink}
                                />
                            ) : (
                                    <h3>No Results Found</h3>
                                )}
                        </Card>
                    </Col>
                    <Col size="md-4">
                        <Card heading="Search">
                            <SearchForm
                                value={this.state.search}
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BooksContainer;