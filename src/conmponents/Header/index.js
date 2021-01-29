/*import Srars from '../../assets/Stars.svg';
import Trees from '../../assets/Trees.svg';*/
import h from './style.module.css';

console.log('#####: h',h);
const Header = () => {
    return (
        <header className="root">
            <div className="forest"></div>
            <div className="container">
                <h1>This is title</h1>
                <p>This is Description!</p>
            </div>
        </header>
    )
}
export default Header;