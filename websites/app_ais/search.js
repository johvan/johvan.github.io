var add = function (title, content, date){
  var addContainerbody = document.createElement('DIV');
  addContainerbody.className = 'c-body';
  var addTitle = document.createElement('DIV');
  var titleText = document.createTextNode(title);
  addTitle.appendChild(titleText);
  addTitle.className = "title";
  var addContent = document.createElement('DIV');
  var contentText = document.createTextNode(content);
  addContent.appendChild(contentText);
  addContent.className = "content";
  var addDate = document.createElement('DIV');
  var dateText = document.createTextNode(date);
  addDate.appendChild(dateText);
  addDate.className = "date";
  addContainerbody.appendChild(addTitle);
  addContainerbody.appendChild(addContent);
  addContainerbody.appendChild(addDate);
  var container = document.getElementById('container');
  container.insertBefore(addContainerbody, container.childNodes[0]);
}



var passed = function (title2, content2, date2){
  var addContainerbody = document.createElement('DIV');
  addContainerbody.className = 'c-body2';
  var addTitle = document.createElement('DIV');
  var titleText = document.createTextNode(title2);
  addTitle.appendChild(titleText);
  addTitle.className = "title2";
  var addContent = document.createElement('DIV');
  var contentText = document.createTextNode(content2);
  addContent.appendChild(contentText);
  addContent.className = "content2";
  var addDate = document.createElement('DIV');
  var dateText = document.createTextNode(date2);
  addDate.appendChild(dateText);
  addDate.className = "date2";
  addContainerbody.appendChild(addTitle);
  addContainerbody.appendChild(addContent);
  addContainerbody.appendChild(addDate);
  var container = document.getElementById('container2');
  container.insertBefore(addContainerbody, container.childNodes[0]);
}


// function checkKey()
//     {
//         if (window.event.keyCode == 13)
//         {
//           var searchBox = document.getElementById('searchbox');
//
//         }
//     }
function search(){
  // var searchButton = prompt("Test")

if (window.event.keyCode == 13) {
  var searchBox = document.getElementById('searchbox');
  switch (searchBox.value) {
	   case 'Passed':
        passed("Graphic Design","Guest Speaker","Monday, November 24th, 1pm - 2pm")
      break;
    case 'Graphic':
        add("Graphic Design","Guest Speaker","Monday, November 15th, 1pm - 2pm")
      break;
    case 'Animation':
        add("Animation","Guest Speaker","Tuesday, November 15th, 1pm - 2pm")
      break;
    case 'Fashion':
        add("Fashion","Guest Speaker","Thursday, November 15th, 1pm - 2pm")
      break;
    case 'Gameing':
        add("Gameing","Guest Speaker","Friday, November 15th, 1pm - 2pm")
      break;
      default:
        alert("Try again. Sorry, you did not choose an option.");
        break;
      }
    }
  }
