import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const Contador = (props) => {
  return (
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="row" align="center">
            <p >Contador: {props.count}</p>

            <div class="col-sm-3">
            </div>

            <div class="col-sm-2">
              <div class="card">
                <button type="button" class="btn btn-success" onClick={()=>props.setCount(e=>e+1)}>Incrementar</button>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="card"> 
                <button type="button" class="btn btn-danger" onClick={()=>props.setCount(e=>e-1)}>Descrementar</button>
              </div>
            </div>

            <div class="col-sm-2">
              <div class="card">
                <button type="button" class="btn btn-secondary"onClick={()=>props.setCount(0)}>Reset</button>
              </div>
            </div>

            <div class="col-sm-3">
            </div>
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contador
