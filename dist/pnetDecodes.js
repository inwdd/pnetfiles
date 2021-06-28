function decodeParrot(decodePNum) {
	var retStr = "";
	//method to decode the species names form the stored data file.
	switch (parseInt(decodePNum)) {
		case 0:
			retStr = "Psittacula krameri";
			break;
		case 1:
			retStr = "Ara macao";
			break
		case 2:
			retStr = "Aratinga acuticaudata";
			break;
		case 3:
			retStr = "Melopsittacus undulatus";
			break;
		case 4:
			retStr = "Myiopsitta monachus";
			break;
		case 5:
			retStr = "Nymphicus hollandicus";
			break;
		case 6:
			retStr = "Platycercus adscitus";
			break;
		case 7:
			retStr = "Platycercus eximius";
			break;
		case 8:
			retStr = "Poicephalus senegalus";
			break;
		case 9:
			retStr = "Polytelis alexandrae";
			break;
		case 10:
			retStr = "Psittacula eupatria";
			break;
		case 11:
			retStr = "Agapornis roseicollis";
			break;
		case 12:
			retStr = "Ara ararauna";
			break;
		case 13:
			retStr = "Amazona amazonica";
			break;
		case 14:
			retStr = "Aratinga holochlora";
			break;
		case 15:
			retStr = "Cacatua galerita";
			break;
		case 16:
			retStr = "Nandayus nenday";
			break;
		case 17:
			retStr = "Orthopsittaca manilata";
			break;
		default:
			retStr = "";
	}
	return (retStr)
}

function decodeCountry(decodePCount) {
	var retStr = "";
	switch (parseInt(decodePCount)) {
		case 0:
			retStr = "UK";
			break;
		case 1:
			retStr = "Austria";
			break;
		case 2:
			retStr = "Belgium";
			break;
		case 3:
			retStr = "Denmark";
			break;
		case 4:
			retStr = "Finland";
			break;
		case 5:
			retStr = "France";
			break;
		case 6:
			retStr = "Germany";
			break;
		case 7:
			retStr = "Greece";
			break;
		case 8:
			retStr = "Ireland";
			break;
		case 9:
			retStr = "Israel";
			break;
		case 10:
			retStr = "Italy";
			break;
		case 11:
			retStr = "Netherlands";
			break;
		case 12:
			retStr = "Poland";
			break;
		case 13:
			retStr = "Portugal";
			break;
		case 14:
			retStr = "Spain";
			break;
		case 15:
			retStr = "Sweden";
			break;
		case 16:
			retStr = "Turkey";
			break;
		case 17:
			retStr = "Vatican City (Holy See)";
			break;
		default:
			retStr = "";
	}
	return (retStr);
}

function decodeState(decodeState) {
	var retStr = "";
	switch (parseInt(decodePCount)) {
		case 0:
			retStr = "UK";
			break;
		case 1:
			restStr = "Austria";
			break;
		case 2:
			retStr = "Belgium";
			break;
		case 3:
			retStr = "Denmark";
			break;
		case 4:
			retStr = "Finland";
			break;
		case 5:
			retStr = "France";
			break;
		case 6:
			retStr = "Germany";
			break;
		case 7:
			retStr = "Greece";
			break;
		case 8:
			retStr = "Ireland";
			break;
		case 9:
			retStr = "Israel";
			break;
		case 10:
			retStr = "Italy";
			break;
		case 11:
			retStr = "Netherlands";
			break;
		case 12:
			retStr = "Poland";
			break;
		case 13:
			retStr = "Portugal";
			break;
		case 14:
			retStr = "Spain";
			break;
		case 15:
			retStr = "Sweden";
			break;
		case 16:
			retStr = "Turkey";
			break;
		case 17:
			retStr = "Vatican City (Holy See)";
			break;
		default:
			retStr = "";
	}
	return (retStr);
}

function decodeOrigS(decodedb) {
	var retStr = "";
	switch (parseInt(decodedb)) {
		case 0:
			retStr = "BTO_BirdTrack";
			break;
		case 1:
			retStr = "BTO_Breeding Bird Survey";
			break;
		case 2:
			retStr = "BTO_Garden BirdWatch";
			break;
		case 3:
			retSTr = "BTO_Ringing Scheme";
			break;
		case 4:
			retStr = "BTO_Waterways Breeding Bird Survey";
			break;
		case 5:
			retStr = "eBird";
			break;
		case 6:
			retStr = "GBIF";
			break;
		case 7:
			retStr = "PC";
			break;
		case 8:
			retStr = "Sovon";
			break;
		case 9:
			retStr = "Random Observation";
			break;
		case 10:
			retStr = "Roost";
			break;
		case 11:
			retStr = "Krameri_Spain";
			break;
		case 12:
			retStr = "SPN-MNHN FCHIRON";
			break;
		case 13:
			retStr = "EMC France(clergeau)";
			break;
		default:
			retStr = "No Source!";
	}
	return (retStr);
}

function updateProgressBar(processed, total, elapsed, layersArray) {
	if (elapsed > 1000) {
		// if it takes more than a second to load, display the progress bar:
		progress.style.display = 'block';
		progressBar.style.width = Math.round(processed / total * 100) + '%';
	}
	if (processed === total) {
		// all markers processed - hide the progress bar:
		progress.style.display = 'none';
	}
}

function checkFilterValues(theLine, speciesFilt, sourceDBfilt, countryFilt, occVal) {
	var retVal;
	var filtCnt;
	//console.log('spec = ' + speciesFilt + ' ' + 'db = ' + sourceDBfilt + 'country = ' + countryFilt);
	var speciesStr = new String(decodeParrot(theLine[2]));
	var sourceDBStr = new String(decodeOrigS(theLine[7]));
	var countryStr = new String(decodeCountry(theLine[4]));
	var occCountStr = new String(theLine[3]);
	var yearStr = new String(theLine[6].substr(6));

	retVal = 0;
	filtCnt = 0;
	var tmpStr;
	//helper function returns true if all the selected filter values exist in the supplid string
	if (speciesFilt > 0) {
		filtCnt++;
		if (speciesArr.indexOf(theLine[2]) !== -1) {
			retVal++;
			tmpStr = ('found a species')
		}
	}
	if (sourceDBfilt > 0) {
		filtCnt++;
		if (sourceDBArr.indexOf(theLine[7]) !== -1) {
			retVal++;
			tmpStr = tmpStr + ' and a database';
		}
	}
	if (countryFilt > 0) {
		filtCnt++;
		if (stateArr.indexOf(theLine[4]) !== -1) {
			retVal++;
			tmpStr = tmpStr + ' and a country';
		}
	}
	if (occVal != null) {
		if (parseInt(occCountStr) >= parseInt(occVal)) {
			retVal++;
			tmpStr = tmpStr + ' and a occurance';
		}
		else if (occValArr.indexOf("7") !== -1) {

			if (occCountStr == "") {
				retVal++;
				tmpStr = tmpStr + ' and a occurance';
			}
		}
		filtCnt++;
	}
	var tmp = retVal / filtCnt;
	if (tmp == 1) {
		//console.log('value of retval is ' + retVal + 'Value of filtcnt is '+ filtCnt+ 'tmp is ' + tmp);
		//console.log(tmpStr);
		return true;
	}
	else
		return false;
}

function checkTimelineDateRange(theYear) {//Quick check before the datset is checked for year values.
	if ((theYear >= 1906 && theYear <= 1966) || (theYear == 1968) || (theYear == 1969) || (theYear >= 1971 && theYear <= 1973) || (theYear == 1975) || (theYear == 1976) || (theYear == 1978))
		return (false);
	else
		return (true);
}

function createIconArray() {//Create an array of parrot icons change the ,looplimit if more parrots added.
	var intIconArr = [];
	for (i = 0; i < 18; i++) {
		var pngUrl = 'marker-icon-' + i + '.png';
		var RedIcon = L.Icon.Default.extend({
			options: {
				iconUrl: pngUrl
			}
		});
		intIconArr[i] = new RedIcon();
	}
	return (intIconArr);
}

function getResource(mode, yearVal) {
	var innerFuncIconArr = [];
	innerFuncIconArr = createIconArray();
	
	markerList.length = 0;
	heatMapArr.length = 0;
	heatMapList.length = 0;
	loopcnt = 0;
	heat = L.heatLayer();
	map.spin(true);

	markerList.length = 0;
	heatMapList.length = 0;
	loopcnt = 0;
	console.log('Start creating markers: ' + window.performance.now());
	for (var i = 0; i < addressPoints2.length; i++) {
		var a = addressPoints2[i];
		var speciesStr = new String(decodeParrot(a[2]));
		var occCnt = a[3];
		if (occCnt == "") {
			occCnt = 1;
		}
		var sourceDBStr = new String(decodeOrigS(a[7]));
		var countryStr = new String(decodeCountry(a[4]));
		var yearStr = new String(a[6].substr(6));
		if (mode) {
			if (checkFilterValues(a, speciesArr.length, sourceDBArr.length, stateArr.length, occValArr[0])) {//we have found a filter hit create the marker object and add it to the layer.											
				var title = 'Species: ' + decodeParrot(a[2]) + '<br>' + 'Observation Count: ' + occCnt + '<br>' + 'Country: ' + decodeCountry(a[4]) + '<br>' + 'Database: ' + decodeOrigS(a[7]) + '<br>' + 'Date: ' + a[6];
				var heatTitle = 'Density: ' + occCnt;
				var marker = L.marker(L.latLng(a[0], a[1]), { icon: innerFuncIconArr[(a[2])] });
				var markerheat = L.marker(L.latLng(a[0], a[1]));

				markerheat.bindLabel(heatTitle, { className: 'map-label', offset: [10, -15], pane: 'popupPane' });
				markerheat.riseOnHover = true;
				marker.bindLabel(title, { className: 'map-label', offset: [0, -130], pane: 'popupPane' });
				markerList.push(marker);
				heatMapList.push(markerheat);

				heatMapArr[loopcnt] = new Array();
				heatMapArr[loopcnt][0] = a[0];
				heatMapArr[loopcnt][1] = a[1];
				heatMapArr[loopcnt][2] = occCnt;
				loopcnt++;
			}
		}
		else {//mode switch to run filters only
			if (parseInt(yearVal) == parseInt(yearStr)) {
				var title = 'Species: ' + decodeParrot(a[2]) + '<br>' + 'Observation Count: ' + occCnt + '<br>' + 'Country: ' + decodeCountry(a[4]) + '<br>' + 'Database: ' + decodeOrigS(a[7]) + '<br>' + 'Date: ' + a[6];
				var marker = L.marker(L.latLng(a[0], a[1]), { icon: innerFuncIconArr[(a[2])] });
				marker.bindLabel(title, { className: 'map-label', offset: [0, -130], pane: 'popupPane' });
				markerList.push(marker);
				var heatTitle = 'Density: ' + occCnt;
				var markerheat = L.marker(L.latLng(a[0], a[1]));
				markerheat.bindLabel(heatTitle, { className: 'map-label', offset: [10, -15], pane: 'popupPane' });
				markerheat.riseOnHover = true;
				heatMapList.push(markerheat);
				heatMapArr[loopcnt] = new Array();
				heatMapArr[loopcnt][0] = a[0];
				heatMapArr[loopcnt][1] = a[1];
				heatMapArr[loopcnt][2] = occCnt;
				loopcnt++;
			}
		}
	}
	if (loopcnt != 0) {//some data has been returned			
		console.log("Markerlist Size: " + markerList.length);
		console.log("heatMapList Size: " + heatMapList.length);
		markers.addLayers(markerList);
		heatMap.addLayers(heatMapList);
		console.log('finished loading marker array: ' + window.performance.now());
		console.log('filtered ' + loopcnt + ' records');
		console.log('start clustering: ' + window.performance.now());
		console.log('size of markerlist is ' + markerList.length);
		try {//trying to nail down intermiitant exception here
			map.fitBounds(markers.getBounds());

			var heatMapTmp = [];

			heatMapTmp = heatMapArr.map(function (p) { return [p[0], p[1]]; });
			heat = L.heatLayer(heatMapArr, { radius: 6, blur: 8, maxZoom: 8 });
			//heatLayerGroup.addLayer(heat);
			//heatLayerGroup.addLayer(heatMapList);
			//heatMap.addLayers(heat);
			//heatMap.addLayers(markerList);

			//heatLayerGroup.addLayer(heat, true);
			//heatLayerGroup.addLayer(markerList);
			//heatLayerGroup.setZindex = 1000;
			//map.addLayer(heatLayerGroup).bringToFront();
			if (firstTime) {
				control.addOverlay(markers, 'Species Markers');
				control.addOverlay(heatMap, 'Heatmap Values');
				control.addOverlay(heat, 'Heatmap');
				map.addLayer(markers);
			}

			control.addTo(map);
			firstTime = false;
			console.log('end clustering: ' + window.performance.now());
			map.spin(false);//stop the spinner 
			//added
			var ztmp = map.getPanes();
			console.log("map panes: " + ztmp);
			//var ltemp = map.removeLayer(tiles);

		}
		catch (err) {
			console.log("Error is " + err);
			map.spin(false);//stop the spinner 
			window.alert("Something went wrong, please refresh the page and try again.");
		}
	}
	else {
		map.spin(false);//stop the spinner 
		window.alert('No records returned for the filter selection');
	}
}

function getSelectValues(select) {
	//get values from pull downs and fills supplied ararys.
	var result = [];
	var options = select && select.options;
	var opt;
	if (options != null) {
		for (var i = 0, iLen = options.length; i < iLen; i++) {
			opt = options[i];
			if (opt.selected) {
				result.push(opt.value || opt.text);
			}
		}
		//console.log('Filter:' + select  +  ' values ' + result);
		return result;
	}
}

function buildParrotLabel() {//format the source data in order to construct a label.


}



