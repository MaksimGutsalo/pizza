export default {
    data: {
      cart: [],
      visible: false
    },
    add (product) {
      var found = _.find(this.data.cart, ['id', product.id]);
      if(typeof found != 'object') {
        this.data.cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          category: product.category,
          descr: product.desription,
          sizes: product.size,
          qty: 1
        });
      }
    },
    dec (product) {
      var found = _.find(this.data.cart, ['id', product.id]);
      if(typeof found == 'object') {
        var index = _.indexOf(this.data.cart, found);

        if(this.data.cart[index].qty == 1) {
          this.data.cart.$remove(found);
        } else {
          this.data.cart[index].qty--;
        }
      }
    }
  }