import { useAppState } from "../../Provider";

function Builder() {
  const { selection, candidateWord } = useAppState();

  if (candidateWord) {
    return (
      <>
        <h1>{candidateWord.map((tile, i) => <span key={i}>{tile.letter}</span>)}</h1>
      </>

    );
  }
  else {
    return <></>;
  }

}

export default Builder;