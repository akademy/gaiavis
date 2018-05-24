/**
 * Created by matthew on 02/05/17.
 */
var chart = {
	create : function(data, config) {
		//
		// Configuration set up
		//
		var _select = config.select || "#chart",
			_width = config.width || 800,
			_height = config.height || 600,
			_fill = config.fill || "rgb(100,100,100)",
			_stroke = config.stroke || "red";

		//
		// Chart create
		//
		var chartDiv = d3.select( _select );
		chartDiv.append("style").attr("id","chartStyles");

		var	svg;

		if( config.svgD3 ) {
			svg = config.svgD3;
        }
        else {
			svg = chartDiv.append("svg")
                .attr("width", _width)
                .attr("height", _height);
        }

		var centre = { x: _width /2,
			y: _height / 2};

		//svg.append("rect").attr("x", 10).attr("y",10).attr("width",_width-20).attr("height", _height-20);
		//svg.append("circle").attr("r",20).attr("cx", centre.x).attr("cy", centre.y );
		
		var waiting = svg.append("g")
			//.style("visibility","hidden")
			.append("g")
			.attr("id","waiting");

		// SVG data from Image: https://www.shareicon.net/alarm-clock-clock-timer-tools-and-utensils-time-808457
		//

        waiting.append("path")
            .attr("d", "M475.624,177.416l-154.417-13.033l-60.067-142.8c-2.55-6.233-8.783-10.483-15.583-10.483s-13.033,3.967-15.583,10.483" +
                "l-60.067,142.8L15.491,177.416c-6.8,0.567-12.75,5.1-14.733,11.617s0,13.6,5.1,18.133l117.017,101.15L87.741,459.049" +
                "c-1.417,6.8,1.133,13.6,6.517,17.567c5.667,3.967,13.033,4.25,18.7,0.85l132.6-80.183l132.6,80.183" +
                "c2.833,1.7,5.667,2.55,8.783,2.55c3.4,0,7.083-1.133,9.917-3.117c5.667-3.967,8.217-11.05,6.517-17.567l-35.133-150.733" +
                "l117.017-101.15c5.1-4.533,7.083-11.617,5.1-18.133C488.374,182.516,482.424,177.983,475.624,177.416z M338.208,289.616" +
                "c-4.817,4.25-6.8,10.483-5.383,16.717l28.333,121.55l-106.817-64.6c-2.833-1.7-5.667-2.55-8.783-2.55" +
                "c-3.117,0-6.233,0.85-8.783,2.55l-106.817,64.6l28.333-121.55c1.417-6.233-0.567-12.467-5.383-16.717l-94.35-81.6l124.383-10.483" +
                "c6.233-0.567,11.9-4.533,14.167-10.2l48.45-115.317l48.45,115.033c2.55,5.95,7.933,9.917,14.167,10.2l124.383,10.483" +
                "L338.208,289.616z")
            .attr("class","path");


		//waiting.append("path")
		//	.attr("d", "m436.4,278.3c0-102.3-80-186.1-180-187.2v-28.1h15.6v-20.8h-53.1v20.8h16.6v29.1c-91.2,9.7-163.3,89.8-163.3,186.3 0,64.7 32,121.9 80.8,155.6l-54.8,52 14.3,15.1 58.9-55.9c24.8,13.1 53,20.5 82.8,20.5 30.2,0 58.7-7.6 83.8-21l59.2,56.2 14.3-15.1-55.2-52.4c48.4-33.8 80.1-90.8 80.1-155.1zm-182.1,166.5c-88.4,0-161.3-74.9-161.3-166.5s71.8-166.5 161.3-166.5 161.3,74.9 161.3,166.5-72.9,166.5-161.3,166.5z")
		//	.attr("class","path");
		//waiting.append("polygon")
		//	.attr("points", "256.4,136.9 235.6,136.9 235.6,285.6 315.7,321 324,301.2 256.4,272.1   ");
		//waiting.append("path")
		//	.attr("d", "m164.6,37.4c-35.1-35.1-92.1-35.1-127.3,0-35.1,35.1-35.1,92.1 0,127.3 2,2 4.2,3.9 6.3,5.7l126.4-127.2c-1.7-2-3.5-3.9-5.4-5.8zm-120.3,102.4c-19.8-26.7-17.5-64.6 6.7-88.8 24.1-24.1 61.7-26.4 88.4-7l-95.1,95.8z");
		//waiting.append("path")
		//	.attr("d", "m473.7,37.4c-35.1-35.1-92.1-35.1-127.3,0-1.9,1.9-3.7,3.9-5.3,5.9l126.3,127.2c2.2-1.8 4.3-3.7 6.3-5.7 35.2-35.3 35.2-92.3 0-127.4zm-6.9,102.4l-95.1-95.8c26.7-19.4 64.3-17.1 88.4,7 24.2,24.2 26.5,62.1 6.7,88.8z");

		// Original image data
		//  <path d="m436.4,278.3c0-102.3-80-186.1-180-187.2v-28.1h15.6v-20.8h-53.1v20.8h16.6v29.1c-91.2,9.7-163.3,89.8-163.3,186.3 0,64.7 32,121.9 80.8,155.6l-54.8,52 14.3,15.1 58.9-55.9c24.8,13.1 53,20.5 82.8,20.5 30.2,0 58.7-7.6 83.8-21l59.2,56.2 14.3-15.1-55.2-52.4c48.4-33.8 80.1-90.8 80.1-155.1zm-182.1,166.5c-88.4,0-161.3-74.9-161.3-166.5s71.8-166.5 161.3-166.5 161.3,74.9 161.3,166.5-72.9,166.5-161.3,166.5z"/>
		//	<polygon points="256.4,136.9 235.6,136.9 235.6,285.6 315.7,321 324,301.2 256.4,272.1   "/>
		//	<path d="m164.6,37.4c-35.1-35.1-92.1-35.1-127.3,0-35.1,35.1-35.1,92.1 0,127.3 2,2 4.2,3.9 6.3,5.7l126.4-127.2c-1.7-2-3.5-3.9-5.4-5.8zm-120.3,102.4c-19.8-26.7-17.5-64.6 6.7-88.8 24.1-24.1 61.7-26.4 88.4-7l-95.1,95.8z"/>
		//	<path d="m473.7,37.4c-35.1-35.1-92.1-35.1-127.3,0-1.9,1.9-3.7,3.9-5.3,5.9l126.3,127.2c2.2-1.8 4.3-3.7 6.3-5.7 35.2-35.3 35.2-92.3 0-127.4zm-6.9,102.4l-95.1-95.8c26.7-19.4 64.3-17.1 88.4,7 24.2,24.2 26.5,62.1 6.7,88.8z"/>

		// Size of initial image
		var gWaiting   = document.getElementById("waiting"); // or other selector like querySelector()
		var rect = gWaiting.getBoundingClientRect(); // get the bounding rectangle
		var waitingSize = { "width":rect.width, "height":rect.height};

		// Max Length of path
		var length = document.querySelector('.path').getTotalLength();
		var styles = document.getElementById("chartStyles");
		styles.appendChild( document.createTextNode("@keyframes dash { to { stroke-dashoffset: "+ (length+150) +"; } }") );

		var scale = 0.3,
			x = (centre.x-waitingSize.width*scale/2),
			y = (centre.y-waitingSize.height*scale/2);

		svg.append("g")
			.attr("transform", "translate(" + x + "," + y + ") scale(" + scale + ")" )
			.append("use" )
				.attr( "class","clock" )
				.style( "stroke",_stroke )
				.style( "fill", _fill )
				.style( "stroke-dasharray", length )
				.style( "stroke-width", 8 )
				.style( "animation","dash 3s linear alternate infinite" )
				.attr( "xlink:href","#waiting" );

		var tools = {
			// based on http://stackoverflow.com/questions/30355241/get-the-length-of-a-svg-line-rect-polygon-and-circle-tags/43810593#43810593
			/**
			 *
			 * Used to get the length of a rect
			 *
			 * @param el is the rect element ex $('.rect')
			 * @return the length of the rect in px
			 */
			getRectLength:function(el){
				if( el.pathLength ) {
					return el.pathLength;
				}

				var w = el.attr('width');
				var h = el.attr('height');

				return (w*2)+(h*2);
			},

			/**
			 *
			 * Used to get the length of a Polygon
			 *
			 * @param el is the Polygon element ex $('.polygon')
			 * @return the length of the Polygon in px
			 */
			getPolygonLength:function(el){
				if( el.pathLength ) {
					return el.pathLength;
				}

				var points = el.attr('points');
				points = points.split(" ");
				var x1 = null, x2, y1 = null, y2 , lineLength = 0, x3, y3;
				for(var i = 0, pointsCount=points.length; i < pointsCount; i++){
					var coords = points[i].split(",");
					if(x1 == null && y1 == null){

						if(/(\r\n|\n|\r)/gm.test(coords[0])){
							coords[0] = coords[0].replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g,"");
						}

						if(/(\r\n|\n|\r)/gm.test(coords[1])){
							coords[0] = coords[1].replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g,"");
						}

						x1 = x3 = coords[0];
						y1 = y3 = coords[1];

					}else{

						if(coords[0] != "" && coords[1] != ""){

							if(/(\r\n|\n|\r)/gm.test(coords[0])){
								coords[0] = coords[0].replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g,"");
							}

							if(/(\r\n|\n|\r)/gm.test(coords[1])){
								coords[0] = coords[1].replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g,"");
							}

							x2 = coords[0];
							y2 = coords[1];

							lineLength += Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));

							x1 = x2;
							y1 = y2;
							if(i == pointsCount-2){
								lineLength += Math.sqrt(Math.pow((x3-x1), 2)+Math.pow((y3-y1),2));
							}

						}
					}

				}
				return lineLength;

			},

			/**
			 *
			 * Used to get the length of a line
			 *
			 * @param el is the line element ex $('.line')
			 * @return the length of the line in px
			 */
			getLineLength:function(el){
				if( el.pathLength ) {
					return el.pathLength;
				}
				var x1 = el.attr('x1'),
					x2 = el.attr('x2'),
					y1 = el.attr('y1'),
					y2 = el.attr('y2');
				return Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2));
			},

			/**
			 *
			 * Used to get the length of a circle
			 *
			 * @param el is the circle element
			 * @return the length of the circle in px
			 */
			getCircleLength:function(el){
				if( el.pathLength ) {
					return el.pathLength;
				}
				var r = el.attr('r');
				return 2 * Math.PI * r;
			},


			/**
			 *
			 * Used to get the length of the path
			 *
			 * @param el is the path element
			 * @return the length of the path in px
			 */
			getPathLength:function(el){
				var pathCoords = el.get(0);
				return pathCoords.getTotalLength();
			}
		}
	}
};