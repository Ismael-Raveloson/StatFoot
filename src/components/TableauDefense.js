import '../assets/css/style.css';
import '../assets/css/table.css';


function TableauDefense(props) {
    // maka anle props nipassena tao am Global
    const {entete , data , title} = props;

    return (
    <div class="tableau">
      <div class="container">
        <h2 class="mb-5">{title}</h2>
        

        <div class="table-responsive custom-table-responsive">

          <table class="table custom-table">
            <thead>

              <tr> 
              {/*miboucle entete ana tableau */}
                {entete.map((titre,index) =>(
                  <th scope="col" class="entete" key={index}>{titre}</th>
                ))}
              </tr>

            </thead>

            <tbody>
              {/*miboucle  donnée ana tableau */}
              {data.map((stat,index) =>(
                <>
                  <tr scope="row">
                    <td class="result">{stat.equipe}</td>
                    <td class="result">{stat.ligue}</td>
                    <td class="result">{stat.tirMatch}</td>
                    <td class="result">{stat.tacleMatch}</td>
                    <td class="result">{stat.interceptionMatch}</td>
                    <td class="result">{stat.fauteMatch}</td>
                    <td class="result" >{stat.horsJeuxMatch}</td>
                    <td class="result" >{stat.note}</td>
                  </tr>
                  <tr class="spacer"><td colspan="100"></td></tr>
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
  