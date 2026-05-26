import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
return (

<div>

<nav className="navbar">

<h2>ShopHub</h2>

<div className="menu">

<Link to="/">
<button>
Home
</button>
</Link>

<Link to="/login">
<button>
Login
</button>
</Link>

<Link to="/register">
<button>
Register
</button>
</Link>

<Link to="/cart">
<button>
Cart 🛒
</button>
</Link>

<Link to="/admin">
<button>
Admin
</button>
</Link>

</div>

</nav>
<section className="hero">

<h1>Welcome to ShopHub</h1>

<p>Discover amazing products</p>

<button>Shop Now</button>

</section>

<h1 className="title">
Featured Products
</h1>

<div className="products">

<div className="card">

<img
src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
alt=""
/>

<h3>iPhone 15</h3>

<p>Latest Smartphone</p>

<h2>₹79999</h2>

<button>Add To Cart</button>

</div>

<div className="card">

<img
src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
alt=""
/>

<h3>Nike Shoes</h3>

<p>Premium Collection</p>

<h2>₹4999</h2>

<button>Add To Cart</button>

</div>

<div className="card">

<img
src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
alt=""
/>

<h3>Smart Watch</h3>

<h2>₹9999</h2>

<button>Add To Cart</button>

</div>

</div>

<footer>

<p>© 2026 ShopHub</p>

</footer>

</div>

);

}

export default Home;