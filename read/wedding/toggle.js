// script from PPK site //

  var supported = (document.getElementById || document.all);
  if (supported)
  {
  document.write("<style type='text/css'>");
  document.write(".caption {display: none;} .caption p {display: block;}");
  document.write("<\/style>");

  var howManyCaptions = 2;
  var whichAreShown = new Array();
  for (i=1;i<=howManyCaptions;i++)
      {
      whichAreShown[i+1] = false;
      }

}

function showCap(i){
  whichAreShown[i] = (whichAreShown[i]) ? false : true;
  current = (whichAreShown[i]) ? 'block' : 'none';
          if (document.getElementById)
          {
          document.getElementById("cap_"+i).style.display = current;
          }
          else if (document.all)
          {
          document.all["cap_"+i].style.display = current;
          }
}

