import  React, {useState} from 'react';
import data from "./data";

function App() {

  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleInputChange = (e) =>{
    let value = e.target.value;
    setNumberOfParagraphs(value);
  }

  const generateParagraphs = (e) => {
    e.preventDefault();
    setParagraphs(
      data.filter(
        (item, index)=>(index + 1) <= parseInt(numberOfParagraphs)
      )
    )
  }

  return (
    <main>
      <h1>Tired of Lorem Ipsum?</h1>
      <form action="" onSubmit={generateParagraphs}>
        <div className="form-control">
          <div>
            <label htmlFor="paragraphs">Paragraphs : </label>
            <input 
              type="number"
              id="paragraphs"
              name="paragraphs"
              min="0"
              max="9"
              value={numberOfParagraphs}
              onChange = {handleInputChange}
              />
            </div>
            <button type="submit">Generate</button>
          </div>

        <div className="paragraphs">
          {
            paragraphs.map((paragraph)=>{
              return <p>{paragraph}</p>
            })
          }
        </div>
      </form>
    </main>
  );
}

export default App;
