const container = document.querySelector(`#root`);

const App = () => {

  const generateColor = () => {
    const chars = '0123456789abcdef';
    var color = '#';
    for (let i=0; i<6; i++) {
      color += chars[Math.floor(Math.random()*16)];
    }
    return color;
  }

  const generateSquare = () => {
    const dimensions = Math.ceil((Math.random() * 100) + 100);
    return <div style={{height: dimensions, width: dimensions, backgroundColor: generateColor()}}></div>
  }

  return (<>
    <Circles colorGenerator={generateColor} />
    <section id="squares">
    {generateSquare()}
    {generateSquare()}
    {generateSquare()}
    </section>
  </>)
}

const Circles = (props) => {
  const generateColor = props.colorGenerator;
  const generateCircle = () => {
    const diameter = Math.ceil((Math.random() * 100) + 100);
    return <div style={{height: diameter, width: diameter, backgroundColor: generateColor(), borderRadius: '50%'}}></div>
  }
  return (<section id="circles">
    {generateCircle()}
    {generateCircle()}
    {generateCircle()}
  </section>)
}

const root = ReactDOM.createRoot(container);
root.render(<App />);