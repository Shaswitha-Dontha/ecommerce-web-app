function Cart(){

const items=[];

return(

<div>

<h1>
Shopping Cart
</h1>

{
items.length===0
?

<h2>
Cart Empty
</h2>

:

<h2>
Items Added
</h2>

}

<button>
Checkout
</button>

</div>

);

}

export default Cart;