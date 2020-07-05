import { useAppState } from "../../Provider";

function Builder() {
  const { selection, board } = useAppState();

  if (selection) {
    return (
      <>
        <h1>builder</h1>
      </>

    );
  }
  else {
    return <></>;
  }

}

export default Builder;