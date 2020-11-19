$(document).ready(function() {
		console.log("page loaded");
		var index = 0;
		var items =0;
		var items =["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"];
		$(items).each(function(index) {

			var item = this;

			$("#"+item).click(
				function(e){

					console.log("Clicked!", e.currentTarget);
						$.ajax({
							url: 'connect_and_get.php',
							data: ({id: index}),
							dataType: 'json',
							success: function(data) {
								var id = data['id']
								var title = data['title'];
								var year = data['year'];
								var rating = data['Rating'];
								var runtime = data['runtime'];
								var stars = data['stars'];
								var oscar = data['oscar'];
								var info = data['info'];
								
								//update html content
								console.log(data);
								$("#viewPane").html("<p id = 'ajaxInfo'><b> Film: </b>"+title+"<br><b> Release Year: </b>"+year+"<br><b> Rating: </b>"+rating+"<br><b> Run-time: </b>"+runtime+"<br><b> Number of Stars: </b>"+stars+"<br><b> Oscar Nomination </b>"+oscar+"<br><b> Synopsis: </b>"+info+"<br></p>");
							}
						});
					}

			);

		});//end items


}); //end doc
