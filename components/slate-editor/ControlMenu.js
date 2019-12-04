import { Button } from 'reactstrap';
import {
  ControlMenuWrapper,
  Title,
  StatusBox
} from '../styles/SlateEditor.styles';

const ControlMenu = props => {
  return (
    <ControlMenuWrapper>
      <Title>Edit Blog</Title>
      <StatusBox>{props.isLoading ? 'Saving... ' : 'Saved'}</StatusBox>
      <Button disabled={props.isLoading} onClick={props.save} color="success">
        Save
      </Button>
    </ControlMenuWrapper>
  );
};
export default ControlMenu;
