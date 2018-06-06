/* global address storage */

const addressList = [
	{
		name: "John",
		surname: "Doe",
		address: "rue de la vie 333",
		phone: "336 829796"
	},
	{
		name: "Mary",
		surname: "Doe",
		address: "rue de la vie 336",
		phone: "336 8297965"
	}];

$(document).ready(function() {

	/* toggles */

	$("#addAddress").click(function() {
		$("#addPanel").toggle("slow", function() {
			$("#searchPanel").hide("slow");
	   		$("#removePanel").hide("slow");
	   		$("#showPanel").hide("slow")
	   	})
	});
	$("#showAddresses").click(function() {
	   	$("#showPanel").toggle("slow", function() {
	   		$("#searchPanel").hide("slow");
	   		$("#addPanel").hide("slow");
	   		$("#removePanel").hide("slow");
	   		showAddresses();
	   	})
	   	});

	$("#searchAddress").click(function() {
	   	$("#searchPanel").toggle("slow", function() {
	   		$("#removePanel").hide("slow");
	   		$("#addPanel").hide("slow");
	   		$("#showPanel").hide("slow");
	   	})
	});
	$("#removeAddress").click(function() {
	    	$("#removePanel").toggle("slow", function() {
	   		$("#searchPanel").hide("slow");
	   		$("#addPanel").hide("slow");
	   		$("#showPanel").hide("slow");
	   	})
	});

	/* data functions */

	$("#addCommand").click(function() {
		let contact = {
			name: $("#name").val(),
			surname: $("#surname").val(),
			address: $("#address").val(),
			phone: $("#phone").val()
		}
		if (contact.name !== "" && contact.surname !== "" && contact.address !== "" && contact.phone !== "" ) {
			$("#addPanel").append("<p>Contact was succesfully stored</p>");
			$("form").find("input").val('');
			addressList.push(contact);
		}
		else {
			return alert("Something is missing. Invalid address!")
		}
	});

	$("#searchCommand").click(function(){
		let searched = $("#searchBar").val();
		let empty = true;
		for (let i = 0; i < addressList.length; i++){
			if (searched === addressList[i].name ) {
				empty = false;
				$("#searchPanel").append("<p><b>name: </b>" + addressList[i].name + "<br><b>surname: </b>" + 
				addressList[i].surname + "<br><b>address: </b>" + addressList[i].address + "<br><b>phone: </b>" + 
				addressList[i].phone + "</p>");
			}
		}
		if (empty) {
			$("#searchPanel").append("<p>There seems to not be an address with this name yet.</p>")
		}
	});

	function showAddresses() {
		let showPanel = $("#showPanel");
		showPanel.empty();
		for (let i = 0; i < addressList.length; i++) {
			showPanel.append("<p><b>name: </b>" + addressList[i].name + "<br><b>surname: </b>" + 
			addressList[i].surname + "<br><b>address: </b>" + addressList[i].address + "<br><b>phone: </b>" + 
			addressList[i].phone + "</p><br>");
		}
		return showPanel;
	}

	$("#removeCommand").click(function(){
		let searched = $("#removeBar").val();
		for (let i = 0; i < addressList.length; i++){
			if (searched === addressList[i].name ) {
				$("#removePanel").append("<p>The following user was found and deleted: <br><b>name: </b>" + addressList[i].name + "<br><b>surname: </b>" + 
				addressList[i].surname + "<br><b>address: </b>" + addressList[i].address + "<br><b>phone: </b>" + 
				addressList[i].phone + "</p>");
				return addressList.splice(i, 1);
			}
		}
		return $("#removePanel").append("<p>There seems to not be an address with this name yet.</p>")
	});
});