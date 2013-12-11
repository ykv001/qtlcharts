// Generated by CoffeeScript 1.6.3
var iplotPXG;

iplotPXG = function(data, jsOpts) {
  var gen, gnames, h, inferred, margin, mychart, phe, title, w, x, xlab, y, ylab, _i, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _results;
  gen = (function() {
    var _i, _len, _ref, _results;
    _ref = data.geno[0];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      x = _ref[_i];
      _results.push(Math.abs(x));
    }
    return _results;
  })();
  inferred = (function() {
    var _i, _len, _ref, _results;
    _ref = data.geno[0];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      x = _ref[_i];
      _results.push(x < 0);
    }
    return _results;
  })();
  phe = data.pheno;
  gnames = ((function() {
    var _results;
    _results = [];
    for (y in data.genonames) {
      _results.push(data.genonames[y]);
    }
    return _results;
  })())[0];
  h = (_ref = jsOpts != null ? jsOpts.height : void 0) != null ? _ref : 450;
  w = (_ref1 = jsOpts != null ? jsOpts.width : void 0) != null ? _ref1 : 300;
  title = (_ref2 = jsOpts != null ? jsOpts.title : void 0) != null ? _ref2 : "";
  margin = (_ref3 = jsOpts != null ? jsOpts.margin : void 0) != null ? _ref3 : {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  };
  xlab = (_ref4 = jsOpts != null ? jsOpts.xlab : void 0) != null ? _ref4 : "Genotype";
  ylab = (_ref5 = jsOpts != null ? jsOpts.ylab : void 0) != null ? _ref5 : "Phenotype";
  mychart = dotchart().height(h).width(w).margin(margin).xcategories((function() {
    _results = [];
    for (var _i = 1, _ref6 = gnames.length; 1 <= _ref6 ? _i <= _ref6 : _i >= _ref6; 1 <= _ref6 ? _i++ : _i--){ _results.push(_i); }
    return _results;
  }).apply(this)).xcatlabels(gnames).dataByInd(false).xlab(xlab).ylab(ylab).title(title);
  d3.select("div#chart").datum([gen, phe]).call(mychart);
  return mychart.pointsSelect().attr("fill", function(d, i) {
    if (inferred[i]) {
      return "Orchid";
    }
    return "slateblue";
  }).on("click", function(d) {
    var r;
    r = d3.select(this).attr("r");
    return d3.select(this).transition().duration(500).attr("r", r * 3).transition().duration(500).attr("r", r);
  });
};