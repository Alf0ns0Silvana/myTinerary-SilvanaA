import Link from './Links'
function Footer () {
    const links = [
        {title:'Home', to:'/'},
        {title:'Cities', to:'/cities'},
        {title:'About us', to:'/aboutus'}
    ]
  return (
    <footer className="footer">
        <div className="column1">
        <span className='span1'>
            Explore without limits, travel with us.
        </span>
        <span className='span2'>
            My Itinerary
        </span>
        </div>
        <div className="column2">
        {links.map((link) => (<Link key={link.title} title={link.title} to={link.to}/>))}
        </div>
        <div className="column3">
        <div className="column-title">Contact Us</div>
        <div className="social-icons">
            <a href='#' className="social-icon"><img src="./wsp-icon.png" /></a>
            <a href='#' className="social-icon"><img src="./fb-icon.png" /></a>
            <a href='#' className="social-icon"><img src="./ig-icon.png" /></a>
        </div>
        </div>
  </footer>
  )
}

export default Footer