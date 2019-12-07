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
      <button disabled={props.isLoading} onClick={props.save} color="success">
        Save
      </button>
    </ControlMenuWrapper>
  );
};
export default ControlMenu;
