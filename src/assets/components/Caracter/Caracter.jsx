import React, { Component} from "react";
import './Caracter.css';

class Caracter extends Component {
  render(){
    return(
      <div className="caracter">
        <div className="container contain-caracter">
            <div className="item-caracter">
                <div className="img"><img src="/mundi1.png" alt="" /></div>
                <div className="name">DECENTRALICE FINANCE</div>
                <div className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ab architecto corrupti laborum amet fugit sint exercitationem rerum iusto at excepturi impedit ducimus sit, reprehenderit temporibus, facere inventore, perspiciatis reiciendis.</div>
            </div>
            <div className="item-caracter center">
                <div className="img"><img src="/mundi.png" alt="" /></div>
                <div className="name">WHAT IS METAFUND</div>
                <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic harum molestiae laboriosam veniam eum atque, quam dolores numquam nesciunt commodi non vero beatae quia reprehenderit obcaecati voluptas esse velit!</p>
                <div className="see-more">TO SEE MORE</div>
            </div>
            <div className="item-caracter">
                <div className="img"><img src="/mundi3.png" alt="" /></div>
                <div className="name">PLATAFORM TOKEN-HDAI</div>
                <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe aut molestiae itaque reiciendis quos cum magni vero, sit labore beatae quisquam rem culpa quidem id voluptate ratione debitis optio?</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Caracter;