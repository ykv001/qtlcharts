// Generated by CoffeeScript 1.6.3
var chrscales, formatAxis, pullVarAsArray, reorgLodData, unique;

formatAxis = function(d) {
  var ndig;
  d = d[1] - d[0];
  ndig = Math.floor(Math.log(d % 10) / Math.log(10));
  if (ndig > 0) {
    ndig = 0;
  }
  ndig = Math.abs(ndig);
  return d3.format("." + ndig + "f");
};

unique = function(x) {
  var output, v, _i, _len, _results;
  output = {};
  for (_i = 0, _len = x.length; _i < _len; _i++) {
    v = x[_i];
    if (v) {
      output[v] = v;
    }
  }
  _results = [];
  for (v in output) {
    _results.push(output[v]);
  }
  return _results;
};

pullVarAsArray = function(data, variable) {
  var i, v;
  v = [];
  for (i in data) {
    v = v.concat(data[i][variable]);
  }
  return v;
};

chrscales = function(data, width, chrGap) {
  var L, chr, chrEnd, chrLength, chrStart, cur, i, rng, totalChrLength, w, _i, _j, _len, _len1, _ref, _ref1;
  chrStart = [];
  chrEnd = [];
  chrLength = [];
  totalChrLength = 0;
  _ref = data.chrnames;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    chr = _ref[_i];
    rng = d3.extent(data.posByChr[chr]);
    chrStart.push(rng[0]);
    chrEnd.push(rng[1]);
    L = rng[1] - rng[0];
    chrLength.push(L);
    totalChrLength += L;
  }
  data.chrStart = [];
  data.chrEnd = [];
  cur = Math.round(chrGap / 2);
  data.xscale = {};
  _ref1 = data.chrnames;
  for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
    chr = _ref1[i];
    data.chrStart.push(cur);
    w = Math.round((width - chrGap * data.chrnames.length) / totalChrLength * chrLength[i]);
    data.chrEnd.push(cur + w);
    cur = data.chrEnd[i] + chrGap;
    data.xscale[chr] = d3.scale.linear().domain([chrStart[i], chrEnd[i]]).range([data.chrStart[i], data.chrEnd[i]]);
  }
  return data;
};

reorgLodData = function(data, lodvarname) {
  var chr, i, j, marker, pos, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
  data.posByChr = {};
  data.lodByChr = {};
  _ref = data.chrnames;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    chr = _ref[i];
    data.posByChr[chr] = [];
    data.lodByChr[chr] = [];
    _ref1 = data.pos;
    for (j = _j = 0, _len1 = _ref1.length; _j < _len1; j = ++_j) {
      pos = _ref1[j];
      if (data.chr[j] === chr) {
        data.posByChr[chr].push(pos);
      }
      if (data.chr[j] === chr) {
        data.lodByChr[chr].push(data[lodvarname][j]);
      }
    }
  }
  data.markers = [];
  _ref2 = data.markernames;
  for (i = _k = 0, _len2 = _ref2.length; _k < _len2; i = ++_k) {
    marker = _ref2[i];
    if (marker !== "") {
      data.markers.push({
        name: marker,
        chr: data.chr[i],
        pos: data.pos[i],
        lod: data[lodvarname][i]
      });
    }
  }
  return data;
};