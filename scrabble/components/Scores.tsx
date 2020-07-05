import { useAppState } from "../Provider";

function Scores() {
  const { players } = useAppState();

  return (
    <>
      <table>
        <thead>
          <tr>
            {players.map((player, i) => <th key={i}>{player.name}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {players.map((player, i) => <td key={i}>0</td>)}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            {players.map((player, i) => <td key={i}>0</td>)}
          </tr>
        </tfoot>
      </table>
      <style jsx>
        {`
          table {
            border-spacing: 0;
            text-align: center;
            padding: 0;
          }
          td, th {
            padding: 10px;
          }
          td + td, th + th {
            border-left: 1px solid #333;
          }

          thead tr th {
            font-weight: normal;
            border-bottom: 2px solid #333;
          }

          tfoot tr td {
            border-top: 1px solid #333;
          }
        `}
      </style>
    </>
  );
}

export default Scores;