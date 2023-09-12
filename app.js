/*
var tasks = []
for (var i = 1; i <= 10; i++) {
    tasks.push({
        id: i
    })
}
*/


//var vmTodo =
new Vue({
    el: '#app',
    //data: {
    data () {
            return {
                inputItem: '',
                newItem: [],
                selectNum: [],
                //newItem: '',
                shopList: [
                  {index: 'Fish', product: 'Fish', quantity: 20 },
                  {index: 'Burgers', product: 'Burgers', quantity: 4 },
                  {index: 'Potatoes', product: 'Potatoes', quantity: 10 },
                  {index: 'Apples', product: 'Apples', quantity: 12 },
                  {index: 'Pancake Mix', product: 'Pancake Mix', quantity: 1}
                ],
                //selected: undefined,
                previousProduct: [ 'Fish','Burgers','Potatoes','Apples','Pancake Mix','Chicken','Chilli','Chocolate' ],
                preFilter: [],
                edit: false,
                //
                filterText: ''
            }
    },
    methods: {
        makeSequence() {
            this.selectNum = [...Array(100).keys()]
        },
        addItem() {
            if (this.inputItem.length > 0) {
                //this.newItem2 = this.newItem;
                this.newItem.push({index: this.inputItem, name: this.inputItem, num: 1});
                this.inputItem = '';

            } else {
                alert("You need to add some text")
            }
        },
        addItemL(item) {
                //this.newItem2 = this.newItem;
                this.newItem.push({index: item, name: item, num: 1});
                this.inputItem = '';
        },
        addToShopList(index, name, num) {
            if (num > 0) {
                console.log(name);
                //'your string'.replace(/\b\w/g, function(l){ return l.toUpperCase() })
                //trim white space from end
                //const myString = name;
                // https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string
                const stringLength = name.length;
                // console.log('lastChar: ', name.charAt(stringLength - 1));
                lastChar = name.charAt(stringLength - 1);

                // Check for white space
                var inValid = /\s/;
                var k = inValid.test(lastChar);
                alert(k); //returns true false

                if (k) {
                  name = name.slice(0, -1); // trims last character
                  console.log("new string: " + name);
                    newStr = name.replace(/\b\w/g, l => l.toUpperCase());
                    console.log(newStr);
                    //alert(name);

                    console.log('Q', this.shopList);
                    this.shopList[0].quantity = this.shopList[0].quantity + num;

                    // Check if already on list and if it is add it to the current list item else add new item

                    this.shopList.push({index: name, product: newStr, quantity: num}) //add the new task an object: property

                    // check is already in the shopping and offer to merge
                    this.newItem.splice(index, 1);
                    this.previousProduct.includes(newStr) ? console.log('Already in the list') : this.previousProduct.push(newStr);
                    // if includes then push a mark to say it has been add before, removed, bought.

                    //console.log('Already in the list')
                    console.log(this.previousProduct);
                }
                else {
                    newStr = name.replace(/\b\w/g, l => l.toUpperCase());
                    console.log(newStr);
                    //alert(name);

                    console.log('Q', this.shopList);
                    if (this.shopList[0].index === newStr) {
                        this.shopList[0].quantity = this.shopList[0].quantity + num;
                        this.newItem.splice(index, 1); //   use to remove from add to list
                    } else {
                        this.shopList.push({index: name, product: newStr, quantity: num}) //add the new task an object: property
                        // check is already in the shopping and offer to merge
                        this.newItem.splice(index, 1); //   use to remove from add to list
                    }


                    // should check if the item is already in the array, shouldn't be if they selected it from the preemptive

                    this.previousProduct.includes(newStr) ? console.log('Already in the list') : this.previousProduct.push(newStr);
                    // if includes then push a mark to say it has been add before, removed, bought.

                    //console.log('Already in the list')
                    console.log(this.previousProduct);
                }

                //console.log("new string: " + newStr);
                //name = name.trim(); // trims white space

                // redundant let str = name;
                // let

            } else {
                alert("You need to add more than 0")
            }
        },

        editTask(index) {
            console.log(index);
            //this.tasks.edit = true
        },
        removeTask(index) {
            //this.$delete(this.tasks, index);
            remove = confirm('This will delete the task and is not reversible');
            if (remove === true) {
                this.tasks.splice(index, 1);
            }
            //this.tasks.splice(index, 1);
            //console.log(this.tasks);
        },
        completedTask(task, index) {
            console.log(task);

        },

        /* Sorts */
        sortLowest() {
            this.shopList.sort((a, b) => a.quantity > b.quantity ? 1 : -1);
        },
        sortHighest() {
            this.shopList.sort((a, b) => a.quantity < b.quantity ? 1 : -1);
        },
        sortA() {
            this.shopList.sort((a, b) => {
                let pa = a.product.toLowerCase(),
                    pb = b.product.toLowerCase();

                if (pa < pb) {
                    return -1;
                }
                if (pa > pb) {
                    return 1;
                }
                return 0;
            });
        },





    },
    computed: {
        filteredFood() {
            let filter = new RegExp(this.filterText, 'i')
            return this.ratingsInfo.filter(el => el.title.match(filter))
        },

        filterPre(){

            /* Filter
        * Array.prototype.filter()
        * String.prototype.match()
        * */

            let filter = new RegExp(this.inputItem, 'i')
            return this.previousProduct.filter(el => el.match(filter));

        }
    },
    created() {
        this.makeSequence();
        console.log();
    }
});

//console.log(vmTodo);
/*
 methods: {
    sortLowest() {
      this.ratingsInfo.sort((a, b) => a.rating > b.rating ? 1 : -1);
    },
    sortHighest() {
      this.ratingsInfo.sort((a, b) => a.rating < b.rating ? 1 : -1);
    }
  },
  computed: {
    filteredFilms() {
      let filter = new RegExp(this.filterText, 'i')
      return this.ratingsInfo.filter(el => el.title.match(filter))
    }
  }

 */
