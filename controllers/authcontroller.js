exports.getOrders=(req,res,next)=>{
	req.user.getOrders({include:['products']}).then(orders=>{
		res.render('shop/orders',{path:'/orders', pageTitle: 'Your Orders', orders:orders});
	}).catch(err=>console.log(err));
};