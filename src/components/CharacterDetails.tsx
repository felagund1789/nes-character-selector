interface Props {
  name: string;
  description: string;
}

const CharacterDetails = ({ name, description }: Props) => {
  return (
    <div className="nes-container with-title">
      <p className="title">{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default CharacterDetails;
