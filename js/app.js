document.getElementById("items").style.display="none";
document.getElementById("addForms").style.display="none";

var adjective = ["adorable", "beautiful", "clean", "drab", "elegant", "fancy", "glamorous", "handsome", "long", "magnificent", "old-fashioned", "plain", "quaint", "sparkling", "ugliest", "unsightly", "wide-eyed", "alive", "better", "dead", "inexpensive", "mushy", "odd", "powerful", "rich", "vast",  "angry", "bewildered", "clumsy", "defeated", "embarrassed", "fierce", "grumpy", "helpless", "itchy",  "lazy", "mysterious", "nervous", "obnoxious", "panicky", "repulsive", "scary", "thoughtless", "uptight", "worried", "agreeable", "brave", "calm", "delightful", "eager", "faithful", "gentle", "happy", "jolly",  "lively", "nice", "obedient", "proud", "relieved", "silly", "thankful", "victorious", "witty", "zealous", "broad", "chubby", "crooked", "curved", "deep", "flat", "high", "hollow", "low", "narrow", "round", "shallow", "skinny", "square", "steep", "straight", "wide", "big", "colossal", "fat", "gigantic", "great", "huge", "immense", "large", "little", "mammoth", "massive", "miniature", "petite", "puny", "scrawny", "short", "small", "tall", "teeny", "teeny-tiny", "tiny",  "ancient",  "long", "modern", "old", "old-fashioned", "quick", "rapid", "short", "slow", "young", "bitter", "delicious", "fresh", "greasy", "juicy", "hot", "icy", "loose", "melted", "prickly", "rotten", "strong", "sweet",  "tasteless", "uneven", "weak", "wet", "wooden", "yummy", "boiling", "broken", "bumpy",  "cold", "cool", "creepy", "crooked", "cuddly", "curly", "damaged", "damp", "dirty", "dry", "dusty", "filthy", "flaky", "fluffy", "freezing", "hot", "warm", "wet", "empty", "few", "full", "heavy", "light", "many", "numerous", "sparse", "substantial"];

var objectPerson = ["dog", "ball", "bat", "bed", "book", "boy", "bun", "can", "cake", "cap", "car", "cat", "cow", "cub", "cup", "dad", "day", "dog", "doll", "dust", "fan", "feet", "girl", "gun", "hat", "hen", "jar", "kite", "man", "map", "men", "mom", "pan", "pet", "pie", "pig", "pot", "rat", "son", "sun", "toe", "tub", "van", "apple", "arm", "banana", "bike", "bird", "book", "chin", "clam", "clover", "club", "corn", "crayon", "crow", "crown", "crowd", "crib", "desk", "dime", "dirt", "dress", "fang",  "flag", "flower", "fog",  "home", "horn", "hose",  "juice", "kite", "lake", "maid", "mask", "mice", "milk", "mint", "meal", "meat", "moon", "mother", "morning", "nest", "nose", "pear", "pen", "pencil", "plant", "rain", "river", "road", "rock",  "rose", "seed",  "shoe", "shop",  "sink", "snail", "snake", "snow", "soda", "sofa", "star", "steps", "stew", "stove", "straw", "string", "swing", "table", "tank", "team", "tent",  "toes", "tree", "vest", "water", "wing", "winter", "woman", "women",  "animal", "aunt", "bait", "balloon",  "bead", "beam", "bean", "bedroom", "boot", "bread", "brick", "brother", "camp", "chicken", "children", "crook", "deer", "dock", "doctor", "drum", "dust", "eye", "family", "father", "fight", "flesh", "food", "frog", "goose", "grandfather", "grandmother", "grape", "grass", "horse", "jail", "jam", "kiss", "kitten", "light", "loaf", "lock", "lunch", "lunchroom", "meal", "mother", "notebook", "owl", "pail", "parent", "park", "plot", "rabbit", "rake", "robin", "sack", "sister", "soap",  "spoon", "spot", "spy", "tiger", "toad",  "tramp", "tray",  "uncle", "vase", "winter", "water", "wheel", "wish", "wool", "yard", "zebra", "actor", "airplane",  "army", "baseball", "beef", "birthday", "boy", "brush",  "butter", "cent", "cherries", "cherry", "cobweb", "coil", "cracker", "eggnog", "elbow", "face", "fireman", "glove",  "goldfish", "goose", "grain", "hair", "jellyfish", "ladybug", "mailbox", "oatmeal", "pail", "pancake", "pear", "popcorn", "queen", "quilt", "scarecrow", "scarf",  "toothpaste", "twig", "volleyball", "wood", "wrench", "apple", "arithmetic", "badge", "basket", "basketball",  "beast", "beetle", "beggar", "brain",  "bubble", "bucket", "cactus", "cannon", "cattle", "crate", "ice cream",  "donkey", "drugs",  "finger", "flock of birds", "doorframe", "furniture", "geese", "ghost", "giraffe", "governor",  "fire hydrant", "icicle",  "jeans", "judge", "lace", "lamp", "lettuce", "marbles",  "patch",  "rifle", "rollerskates",   "smoke", "toothbrush", "turkey", "underwear", "vegetable", "visitor", "dam", "cat", "dog", "phone", "iPhone", "computer", "bomb", "breakfast", "cabbage", "cable", "calculator", "calendar",  "carpenter",  "circle", "creature", "faucet", "feather",  "fruit", "fuel", "guitar",   "kitten", "laborer",  "lawyer", "linen", "locket", "lumber", "magic", "minister", "mitten", "money",  "music", "pickle", "picture", "plastic", "pocket", "police",  "squirrel", "suit", "sweater", "veil", "vein", "wrist", "writer"];

var connectingWord = ["in", "on", "by", "a few feet from", "inches from", "lost in", "wondering where to find", "near", "next to", "above", "in front of", "underneath"];

var locationPlace = ["the hall", "a cornfield", "a hill", "a tower", "a volcano", "a plantation", "a store", "a street", "downtown", "an ocean", "a beach", "an alley", "outer space", "the town", "a trail", "an airport", "some bushes", "a cave", "a gatehouse", "a barbershop", "quicksand", "a rainstorm", "a thunderstorm", "the porch", "a city park", "the grocery store", "a throne", "a basement", "a cemetery", "an earthquake", "an island", "a boat", "a motorcycle", "a stage", "a sailboat", "an airplane", "playground", "the seashore", "a sidewalk", "a movie theater", "a fire station", "a gas station", "a mountain-top", "some train tracks", "a train station", "the wilderness", "a coffee shop", "a deli", "a river", "a classroom"];


function generateIdeas() {
	var randomadjective = adjective[Math.floor(Math.random() * adjective.length)];
	var randomObjectPerson = objectPerson[Math.floor(Math.random() * 			objectPerson.length)];
	var randomConnectingWord = connectingWord[Math.floor(Math.random() * connectingWord.length)];
	var randomLocationPlace = locationPlace[Math.floor(Math.random() * locationPlace.length)];

	document.getElementById("adjective").innerHTML = randomadjective;
	document.getElementById("objectPerson").innerHTML = randomObjectPerson;
	document.getElementById("connectingWord").innerHTML = randomConnectingWord;
	document.getElementById("locationPlace").innerHTML = randomLocationPlace + ".";
	
	document.getElementById("items").style.display="block";
	document.getElementById("addForms").style.display="block";
}

document.getElementById("generate-button").onclick = generateIdeas;

/*ADD ITEMS TO GENERATOR*/
function addAdjectiveToList () {
	var addAdjective = document.getElementById("addAdjective").value;
	adjective.push(addAdjective);
	document.getElementById("addAdjective").value = "";
} 

function addObjectPersonToList () {
	var addObjectPerson = document.getElementById("addObjectPerson").value;
	objectPerson.push(addObjectPerson);
	document.getElementById("addObjectPerson").value = "";
}

function addConnectingWordToList () {
	var addConnectingWord = document.getElementById("addConnectingWord").value;
	connectingWord.push(addConnectingWord);
	document.getElementById("addConnectingWord").value = "";
}

function addLocationPlaceToList () {
	var addLocationPlace = document.getElementById("addLocationPlace").value;
	locationPlace.push(addLocationPlace);
	document.getElementById("addLocationPlace").value = "";
}