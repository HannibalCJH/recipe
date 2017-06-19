import React, {Component} from 'react';

class Ingredients extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.addIngredients = this.addIngredients.bind(this);
	}

	addIngredients() {
		console.log("Ingredient Added");
		console.log(this.quantity.value, this.ingredient.value);
		this.props.addIngredient(this.quantity.value, this.ingredient.value);

		this.quantity.value = "";
		this.ingredient.value = "";
	}

	render() {
		return (
			<div className="form-inline">
			    <label htmlFor="quantity">Quantity</label>
			    <input type="text"
			    		ref={(input) => {this.quantity = input;}}
			    		className="form-control" 
			    		id="quantity" 
			    		placeholder="Quantity" />
			    <label htmlFor="ingredient">Ingredient</label>
			    <input type="text" 
			    		ref={(input) => {this.ingredient = input;}}
			    		className="form-control" 
			    		id="ingredient" 
			    		placeholder="Ingredient" />
			    <button type="button" onClick={this.addIngredients} className="btn btn-info">Add</button>
			</div>
		);
	}
}

export default Ingredients;