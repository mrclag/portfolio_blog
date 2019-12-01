import { Container } from 'reactstrap';

const BasePage = props => {
  const { className, title, containerClass } = props;

  // const className = props.className || '';

  return (
    <div className={`base-page ${className}`}>
      <Container className={containerClass}>{props.children}</Container>
    </div>
  );
};

BasePage.defaultProps = {
  className: '',
  containerClass: ''
};

export default BasePage;
