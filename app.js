new Vue({
  el: '#app',
  //data: {
  data() {
    return {
      inputItem: '',
      newItem: [],
      selectNums: [],
      shopListArray: [],
      shopList: [
        {index: 'Fish', product: 'Fish', quantity: 20},
        {index: 'Burgers', product: 'Burgers', quantity: 4},
        {index: 'Potatoes', product: 'Potatoes', quantity: 10},
        {index: 'Apples', product: 'Apples', quantity: 12},
        {index: 'Pancake Mix', product: 'Pancake Mix', quantity: 1}
      ],
      //selected: undefined,
      previousProduct: ['Fish', 'Burgers', 'Potatoes', 'Apples', 'Pancake Mix', 'Chicken', 'Chilli', 'Chocolate'],
      preFilter: [],
      edit: false,
      //
      filterText: ''
    }
  },
  methods: {
    makeSequence() {
      this.selectNums = [...Array(101).keys()]  //  todo: slice/pop 0 off the front
    },
    addItem() {
      if (this.inputItem.length > 0) {
        //this.newItem2 = this.newItem;
        this.newItem.push({index: this.inputItem, itemName: this.inputItem, num: 1});
        this.inputItem = '';

      } else {
        alert("You need to add some text")
      }
    },
    /*addItemL(item) {
            //this.newItem2 = this.newItem;
            this.newItem.push({index: item, name: item, num: 1});
            this.inputItem = '';
    },*/
    createShopListArray() {
      this.shopListArray = [];
      for (let i = 0; i < this.shopList.length; i++) {
        this.shopListArray.push(this.shopList[i].index);
      }
    },
    addToShopList(index, itemName, num) {
      if (num > 0) {
        console.log(itemName);
        const stringLength = itemName.length;
        const lastChar = itemName.charAt(stringLength - 1);

        // Check for white space
        const inValid = /\s/;
        const k = inValid.test(lastChar);

        // This could be moved and created again if a new item is added instead of each time.
        this.createShopListArray();

        // Burger or Burgers
        // Make Add button focus after enter

        if (k) {
          itemName = itemName.slice(0, -1); // trims last character
          const newStr = itemName.replace(/\b\w/g, l => l.toUpperCase());

          const newStrIndex = this.shopListArray.indexOf(newStr);

          if (newStrIndex === -1) {
            this.shopList.push({index: itemName, product: newStr, quantity: num}) //add the new task an object: property
            // check is already in the shopping and offer to merge
            this.newItem.splice(index, 1);
          } else {
            this.shopList[newStrIndex].quantity = this.shopList[newStrIndex].quantity + num;
            this.newItem.splice(index, 1); //use to remove from add to list
          }

          // check is already in the shopping and offer to merge
          this.previousProduct.includes(newStr) ? console.log('Already in the list') : this.previousProduct.push(newStr);
          // if includes then push a mark to say it has been add before, removed, bought.

        } else {
          const newStr = itemName.replace(/\b\w/g, l => l.toUpperCase());
          console.log(newStr);

          const newStrIndex = this.shopListArray.indexOf(newStr);

          console.log('Q', this.shopList);
          if (newStrIndex === -1) {
            this.shopList.push({index: itemName, product: newStr, quantity: num}) //add the new task an object: property
            // check is already in the shopping and offer to merge
            this.newItem.splice(index, 1);
          } else {
            this.shopList[newStrIndex].quantity = this.shopList[newStrIndex].quantity + num;
            this.newItem.splice(index, 1); //   use to remove from add to list
          }

          this.previousProduct.includes(newStr) ? console.log('Already in the list') : this.previousProduct.push(newStr);
          // if includes then push a mark to say it has been add before, removed, bought.

        }

      } else {
        alert("You need to add more than 0")
      }
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

    filterPre() {

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
