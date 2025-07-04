const Product=require('../models/productmodel');

exports.getAddProduct=(req,res,next)=>{
	res.render('admin/edit-product', {pageTitle:'Add Product', path:'/admin/add-product',editing:false});
};

exports.postAddProduct=(req,res,next)=>{
	const title=req.body.title;
	const imageURL=req.body.imageURL;
	const price=req.body.price;
	const description=req.body.description;
	req.user.createProduct({title:title, price:price, imageURL:imageURL, description: description}).then(result=>{
		console.log('Created Product');
		res.redirect('/admin/products');
	}).catch(err=>{
		console.log(err);
	});
};

// exports.getEditProduct=(req,res,next)=>{
// 	const editMode=req.query.edit;
// 	if(!editMode)
// 	{
// 		return res.redirect('/');
// 	}
// 	const prodId=req.params.productId;
// 	req.user.getProducts({where:{id:prodId}}).then(products=>{
// 		const product=products[0];
// 		if(!product)
// 		{
// 			return res.redirect('/');
// 		}
// 	res.render('admin/edit-product', {pageTitle:'Edit Product', path:'/admin/edit-product', editing:editMode, product:product});
// }).catch(err=>console.log(err));
// };

// exports.postEditProduct=(req,res,next)=>{
// 	const prodId=req.body.productId;
// 	const updatedTitle=req.body.title;
// 	const updatedPrice=req.body.price;
// 	const updatedImageURL=req.body.imageURL;
// 	const updatedDesc=req.body.description;
// 	Product.findByPk(prodId).then(product=>{	
// 		product.title=updatedTitle;
// 		product.price=updatedPrice;
// 		product.imageURL=updatedImageURL;
// 		product.description=updatedDesc;
// 		return product.save();
// 	}).then(()=>{
// 		console.log('Updated Successfully');
// 		res.redirect('/admin/products');
// 	}).catch(err=>console.log(err));
// };

// exports.getProducts=(req,res,next)=>{
// 	req.user.getProducts().then(products=>{
// 		res.render('admin/products',{prods:products, pageTitle:'Admin Products', path:'/admin/products'});
// 	}).catch(err=>console.log(err));
// };

// exports.postDeleteProducts=(req,res,next)=>{
// 	const prodId=req.body.productId;
// 	Product.findByPk(prodId).then(product=>{
// 		return product.destroy();
// 	}).then(()=>{
// 		console.log("Deleted Successfully");
// 		res.redirect('/admin/products');
// 	}).catch(err=>console.log(err));
// };