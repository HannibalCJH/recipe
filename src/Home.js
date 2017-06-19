import React, {Component} from 'react';
import IngredientList from './IngredientList';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: JSON.parse(localStorage.getItem("recipes")) || []
		};

	}

	displayRecipes() {
		let resultsArray = [];

		this.state.recipes.map((recipe, i) => {
			resultsArray.push(
				<div className="col-sm-6 col-md-4">
					<div className="thumbnail">
						<img src={recipe.image} alt={recipe.name} />
						<div className="caption">
					    	<h3>{recipe.name}</h3>
					        <p>{recipe.description}</p>
					        <IngredientList recipe={recipe} />
					    </div>
					</div>
				</div>
			);
		});

		return resultsArray;
	}

	render() {
		return (
			<div className="row">
				<h1>Home</h1>
				{this.displayRecipes()}
			</div>
		);
	}
}

export default Home;