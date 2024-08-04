interface Props {
  title: string;
  text: string;
  onClose: () => void;
}

const MessageDialog = ({ title, text, onClose }: Props) => {
  return (
    <dialog open className="nes-dialog" id="error-dialog">
      <form method="dialog">
        <p className="title">{title}</p>
        <p className="nes-text">{text}</p>
        <menu className="dialog-menu">
          <button
            type="submit"
            onClick={onClose}
            className="nes-btn is-primary"
          >
            OK
          </button>
        </menu>
      </form>
    </dialog>
  );
};

export default MessageDialog;
