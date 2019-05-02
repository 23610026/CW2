var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btnUnderGrad = document.getElementById("btnUnderGrad");
var btnPostGrad = document.getElementById("btnPostGrad");

btnUnderGrad.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/23610026/CW2/master/module-1.json');
  ourRequest.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
  };
  ourRequest.send();
pageCounter++;
if (pageCounter > 3){
//btn.classList.add("hide-me");
  btnUnderGrad.disabled = true;
}
});

btnPostGrad.addEventListener("click", function(){
  var ourRequest2 = new XMLHttpRequest();
  ourRequest2.open('GET', 'https://raw.githubusercontent.com/23610026/CW2/master/module-2.json');
  ourRequest2.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest2.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
  };
  ourRequest2.send();
pageCounter++;
if (pageCounter > 3){
//btn.classList.add("hide-me");
  btnPostGrad.disabled = true;
}
});

btnResearch.addEventListener("click", function(){
  var ourRequest3 = new XMLHttpRequest();
  ourRequest3.open('GET', 'https://raw.githubusercontent.com/23610026/CW2/master/module-3.json');
  ourRequest3.onload = function(){
    //console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest3.responseText);
    //console.log(ourData[0]);
    renderHTML(ourData);
  };
  ourRequest3.send();
pageCounter++;
if (pageCounter > 3){
//btn.classList.add("hide-me");
  btnResearch.disabled = true;
}
});

function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p> The " + data[i].Name + " (" + data[i].Code + ") " + data[i].Course + " degree programme has the Learning Outcomes ";
    for(ii = 0; ii < data[i].LearningOutcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].LearningOutcomes[ii];
      } else {
        htmlString += " and " + data[i].LearningOutcomes[ii] + ". ";
      }
    }

    htmlString += " It has four possible Exit Awards - ";
    for(ii = 0; ii < data[i].ExitAwards.length; ii++){
      if (ii == 0){
        htmlString += data[i].ExitAwards[ii];
      } else {
        htmlString += " / " + data[i].ExitAwards[ii];
      }
    }

    htmlString += ".";
    htmlString += " It is led by " + data[i].DegreeLeader + ". ";

    htmlString += "The (" + data[i].Module.IdentificationCode + ") " + data[i].Module.Name + " module has the assignments  ";
        for(ii = 0; ii < data[i].Module.Assignment.length; ii++){
          if (ii == 0){
            htmlString += data[i].Module.Assignment[ii];
          } else {
            htmlString += " and " + data[i].Module.Assignment[ii];
          }
        }

        htmlString += ' that follow the Learning Outcomes ';
        for(ii = 0; ii < data[i].Module.LearningOutcomes.length; ii++){
          if (ii == 0){
            htmlString += data[i].Module.LearningOutcomes[ii];
          } else {
            htmlString += " and " + data[i].Module.LearningOutcomes[ii];
          }
        }

        htmlString += ". These assignments are due on the " + data[i].Module.SubmissionDate + ". ";


        htmlString += ' They have word counts of ';
        for(ii = 0; ii < data[i].Module.Volume.length; ii++){
          if (ii == 0){
            htmlString += data[i].Module.Volume[ii];
          } else {
            htmlString += " and " + data[i].Module.Volume[ii];
          }
        }

        htmlString += ', weighting ';
        for(ii = 0; ii < data[i].Module.weights.length; ii++){
          if (ii == 0){
            htmlString += data[i].Module.weights[ii];
          } else {
            htmlString += " and " + data[i].Module.weights[ii];
          }
        }

       htmlString += ' towards the awarded module. This module is worth ' + data[i].Module.NumberOfCredits + ' credits in total towards the degree programme. The module is led by ' + data[i].Module.ModuleLeader + '. ';

        htmlString += 'The module has been scheduled for ';
        for(ii = 0; ii < data[i].Module.Day.length; ii++){
          if (ii == 0){
            htmlString += data[i].Module.Day[ii];
          } else {
            htmlString += " and " + data[i].Module.Day[ii];
          }
        }
        htmlString += " at " + data[i].Module.Time + " for " + data[i].Module.NumberOfHours + " hours in room " + data[i].Module.Room + " with " + data[i].Module.Tutor + ".";
}
  moduleContainer.insertAdjacentHTML('afterend', htmlString);

}
