interface Props {
  name: string;
  description: string;
}

const CharacterDetails = ({ name, description }: Props) => {
  return (
    <div className="nes-container with-title character-details">
      <h2 className="title">{name}</h2>
      <p>{description}</p>
      <i className={`nes-icon is-small nes-${name.toLowerCase()}`} />
    </div>
  );
};

export default CharacterDetails;
