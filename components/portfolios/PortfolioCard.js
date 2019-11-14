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
          <CardImg
            style={{
              width: '100%',
              minHeight: '15vw',
              objectFit: 'cover'
            }}
            src={portfolio.imageUrl}
            alt="Card image"
          />

          <CardBody>
            <CardTitle className="portfolio-card-title">
              {portfolio.title}
            </CardTitle>
            <CardText
              className="portfolio-card-text"
              style={{ minHeight: '5vw' }}
            >
              {portfolio.blurb}
            </CardText>
            <div className="readMore">{children}</div>
          </CardBody>
        </Card>
      </span>
    );
  }
}
