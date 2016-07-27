define([], function() {
  return {

    priceIcons: function(price) {
      var boldedDollarSigns = "";
      var fadedDollarSigns = "";

      _.times(price, function() { boldedDollarSigns += "$"; });
      _.times(4 - price, function() { fadedDollarSigns += "$"; });

      var priceHtml = (
        <div className="price">
          <span><b>{ boldedDollarSigns }</b>{ fadedDollarSigns }</span>
        </div>
      );

      return priceHtml;
    }
  }
});