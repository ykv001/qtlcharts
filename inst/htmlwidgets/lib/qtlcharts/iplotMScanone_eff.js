// Generated by CoffeeScript 1.9.3
var iplotMScanone_eff;

iplotMScanone_eff = function(widgetdiv, lod_data, eff_data, times, chartOpts) {
  var axispos, chartdivid, chr, chrGap, colors, curindex, curvechart_xaxis, darkrect, eff_linecolor, eff_linewidth, eff_nlines, eff_pointcolor, eff_pointsize, eff_pointstroke, eff_ylab, eff_ylim, effchart_curves, effcurve, extra_digits, g_curvechart, g_heatmap, g_lodchart, hbot, height, htop, j, k, len, len1, lightrect, linecolor, linewidth, lod_labels, lod_ylab, lodchart_curves, lodcurve, margin, mycurvechart, mylodchart, mylodheatmap, nullcolor, nxticks, plotEffCurves, plotLodCurve, pointcolor, pointsize, pointstroke, pos, posindex, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref3, ref30, ref31, ref32, ref4, ref5, ref6, ref7, ref8, ref9, svg, titlepos, width, wleft, wright, x, xscale, xticks, zlim, zthresh;
  height = (ref = chartOpts != null ? chartOpts.height : void 0) != null ? ref : 700;
  width = (ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? ref1 : 1000;
  wleft = (ref2 = chartOpts != null ? chartOpts.wleft : void 0) != null ? ref2 : width * 0.65;
  htop = (ref3 = chartOpts != null ? chartOpts.htop : void 0) != null ? ref3 : height / 2;
  margin = (ref4 = chartOpts != null ? chartOpts.margin : void 0) != null ? ref4 : {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  };
  axispos = (ref5 = chartOpts != null ? chartOpts.axispos : void 0) != null ? ref5 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  titlepos = (ref6 = chartOpts != null ? chartOpts.titlepos : void 0) != null ? ref6 : 20;
  chrGap = (ref7 = chartOpts != null ? chartOpts.chrGap : void 0) != null ? ref7 : 8;
  darkrect = (ref8 = chartOpts != null ? chartOpts.darkrect : void 0) != null ? ref8 : "#C8C8C8";
  lightrect = (ref9 = chartOpts != null ? chartOpts.lightrect : void 0) != null ? ref9 : "#E6E6E6";
  nullcolor = (ref10 = chartOpts != null ? chartOpts.nullcolor : void 0) != null ? ref10 : "#E6E6E6";
  colors = (ref11 = chartOpts != null ? chartOpts.colors : void 0) != null ? ref11 : ["slateblue", "white", "crimson"];
  zlim = (ref12 = chartOpts != null ? chartOpts.zlim : void 0) != null ? ref12 : null;
  zthresh = (ref13 = chartOpts != null ? chartOpts.zthresh : void 0) != null ? ref13 : null;
  lod_ylab = (ref14 = chartOpts != null ? chartOpts.lod_ylab : void 0) != null ? ref14 : "";
  eff_ylim = (ref15 = chartOpts != null ? chartOpts.eff_ylim : void 0) != null ? ref15 : null;
  eff_ylab = (ref16 = chartOpts != null ? chartOpts.eff_ylab : void 0) != null ? ref16 : "";
  linecolor = (ref17 = chartOpts != null ? chartOpts.linecolor : void 0) != null ? ref17 : "darkslateblue";
  eff_linecolor = (ref18 = chartOpts != null ? chartOpts.eff_linecolor : void 0) != null ? ref18 : null;
  linewidth = (ref19 = chartOpts != null ? chartOpts.linewidth : void 0) != null ? ref19 : 2;
  eff_linewidth = (ref20 = chartOpts != null ? chartOpts.eff_linewidth : void 0) != null ? ref20 : 2;
  pointcolor = (ref21 = chartOpts != null ? chartOpts.pointcolor : void 0) != null ? ref21 : "slateblue";
  pointsize = (ref22 = chartOpts != null ? chartOpts.pointsize : void 0) != null ? ref22 : 0;
  pointstroke = (ref23 = chartOpts != null ? chartOpts.pointstroke : void 0) != null ? ref23 : "black";
  eff_pointcolor = (ref24 = chartOpts != null ? chartOpts.eff_pointcolor : void 0) != null ? ref24 : null;
  eff_pointsize = (ref25 = chartOpts != null ? chartOpts.eff_pointsize : void 0) != null ? ref25 : 0;
  eff_pointstroke = (ref26 = chartOpts != null ? chartOpts.eff_pointstroke : void 0) != null ? ref26 : "black";
  nxticks = (ref27 = chartOpts != null ? chartOpts.nxticks : void 0) != null ? ref27 : 5;
  xticks = (ref28 = chartOpts != null ? chartOpts.xticks : void 0) != null ? ref28 : null;
  lod_labels = (ref29 = chartOpts != null ? chartOpts.lod_labels : void 0) != null ? ref29 : null;
  chartdivid = (ref30 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? ref30 : 'chart';
  wright = width - wleft;
  hbot = height - htop;
  if (lod_labels == null) {
    lod_labels = times != null ? (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = times.length; j < len; j++) {
        x = times[j];
        results.push(formatAxis(times, extra_digits = 1)(x));
      }
      return results;
    })() : lod_data.lodnames;
  }
  mylodheatmap = lodheatmap().height(htop - margin.top - margin.bottom).width(wleft - margin.left - margin.right).margin(margin).axispos(axispos).titlepos(titlepos).chrGap(chrGap).rectcolor(lightrect).colors(colors).zlim(zlim).zthresh(zthresh).quantScale(times).lod_labels(lod_labels).ylab(lod_ylab).nullcolor(nullcolor);
  svg = d3.select(widgetdiv).select("svg");
  g_heatmap = svg.append("g").attr("id", "heatmap").datum(lod_data).call(mylodheatmap);
  mylodchart = lodchart().height(hbot - margin.top - margin.bottom).width(wleft - margin.left - margin.right).margin(margin).axispos(axispos).titlepos(titlepos).chrGap(chrGap).linecolor("none").pad4heatmap(true).darkrect(darkrect).lightrect(lightrect).ylim([0, d3.max(mylodheatmap.zlim())]).pointsAtMarkers(false);
  g_lodchart = svg.append("g").attr("transform", "translate(0," + htop + ")").attr("id", "lodchart").datum(lod_data).call(mylodchart);
  lodcurve = function(chr, lodcolumn) {
    return d3.svg.line().x(function(d) {
      return mylodchart.xscale()[chr](d);
    }).y(function(d, i) {
      return mylodchart.yscale()(Math.abs(lod_data.lodByChr[chr][i][lodcolumn]));
    });
  };
  lodchart_curves = null;
  plotLodCurve = function(lodcolumn) {
    var chr, j, len, ref31, results;
    lodchart_curves = g_lodchart.append("g").attr("id", "lodcurves");
    ref31 = lod_data.chrnames;
    results = [];
    for (j = 0, len = ref31.length; j < len; j++) {
      chr = ref31[j];
      lodchart_curves.append("path").datum(lod_data.posByChr[chr]).attr("d", lodcurve(chr, lodcolumn)).attr("stroke", linecolor).attr("fill", "none").attr("stroke-width", linewidth).style("pointer-events", "none");
      if (pointsize > 0) {
        results.push(lodchart_curves.append("g").attr("id", "lodpoints").selectAll("empty").data(lod_data.posByChr[chr]).enter().append("circle").attr("cx", function(d) {
          return mylodchart.xscale()[chr](d);
        }).attr("cy", function(d, i) {
          return mylodchart.yscale()(Math.abs(lod_data.lodByChr[chr][i][lodcolumn]));
        }).attr("r", pointsize).attr("fill", pointcolor).attr("stroke", pointstroke));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };
  eff_ylim = eff_ylim != null ? eff_ylim : matrixExtent(eff_data.map(function(d) {
    return matrixExtent(d.data);
  }));
  eff_nlines = d3.max(eff_data.map(function(d) {
    return d.names.length;
  }));
  eff_linecolor = eff_linecolor != null ? eff_linecolor : selectGroupColors(eff_nlines, "dark");
  eff_pointcolor = eff_pointcolor != null ? eff_pointcolor : selectGroupColors(eff_nlines, "dark");
  eff_linecolor = forceAsArray(eff_linecolor);
  eff_pointcolor = forceAsArray(eff_pointcolor);
  mycurvechart = curvechart().height(htop - margin.top - margin.bottom).width(wright - margin.left - margin.right).margin(margin).axispos(axispos).titlepos(titlepos).xlab(lod_ylab).ylab(eff_ylab).strokecolor("none").rectcolor(lightrect).xlim([-0.5, lod_data.lodnames.length - 0.5]).ylim(eff_ylim).nxticks(0).commonX(true);
  g_curvechart = svg.append("g").attr("transform", "translate(" + wleft + ",0)").attr("id", "curvechart").datum(eff_data[0]).call(mycurvechart);
  effcurve = function(posindex, column) {
    return d3.svg.line().x(function(d) {
      return mycurvechart.xscale()(d);
    }).y(function(d, i) {
      return mycurvechart.yscale()(eff_data[posindex].data[column][i]);
    });
  };
  effchart_curves = null;
  plotEffCurves = function(posindex) {
    var curveindex, results;
    effchart_curves = g_curvechart.append("g").attr("id", "curves");
    results = [];
    for (curveindex in eff_data[posindex].names) {
      effchart_curves.append("path").datum(eff_data[posindex].x).attr("d", effcurve(posindex, curveindex)).attr("fill", "none").attr("stroke", eff_linecolor[curveindex]).attr("stroke-width", eff_linewidth);
      effchart_curves.selectAll("empty").data(eff_data[posindex].names).enter().append("text").text(function(d) {
        return d;
      }).attr("x", function(d, i) {
        return margin.left + wright + axispos.ylabel;
      }).attr("y", function(d, i) {
        var z;
        z = eff_data[posindex].data[i];
        return mycurvechart.yscale()(z[z.length - 1]);
      }).style("dominant-baseline", "middle").style("text-anchor", "start");
      if (eff_pointsize > 0) {
        results.push(effchart_curves.append("g").attr("id", "eff_points").selectAll("empty").data(eff_data[posindex].x).enter().append("circle").attr("cx", function(d) {
          return mycurvechart.xscale()(d);
        }).attr("cy", function(d, i) {
          return mycurvechart.yscale()(eff_data[posindex].data[curveindex][i]);
        }).attr("r", eff_pointsize).attr("fill", eff_pointcolor[curveindex]).attr("stroke", eff_pointstroke));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };
  if (times != null) {
    xscale = d3.scale.linear().range(mycurvechart.xscale().range());
    xscale.domain([times[0], times[times.length - 1]]);
    xticks = xticks != null ? xticks : xscale.ticks(nxticks);
    curvechart_xaxis = g_curvechart.select("g.x.axis");
    curvechart_xaxis.selectAll("empty").data(xticks).enter().append("line").attr("x1", function(d) {
      return xscale(d);
    }).attr("x2", function(d) {
      return xscale(d);
    }).attr("y1", margin.top).attr("y2", htop - margin.bottom).attr("fill", "none").attr("stroke", "white").attr("stroke-width", 1).style("pointer-events", "none");
    curvechart_xaxis.selectAll("empty").data(xticks).enter().append("text").attr("x", function(d) {
      return xscale(d);
    }).attr("y", htop - margin.bottom + axispos.xlabel).text(function(d) {
      return formatAxis(xticks)(d);
    });
  } else {
    curvechart_xaxis = g_curvechart.select("g.x.axis").selectAll("empty").data(lod_labels).enter().append("text").attr("class", "y axis").attr("id", function(d, i) {
      return "xaxis" + i;
    }).attr("x", function(d, i) {
      return mycurvechart.xscale()(i);
    }).attr("y", htop - margin.bottom + axispos.xlabel).text(function(d) {
      return d;
    }).attr("opacity", 0);
  }
  posindex = {};
  curindex = 0;
  ref31 = lod_data.chrnames;
  for (j = 0, len = ref31.length; j < len; j++) {
    chr = ref31[j];
    posindex[chr] = {};
    ref32 = lod_data.posByChr[chr];
    for (k = 0, len1 = ref32.length; k < len1; k++) {
      pos = ref32[k];
      posindex[chr][pos] = curindex;
      curindex += 1;
    }
  }
  mycurvechart.curvesSelect().on("mouseover.panel", null).on("mouseout.panel", null);
  return mylodheatmap.cellSelect().on("mouseover", function(d) {
    var p;
    plotLodCurve(d.lodindex);
    g_lodchart.select("g.title text").text("" + lod_labels[d.lodindex]);
    plotEffCurves(posindex[d.chr][d.pos]);
    p = d3.format(".1f")(d.pos);
    g_curvechart.select("g.title text").text(d.chr + "@" + p);
    return g_curvechart.select("text#xaxis" + d.lodindex).attr("opacity", 1);
  }).on("mouseout", function(d) {
    lodchart_curves.remove();
    g_lodchart.select("g.title text").text("");
    effchart_curves.remove();
    g_curvechart.select("g.title text").text("");
    return g_curvechart.select("text#xaxis" + d.lodindex).attr("opacity", 0);
  });
};
