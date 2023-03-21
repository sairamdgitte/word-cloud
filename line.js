
am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    // Hide the watermark
    chart.logo.disabled = true;
    


    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.dateFormats.setKey("year", "yyyy");
    dateAxis.renderer.minGridDistance = 60;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    var countries = ['AUSTRALIA', 'USA', 'UK', 'IND'];
    for (var i = 0; i < 4; i++) {
        createSeries(countries[i], countries[i]);
    }

    // Create series
    function createSeries(s, name) {
        var series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value" + s;
        series.dataFields.dateX = "date";
        series.name = name;
        series.strokeWidth = 2;
        // series.minBulletDistance = 2;

        // Drop-shaped tooltips
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.strokeOpacity = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.label.minWidth = 40;
        series.tooltip.label.minHeight = 40;
        series.tooltip.label.textAlign = "middle";
        series.tooltip.label.textValign = "middle";

        // Make bullets grow on hover
        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 3;
        bullet.circle.fill = am4core.color("#fff");

        var bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.4;

        // Make a panning cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "panXY";
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = series;

        // Create vertical scrollbar and place it before the value axis
        chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarY.parent = chart.leftAxesContainer;
        chart.scrollbarY.toBack();


        // Create a horizontal scrollbar with previe and place it underneath the date axis
        chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series);
        chart.scrollbarX.parent = chart.bottomAxesContainer;

        dateAxis.start = 0.8;
        dateAxis.keepSelection = true;

        var segment = series.segments.template;
        segment.interactionsEnabled = true;

        var hoverState = segment.states.create("hover");
        hoverState.properties.strokeWidth = 3;

        var dimmed = segment.states.create("dimmed");
        dimmed.properties.stroke = am4core.color("#cccccc");

        segment.events.on("over", function (event) {
            processOver(event.target.parent.parent.parent);
        });

        segment.events.on("out", function (event) {
            processOut(event.target.parent.parent.parent);
        });
        var data;
        // var data =[]
        if (name === "AUSTRALIA") {
            data = [{ 'date': 1987, 'valueAUSTRALIA': 1 }, { 'date': 1988, 'valueAUSTRALIA': 26 }, { 'date': 1989, 'valueAUSTRALIA': 54 }, { 'date': 1990, 'valueAUSTRALIA': 74 }, { 'date': 1991, 'valueAUSTRALIA': 54 }, { 'date': 1992, 'valueAUSTRALIA': 86 }, { 'date': 1993, 'valueAUSTRALIA': 53 }, { 'date': 1994, 'valueAUSTRALIA': 102 }, { 'date': 1995, 'valueAUSTRALIA': 146 }, { 'date': 1996, 'valueAUSTRALIA': 166 }, { 'date': 1997, 'valueAUSTRALIA': 736 }, { 'date': 1998, 'valueAUSTRALIA': 316 }, { 'date': 1999, 'valueAUSTRALIA': 412 }, { 'date': 2000, 'valueAUSTRALIA': 697 }, { 'date': 2001, 'valueAUSTRALIA': 1589 }, { 'date': 2002, 'valueAUSTRALIA': 2108 }, { 'date': 2003, 'valueAUSTRALIA': 1545 }, { 'date': 2004, 'valueAUSTRALIA': 2582 }, { 'date': 2005, 'valueAUSTRALIA': 3507 }, { 'date': 2006, 'valueAUSTRALIA': 6423 }, { 'date': 2007, 'valueAUSTRALIA': 17116 }, { 'date': 2008, 'valueAUSTRALIA': 14833 }, { 'date': 2009, 'valueAUSTRALIA': 15848 }, { 'date': 2010, 'valueAUSTRALIA': 10261 }, { 'date': 2011, 'valueAUSTRALIA': 11855 }, { 'date': 2012, 'valueAUSTRALIA': 6359 }, { 'date': 2013, 'valueAUSTRALIA': 6170 }, { 'date': 2014, 'valueAUSTRALIA': 6025 }, { 'date': 2015, 'valueAUSTRALIA': 6528 }, { 'date': 2016, 'valueAUSTRALIA': 4535 }, { 'date': 2017, 'valueAUSTRALIA': 4111 }, { 'date': 2018, 'valueAUSTRALIA': 5406 }, { 'date': 2019, 'valueAUSTRALIA': 13830 }, { 'date': 2020, 'valueAUSTRALIA': 8480 }, { 'date': 2021, 'valueAUSTRALIA': 11714 }, { 'date': 2022, 'valueAUSTRALIA': 10156 }];
        }
        if (name === 'USA') {
            data = [{ 'date': 1977, 'valueUSA': 4 }, { 'date': 1978, 'valueUSA': 3 }, { 'date': 1979, 'valueUSA': 1 }, { 'date': 1980, 'valueUSA': 3 }, { 'date': 1981, 'valueUSA': 1 }, { 'date': 1982, 'valueUSA': 1 }, { 'date': 1983, 'valueUSA': 4 }, { 'date': 1985, 'valueUSA': 9 }, { 'date': 1986, 'valueUSA': 80 }, { 'date': 1987, 'valueUSA': 88 }, { 'date': 1988, 'valueUSA': 341 }, { 'date': 1989, 'valueUSA': 647 }, { 'date': 1990, 'valueUSA': 1035 }, { 'date': 1991, 'valueUSA': 1051 }, { 'date': 1992, 'valueUSA': 2028 }, { 'date': 1993, 'valueUSA': 1310 }, { 'date': 1994, 'valueUSA': 1290 }, { 'date': 1995, 'valueUSA': 1347 }, { 'date': 1996, 'valueUSA': 1261 }, { 'date': 1997, 'valueUSA': 4549 }, { 'date': 1998, 'valueUSA': 3061 }, { 'date': 1999, 'valueUSA': 2580 }, { 'date': 2000, 'valueUSA': 3430 }, { 'date': 2001, 'valueUSA': 6510 }, { 'date': 2002, 'valueUSA': 5466 }, { 'date': 2003, 'valueUSA': 4835 }, { 'date': 2004, 'valueUSA': 6726 }, { 'date': 2005, 'valueUSA': 9856 }, { 'date': 2006, 'valueUSA': 14986 }, { 'date': 2007, 'valueUSA': 35906 }, { 'date': 2008, 'valueUSA': 31879 }, { 'date': 2009, 'valueUSA': 46571 }, { 'date': 2010, 'valueUSA': 34298 }, { 'date': 2011, 'valueUSA': 28324 }, { 'date': 2012, 'valueUSA': 26175 }, { 'date': 2013, 'valueUSA': 29481 }, { 'date': 2014, 'valueUSA': 37266 }, { 'date': 2015, 'valueUSA': 43940 }, { 'date': 2016, 'valueUSA': 37248 }, { 'date': 2017, 'valueUSA': 42716 }, { 'date': 2018, 'valueUSA': 43646 }, { 'date': 2019, 'valueUSA': 73168 }, { 'date': 2020, 'valueUSA': 64425 }, { 'date': 2021, 'valueUSA': 109929 }, { 'date': 2022, 'valueUSA': 107117 }];
        }
        if (name === 'UK') {
            data = [{ 'date': 1985, 'valueUK': 6 }, { 'date': 1986, 'valueUK': 22 }, { 'date': 1987, 'valueUK': 25 }, { 'date': 1988, 'valueUK': 79 }, { 'date': 1989, 'valueUK': 388 }, { 'date': 1990, 'valueUK': 607 }, { 'date': 1991, 'valueUK': 334 }, { 'date': 1992, 'valueUK': 489 }, { 'date': 1993, 'valueUK': 260 }, { 'date': 1994, 'valueUK': 255 }, { 'date': 1995, 'valueUK': 380 }, { 'date': 1996, 'valueUK': 472 }, { 'date': 1997, 'valueUK': 1368 }, { 'date': 1998, 'valueUK': 1295 }, { 'date': 1999, 'valueUK': 1394 }, { 'date': 2000, 'valueUK': 2572 }, { 'date': 2001, 'valueUK': 4172 }, { 'date': 2002, 'valueUK': 4253 }, { 'date': 2003, 'valueUK': 3732 }, { 'date': 2004, 'valueUK': 6141 }, { 'date': 2005, 'valueUK': 9748 }, { 'date': 2006, 'valueUK': 13920 }, { 'date': 2007, 'valueUK': 25127 }, { 'date': 2008, 'valueUK': 18456 }, { 'date': 2009, 'valueUK': 25774 }, { 'date': 2010, 'valueUK': 16168 }, { 'date': 2011, 'valueUK': 13052 }, { 'date': 2012, 'valueUK': 10364 }, { 'date': 2013, 'valueUK': 11726 }, { 'date': 2014, 'valueUK': 13055 }, { 'date': 2015, 'valueUK': 16352 }, { 'date': 2016, 'valueUK': 13071 }, { 'date': 2017, 'valueUK': 13129 }, { 'date': 2018, 'valueUK': 13259 }, { 'date': 2019, 'valueUK': 31661 }, { 'date': 2020, 'valueUK': 25336 }, { 'date': 2021, 'valueUK': 53100 }, { 'date': 2022, 'valueUK': 36124 }];
        }
        if (name === 'IND') {
            data = [{ 'date': 1995, 'valueIND': 5 }, { 'date': 1997, 'valueIND': 45 }, { 'date': 1998, 'valueIND': 45 }, { 'date': 1999, 'valueIND': 61 }, { 'date': 2000, 'valueIND': 113 }, { 'date': 2001, 'valueIND': 179 }, { 'date': 2002, 'valueIND': 439 }, { 'date': 2003, 'valueIND': 148 }, { 'date': 2004, 'valueIND': 478 }, { 'date': 2005, 'valueIND': 1295 }, { 'date': 2006, 'valueIND': 2167 }, { 'date': 2007, 'valueIND': 7160 }, { 'date': 2008, 'valueIND': 6484 }, { 'date': 2009, 'valueIND': 11207 }, { 'date': 2010, 'valueIND': 7484 }, { 'date': 2011, 'valueIND': 6086 }, { 'date': 2012, 'valueIND': 5275 }, { 'date': 2013, 'valueIND': 4800 }, { 'date': 2014, 'valueIND': 5715 }, { 'date': 2015, 'valueIND': 10959 }, { 'date': 2016, 'valueIND': 7916 }, { 'date': 2017, 'valueIND': 7587 }, { 'date': 2018, 'valueIND': 8405 }, { 'date': 2019, 'valueIND': 11298 }, { 'date': 2020, 'valueIND': 8731 }, { 'date': 2021, 'valueIND': 16823 }, { 'date': 2022, 'valueIND': 18106 }];
        }

        // var value = Math.round(Math.random() * 100) + 100;
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].date)
            data[i].date = new Date(data[i].date, 0, 0)
        }
        // 	value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 30 + i / 5);
        // 	var dataItem = { date: new Date(2018, 0, i) };
        // 	dataItem["value" + s] = value;
        // 	data.push(dataItem);
        // }
        console.log(data[0])
        // series.data = data;
        // for (i = 0; i < 2; i++){
        //     series.data[i] = data[i];

        // }
        // series.data = data[0];
        // series.data = data[1];
        series.data = data;
        // console.log(series.data.length)
        return series;
    }

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.scrollable = true;

    // setTimeout(function() {
    //   chart.legend.markers.getIndex(0).opacity = 0.3;
    // }, 3000)
    chart.legend.markers.template.states.create("dimmed").properties.opacity = 0.3;
    chart.legend.labels.template.states.create("dimmed").properties.opacity = 0.3;

    chart.legend.itemContainers.template.events.on("over", function (event) {
        processOver(event.target.dataItem.dataContext);
    })

    chart.legend.itemContainers.template.events.on("out", function (event) {
        processOut(event.target.dataItem.dataContext);
    })

    function processOver(hoveredSeries) {
        hoveredSeries.toFront();

        hoveredSeries.segments.each(function (segment) {
            segment.setState("hover");
        })

        hoveredSeries.legendDataItem.marker.setState("default");
        hoveredSeries.legendDataItem.label.setState("default");

        chart.series.each(function (series) {
            if (series != hoveredSeries) {
                series.segments.each(function (segment) {
                    segment.setState("dimmed");
                })
                series.bulletsContainer.setState("dimmed");
                series.legendDataItem.marker.setState("dimmed");
                series.legendDataItem.label.setState("dimmed");
            }
        });
    }

    function processOut() {
        chart.series.each(function (series) {
            series.segments.each(function (segment) {
                segment.setState("default");
            })
            series.bulletsContainer.setState("default");
            series.legendDataItem.marker.setState("default");
            series.legendDataItem.label.setState("default");
        });
    }

    // document.getElementById("button").addEventListener("click", function () {
    //     processOver(chart.series.getIndex(3));
    // })

}); // end am4core.ready()

