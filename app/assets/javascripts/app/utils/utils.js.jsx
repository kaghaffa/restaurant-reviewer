define([], function() {
  return {

    roundedStarsLabel: function(stars) {
      if (this.isNumeric(stars)) {
        return (Math.round(stars * 10) / 10) + " Stars";
      } else {
        return "No star rating";
      }
    },

    starIcons: function(stars) {
      var starIcons = [];
      if (!this.isNumeric(stars)) {
        return stars;
      }

      _.times(5, function() {
        if (stars >= 1) {
          stars -= 1;
          starIcons.push("star");
        } else if (stars > 0 && stars < 1) {
          stars = 0;
          starIcons.push("star_half");
        } else {
          starIcons.push("star_border");
        }
      });

      var starsHtml = starIcons.map(function(icon, index) {
        return (
          <span className="icon icon-primary" key={ index }>
            <i className="material-icons">{ icon }</i>
          </span>
        )
      });

      return starsHtml;
    },

    isNumeric: function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },


    priceIcons: function(price) {
      var boldedDollarSigns = "";
      _.times(price, function() { boldedDollarSigns += "$"; });

      var priceHtml = (
        <div className="price" aria-label={ price + " dollar signs" }>
          <span><b>{ boldedDollarSigns }</b></span>
        </div>
      );

      return priceHtml;
    }
  }
});