import * as d3 from "d3";
/**
 * Создание таймера
 * @param elem
 */
export default function _createTimer(elem) {
    var format = elem.querySelector("meta[format]").getAttribute("format");
    var getdatestart = Date.parse(elem.querySelector("time.start").dateTime);
    var getdateend = Date.parse(elem.querySelector("time.end").dateTime);
    var currentDate = Date.now();
    console.log(getdatestart);
    console.log(getdateend);
    var allDate = getdateend - getdatestart;
    var delta = getdateend - currentDate;
    switch (format) {
        case "d":
            createSVG(elem, ".timer__item.d", [allDate, delta]);
            break;
        case "dh":
            var getHour = Math.floor(delta / 3600 / 1000 % 24);
            var text_for_day_timer = [getDays(Math.floor(delta / 3600 / 1000 / 24)), daysNamed(Math.floor(delta / 3600 / 1000 / 24))]
            createSVG(elem, ".timer__item.d", [
                //allDate,
                delta
            ], text_for_day_timer);
            var text_for_hour_timer = [getHours(getHour), hourNamed(getHour)];
            createSVG(elem, ".timer__item.h", [
                //24 - getHour,
                getHour], text_for_hour_timer);
            break;

    }
}

/**
 * Отрисовка таймера
 * @param selector
 * @param elem
 * @param data
 * @param text
 */
function createSVG(selector, elem, data, text) {
    var width, height;
    width = height = window.innerWidth > 1199.98 ? 122 : 80;
    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal()
        .range(["#fff", "#090909"]);

    var arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var pie = d3.pie()
        .sort(null)
        .value(d => d);
    var svg = d3.select(selector.querySelector(elem)).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    //Добавление внешнего круга
    g.append("path")
        .style("fill", d => color(d.data));
    d3.interval(_ => {
        svg.selectAll("path")
            .transition()
            .delay((d, i) => i * 500)
            .duration(4000)
            .attrTween('d', d => {
                const i = d3.interpolate(d.startAngle + 0.1, 2 * Math.PI);
                return t => {
                    d.endAngle = i(t);
                    return arc(d);
                }
            });
    }, 6000, -6000);
    var circle = svg.append("g");
    circle.append("circle")
        .attr("r", radius - 12)
        .style("fill", "#090909")
        .style("stroke", "none")
        .style("stroke-width", "2");
    //Добавление текста
    var days = text[0];
    var set_text_days = text[1];
    var font_size_time = window.innerWidth > 1199.98 ? 48 : 17;
    var font_size_text = window.innerWidth > 1199.98 ? 16 : 9;
    circle.append("text")
        .text(days)
        .attr("class", "time")
        .attr("text-anchor", "middle")
        .attr("dx", 0)
        .attr("font-size", font_size_time);
    var text_dy = window.innerWidth > 1199.98 ? 20 : 10;
    circle.append("text")
        .attr("font-size", font_size_text)
        .attr("class", "text")
        .attr("dx", radius - radius / 0.82)
        .attr("dy", text_dy)
        .text(set_text_days);


}

/**
 * Склонение
 * @param date
 * @return {string}
 */
function daysNamed(date) {
    if (date === 1) {
        return "день";
    } else if ([2, 3, 4].indexOf(date) !== -1) {
        return "дня";
    } else {
        return "дней";
    }
}

/**
 * Дни
 * @param formul
 * @return {number}
 */
function getDays(formul) {
    return formul >= 0 ? formul : 0;
}

function hourNamed(hour) {
    if ([2, 3, 4, 22, 23].indexOf(hour) !== -1) {
        return "часа";
    } else if (hour > 4 && hour <= 20 || hour === 0) {
        return "часов";
    } else {
        return "час";
    }
}

function getHours(f) {
    return f >= 0 ? f : 0;
}


