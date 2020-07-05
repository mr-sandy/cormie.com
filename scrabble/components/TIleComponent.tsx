import { Tile } from '../types';

type TileComponentProps = {
  tile: Tile
};


const TileComponent = (props: TileComponentProps) => {
  const { tile } = props;

  //      <span>{tile.value}</span>

  return (
    <div>{tile.letter}
      <style jsx>
        {`
          div {
            background-color: rgb(255,241,191);
            text-align: center;
            font-family: Futura, Trebuchet MS, Arial, sans-serif;
            font-weight: 500;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
}
`}
      </style>
    </div>
  );
}

export default TileComponent;


// position: 'absolute',
// zIndex: '50',
// top: '-2px',
// bottom: '-2px',
// left: '-2px',
// right: '-2px',
// display: 'inline-block',
// textAlign: 'center',
// textTransform: 'uppercase',
// color: 'rgb(73,72,64)',
// fontFamily: 'Futura, Trebuchet MS, Arial, sans-serif',
// fontWeight: '500',
// fontSize: '32px',
// paddingTop: '4px',
// backgroundColor: 'rgb(255,241,191)',
// borderRadius: '5px',
// borderRight: '1px solid rgb(217,193,143)',
// borderBottom: '1px solid rgb(217,193,143)'}

// span {        fontSize: '12px',
// position: 'absolute',
// bottom: '2px',
// right: '4px',