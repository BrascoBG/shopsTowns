function towns([a,b,c]){
  let town = a.toLowerCase();
  let product = b.toLowerCase();
  let quantity = Number(c);

  if(town === 'sofia'){
    if(product === 'coffee'){
      console.log((0.50 * quantity).toFixed(2));
    }
    else if(product === 'water'){
      console.log((0.80 * quantity).toFixed(2));
    }
    else if(product === 'beer'){
      console.log((1.20 * quantity).toFixed(2));
    }
    else if(product === 'sweets'){
      console.log((1.45 * quantity).toFixed(2));
    }
    else if(product === 'peanuts'){
      console.log((1.60 * quantity).toFixed(2));
    }
    else{
      console.log("We don't have that kind of product. Sorry.");
    }
  }
  else if(town === 'plovdiv'){
    if(product === 'coffee'){
      console.log((0.40 * quantity).toFixed(2));
    }
    else if(product === 'water'){
      console.log((0.70 * quantity).toFixed(2));
    }
    else if(product === 'beer'){
      console.log((1.15 * quantity).toFixed(2));
    }
    else if(product === 'sweets'){
      console.log((1.30 * quantity).toFixed(2));
    }
    else if(product === 'peanuts'){
      console.log((1.50 * quantity).toFixed(2));
    }
    else{
      console.log("We don't have that kind of product. Sorry.");
    }
  }
  else if(town === 'varna'){
    if(product === 'coffee'){
      console.log((0.45 * quantity).toFixed(2));
    }
    else if(product === 'water'){
      console.log((0.70 * quantity).toFixed(2));
    }
    else if(product === 'beer'){
      console.log((1.10 * quantity).toFixed(2));
    }
    else if(product === 'sweets'){
      console.log((1.35 * quantity).toFixed(2));
    }
    else if(product === 'peanuts'){
      console.log((1.55 * quantity).toFixed(2));
    }
    else{
      console.log("We don't have that kind of product. Sorry.");
    }
  }
  else{
    console.log("Sorry! There is no shops in this town.");
  }

}

towns(['plovdiv', 'water', 3]);
