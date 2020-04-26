// /* eslint-disable complexity */
// import React, {Component, Fragment} from 'react'
// import {connect} from 'react-redux'

// import CssBaseline from '@material-ui/core/CssBaseline'
// import Grid from '@material-ui/core/Grid'
// import Input from '@material-ui/core/Input'
// import InputAdornment from '@material-ui/core/InputAdornment'
// import InputLabel from '@material-ui/core/InputLabel'
// import TextField from '@material-ui/core/TextField'

// import Typography from '@material-ui/core/Typography'
// import {Button, MenuItem, Paper, Select} from '@material-ui/core'

// import {fetchCategories} from '../store'

// class ProductForm extends Component {
//   componentDidMount() {
//     this.props.getCategories()
//     if (this.props.isEdit) {
//       this.setState(this.props.product)
//     }
//   }

//   render() {
//     const {categories, handleChange, handleSubmit, isEdit, product} = this.props

//     const formTitle = isEdit ? 'Edit Product' : 'New Product Form'

//     return (
//       <Fragment>
//         <Grid container alignItems="flex-start" spacing={2}>
//           <div style={{padding: 20, margin: 'auto', maxWidth: 600}}>
//             <CssBaseline />
//             <Paper style={{padding: 5}}>
//               <Typography
//                 variant="h4"
//                 align="center"
//                 component="h1"
//                 gutterBottom
//               >
//                 {formTitle}
//               </Typography>
//               <form onSubmit={handleSubmit} className="productForm">
//                 <div>
//                   <Grid item xs={6}>
//                     <TextField
//                       className="productForm name"
//                       type="text"
//                       name="name"
//                       label="Product"
//                       align="center"
//                       fullWidth
//                       value={product.name}
//                       onChange={handleChange}
//                     />
//                   </Grid>
//                 </div>
//                 <div>
//                   <Grid item xs={12}>
//                     <TextField
//                       className="productForm description"
//                       type="text"
//                       name="description"
//                       label="Description"
//                       fullWidth
//                       value={product.description}
//                       onChange={handleChange}
//                     />
//                   </Grid>
//                 </div>
//                 <div>
//                   <Grid item xs={6}>
//                     <Input
//                       className="productForm price"
//                       type="double"
//                       name="price"
//                       label="Price"
//                       fullWidth
//                       placeholder="Price"
//                       startAdornment={
//                         <InputAdornment position="start">$</InputAdornment>
//                       }
//                       value={product.price}
//                       onChange={handleChange}
//                     />
//                   </Grid>
//                 </div>
//                 <div>
//                   <Grid item xs={12}>
//                     <TextField
//                       className="productForm imgUrl"
//                       type="text"
//                       name="imageUrl"
//                       label="URL"
//                       fullWidth
//                       value={product.imageUrl}
//                       onChange={handleChange}
//                     />
//                   </Grid>
//                 </div>
//                 <div>
//                   <Grid item xs={6}>
//                     <TextField
//                       className="productForm quantity"
//                       type="integer"
//                       name="quantity"
//                       label="Quantity"
//                       fullWidth
//                       value={product.quantity}
//                       onChange={handleChange}
//                     />
//                   </Grid>
//                 </div>
//                 <div>
//                   <Grid item xs={6}>
//                     <InputLabel id="select-label">Select Category</InputLabel>
//                     <Select
//                       labelId="select-outlined-label"
//                       id="select-outlined"
//                       name="categoryId"
//                       value={product.categoryId}
//                       onChange={handleChange}
//                       label="Category"
//                       fullWidth
//                       className="productForm category"
//                     >
//                       {categories.map(cat => (
//                         <MenuItem key={cat.id} value={cat.id}>
//                           {cat.name}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </Grid>
//                 </div>
//                 <div>
//                   <Grid item style={{marginTop: 16}}>
//                     <Button variant="contained" type="submit" value="Submit">
//                       Submit
//                     </Button>
//                   </Grid>
//                 </div>
//               </form>
//             </Paper>
//           </div>
//         </Grid>
//       </Fragment>
//     )
//   }
// }

// const mapState = state => ({
//   categories: state.categories.categoryList,
//   products: state.products.productList
// })

// const mapDispatch = dispatch => ({
//   getCategories: () => dispatch(fetchCategories())
// })

// export default connect(mapState, mapDispatch)(ProductForm)
