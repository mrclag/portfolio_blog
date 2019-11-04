import React from 'react';
import PortfolioCardDetail from './PortfolioCardDetail';
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  CardImg,
  Button
} from 'reactstrap';

export default class PortfolioCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { portfolio, children } = this.props;
    const { isOpen } = this.state;
    return (
      <span onClick={this.handleToggle}>
        <PortfolioCardDetail
          toggle={this.handleToggle}
          portfolio={portfolio}
          isOpen={isOpen}
        />
        <Card className="portfolio-card">
          {/* <CardHeader className="portfolio-card-header">
            {portfolio.position}
          </CardHeader> */}
          <CardImg
            top
            height="250px"
            src={portfolio.position}
            alt="Card image cap"
          />

          <CardBody>
            <CardTitle className="portfolio-card-title">
              {portfolio.title}
            </CardTitle>
            <CardText className="portfolio-card-text">
              {portfolio.description}
            </CardText>
            <div className="readMore">{children}</div>
          </CardBody>
        </Card>
      </span>
    );
  }
}