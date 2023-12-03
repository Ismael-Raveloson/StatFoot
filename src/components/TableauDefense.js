import '../assets/css/style.css';
import '../assets/css/table.css';


function TableauDefense(props) {
    // maka anle props nipassena tao am Global
    const {entete , data , title} = props;

    return (
    <div className="tableau">
      <div className="container">
        <h2 className="mb-5">{title}</h2>
        

        <div className="table-responsive custom-table-responsive">

          <table className="table custom-table">
            <thead>

              <tr> 
              {/*miboucle entete ana tableau */}
                {entete.map((titre,index) =>(
                  <th scope="col" className="entete" key={index}>{titre}</th>
                ))}
              </tr>

            </thead>

            <tbody>
              {/*miboucle  donnée ana tableau */}
              {data.map((stat,index) =>(
                <>
                  <tr className="row" key={index}>
                    <td className="result">{stat.equipe}</td>
                    <td className="result">{stat.ligue}</td>
                    <td className="result">{stat.tirMatch}</td>
                    <td className="result">{stat.tacleMatch}</td>
                    <td className="result">{stat.interceptionMatch}</td>
                    <td className="result">{stat.fauteMatch}</td>
                    <td className="result" >{stat.horsJeuMatch}</td>
                    <td className="result" >{stat.note}</td>
                  </tr>
                  <tr className="spacer"><td colSpan="100" key={index}></td></tr>
                </>
              ))}
                                        
            </tbody>
          </table>
        </div>


      </div>
    </div>

    );
  }
  
export default TableauDefense;
  