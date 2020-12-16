am4core.ready(function () {

// Themes begin
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart);

// Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

// Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(60);

    pieSeries.slices.template
        // change the cursor on hover to make it apparent the object can be interacted with
        .cursorOverStyle = [
        {
            "property": "cursor",
            "value": "pointer"
        }
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);
    pieSeries.ticks.template.disabled = true;
    pieSeries.slices.template.tooltipText = "";

// Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

// Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

// Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

// Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [{
        "country": "Platinum Package",
        "litres": 15
    }, {
        "country": "Bronze Package",
        "litres": 20
    }, {
        "country": "Gold Package",
        "litres": 35
    }, {
        "country": "Silver Package",
        "litres": 30
    }];

}); // end am4core.ready()