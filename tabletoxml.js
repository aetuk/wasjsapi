/* This website and its content is copyright of Web and Server Solution - © Web and Server Solution 2012. All rights reserved.
Any redistribution or reproduction of part or all of the contents in any form is prohibited.
You may not, except with our express written permission, distribute or commercially exploit 
the content. Nor may you transmit it or store it in any other website or other 
form of electronic retrieval system.
 */

(function () {

	getCheckedRowsXml = function (htmltablename, xmltablename) {
		var xmltable = '';
		var xmlrow = '';
		var rows = document.getElementById(htmltablename).getElementsByTagName('tbody')[0].getElementsByTagName('tr');		
		for (var i = 1; i < rows.length; i++) {
		// Xml defined based on a ‘checked’ checkbox - Feel free to add your
		// criteria here to filter the data selected ( or not)

			if (rows[i].getElementsByTagName('td')[0].getElementsByTagName('input')[0].checked) {
			// here "i" is the row number if checked
				var cells = rows[i].getElementsByTagName('td');
		
				for (var c = 0; c < cells.length; c++) {
					// xmlrow = xmlrow + '
					// '+cells[c].id+'="'+cells[c].innerHTML+'"';
					xmlrow = xmlrow + '<' + cells[c].id + '>' + cells[c].innerHTML + '</' + cells[c].id + '>';
				}
		
			if (xmlrow != null)
			xmltable = xmltable + '<row>' + xmlrow + '</row>';
	
			xmlrow = '';
			}
		}
	
		if (xmltable != null)
		xmltable = '<' + xmltablename + '>' + xmltable + '</' + xmltablename + '>';
		return (xmltable);
	}
})();