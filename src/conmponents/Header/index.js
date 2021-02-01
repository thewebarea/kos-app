/*import Srars from '../../assets/Stars.svg';
import Trees from '../../assets/Trees.svg';*/
import h from './style.module.css';

const Header = ({title, desc}) => {
    let count = 1;
    setInterval(() => {
       count++;
       console.log('####: count: ', count)
    }, 10000);


    return (
        <header className="root">
            <div className="forest"></div>
            <div className="container">
                <h1>{title} {count}</h1>
                <p>{desc}</p>
            </div>
        </header>
    )
}
export default Header;