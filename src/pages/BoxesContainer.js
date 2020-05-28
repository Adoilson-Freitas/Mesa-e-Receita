import React, {Component} from 'react';
import './styles.css';
import HeaderHeader from '../components/HeaderHeader';
import Ind from './Ind';
import Box from './Box';
import Footer from '../components/Footer';

class BoxesContainer extends Component {

	constructor() {
		super();
    var data;
    data =   [
                {
                  key: 0,
                  title: "Salsa verde",
                  ingredients: "small pack tarragon\n\n2 small packs flat-leaf parsley\n\n30g wild garlic (or 2 garlic cloves)\n\n 3 tsp Dijon mustard\n\n 40g small capers, drained, rinsed and roughly chopped\n\n 200ml extra virgin olive oil\n\n 2 tbsp sherry vinegar",
                  instructions: "1. Chop the herbs and garlic with 1 tsp sea salt until very fine. Add the mustard and capers , and combine.\n2. Transfer the mixture to a bowl and stir in the olive oil. Add the vinegar, little by little, stirring and tasting as you go – trust your palate!",
                  img: "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/04/salsa-verde-2.jpg?itok=R9-68UMh"
								},
                {
                  key: 1,
                  title: "Maple-mustard pulled pork", 
                  ingredients: "200g sea salt\n\n300g light muscovado sugar\n\n2kg/4lb 8oz piece pork shoulder\n\n100ml maple syrup\n\n100g wholegrain mustard\n\n2 tbsp English mustard powder\n\n",
                  instructions:"1. Mix the sea salt and 200g of the sugar in a large food bag, add the pork and coat it well. (If you don’t have a bag, rub over the pork in a dish and cover with cling film.) Leave in the fridge overnight.\n\n2. The next day, remove the pork and wipe down the meat with kitchen paper. Heat oven to 140C/120C fan/gas 1. Mix the remaining sugar, the maple syrup, mustards and some ground pepper. Rub half the mixture over the pork and sit it on a rack in a roasting tin. Roast for 6 hrs.\n\n3. Spoon the remaining maple mixture over the pork and roast for 1 hr more.\n\n4. Rest the meat for 30 mins on a plate loosely covered with foil. To serve, tear the pork into big fat chunks and, after skimming the surface, spoon over any juices from the tin.", 
                  img:"http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1119469_10.jpg?itok=2GIQyKfz"
                },
                {
                  key: 2, 
                  title: "Salmon & spinach with tartare cream", 
                  ingredients: "1 tsp sunflower or vegetable oil\n\n 2 skinless salmon fillet\n\n 250g bag spinach\n\n 2 tbsp reduced-fat crème fraîche\n\njuice ½ lemon\n\n 1 tsp caper, \n\n 2 tbsp flat-leaf parsley, chopped\n\nlemon wedges, to serve",
                  instructions: "1. Heat the oil in a pan, season the salmon on both sides, then fry for 4 mins each side until golden and the flesh flakes easily. Leave to rest on a plate while you cook the spinach.\n\n2. Tip the leaves into the hot pan, season well, then cover and leave to wilt for 1 min, stirring once or twice. Spoon the spinach onto plates, then top with the salmon. Gently heat the crème fraîche in the pan with a squeeze of the lemon juice, the capers and parsley, then season to taste. Be careful not to let it boil. Spoon the sauce over the fish, then serve with lemon wedges.",
                  img: "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--52867_12.jpg?itok=pnLXWqFK"
                },
                {
                  key: 3,
                  title: "Spicy black bean tacos",
                  ingredients: "1 tbsp vegetable oil\n\n3 garlic cloves, chopped\n\n3 x 400g cans black beans, drained and rinsed\n\n3 tbsp cider vinegar\n\n1 ½ tbsp honey\n\n1 ½ tbsp smoked paprika\n\n1 ½ tbsp ground cumin\n\n1 small garlic clove\n\n2 tbsp roughly chopped coriander\n\n1 green chilli, sliced\n\n2 avocados, halved and stoned\n\njuice 1 lime\n\n110g pack pomegranate seeds\n\n1 green chilli, finely diced\n\n1 small white onion, finely diced\n\nsmall handful fresh coriander, chopped",
                  instructions: "1. In a large frying pan, heat the oil and add the garlic. Fry until golden, then add the beans. Pour in the cider vinegar, honey and spices along with 1 tsp or more of salt, to taste. Cook until warmed through, crushing gently with the back of your wooden spoon, then set aside.\n\n2. The best way to make the guacamole is with a large stone pestle and mortar, but you can use a medium bowl and a flat-ended rolling pin instead. Crush the garlic, coriander and chilli into a rough paste. Scoop in the avocado with a little salt and crush roughly – you want it chunky, not smooth. Squeeze in the lime juice and set aside.\n\n3. Mix the salsa ingredients in a small bowl. Heat a griddle pan or steamer and quickly griddle the tortillas or steam a stack of them to warm up. Reheat the bean mixture.\n\n4. To serve, put 1-2 heaped tbsp of beans on a tortilla. Top with a big spoonful of guacamole and some salsa, hot sauce and a dollop of soured cream or yogurt.",
                  img: "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/spicy-black-bean-tacos.jpg?itok=RTBXRL7L"
								}
								
              ]                  
               
		this.state = {
			data,
		counter: 4,
		// The index of which recipe to populate box with
		currIndex: 0,
		showBox: false,
		};
	}

	/* Function adds new recipe
	 * @params [String] title : new recipe title
	 * @return [String] ingredients : new recipe ingredients
	 */
	addRecipe(title, ingredients, instructions, img) {
		const data = this.state.data,
			  newCounter = this.state.counter + 1;

		this.setState({counter: newCounter});

		const newRecipe = {
			key: this.state.counter,
			title: title,
			ingredients: ingredients,
			instructions: instructions,
		}
		if ( img ) {
			newRecipe.img = img;
		}
		this.state.data.push(newRecipe);
		this.forceUpdate();		
	}

	/* Function returns index ofobject in array using key
	 * @params [Number] key : the key of object
	 * @return [Number] index : the index of object in state data
	 * array
	 */
	getIndex(key) {
		var i = this.state.data.findIndex((element)=>{
			if (element.key === key) { return true} })
		return i;
	}

	/* Function updates data in this.state and re renders components
	 * @params [Number] key : the key of object
	 *			   [String] title : title data
	 *				 [String] ingredients : ingredients data
	 * @return [Number] index : the index of object in state data
	 * array
	 */
	updateRecipe(key, title, ingredients, instructions, img) {
		const data = this.state.data;
		var i = this.getIndex(key);

		this.state.data[i].title = title;
		this.state.data[i].ingredients = ingredients;
		this.state.data[i].instructions = instructions;
		this.state.data[i].img = img;				
		this.forceUpdate();
	}

	deleteRecipe(key){
		var i = this.getIndex(key);
		this.state.data.splice(i, 1);
		this.forceUpdate();
		this.closeBox();
	}
  

	closeBox() {
		this.setState({showBox:false})
	}

	showBox(key) {
		const index = this.getIndex(key);
		this.setState({
			showBox: true,
			currIndex: index
		});
	}
	
	render() {
		var box;
		if (this.state.showBox) {
			box = 	<Box
						data={this.state.data[this.state.currIndex]}
						update={this.updateRecipe.bind(this)}
						delete={this.deleteRecipe.bind(this)}
						close={this.closeBox.bind(this)}
				    />
		}

		
		return (
			<div>
				{box}
				<HeaderHeader
					add={this.addRecipe.bind(this)}
				 />
				<Ind
				
					data={this.state.data} 
					show={this.showBox.bind(this)}
				/>
				<Footer />
			</div>
		);
	}

}

export default BoxesContainer;