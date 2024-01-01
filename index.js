let jsonData;

fetch("themes.json")
  .then(response => response.json())
  .then(data => {
    jsonData = data;
    console.log(jsonData);

    displayThemes();
  });

function displayThemes() {
  var toc = document.getElementById("tableOfContent");
  var themesListContainer = document.getElementById("themesList");

  jsonData.categories.forEach(function (category) {
    var tableOC = document.createElement("span");
    var tocItem = document.createElement("a");
    tocItem.setAttribute("href", "#" + category.categoryName);
    tocItem.setAttribute("class", "tocA");
    tocItem.textContent = category.categoryName;
    tableOC.appendChild(tocItem);

    var categoryHeading = document.createElement("h2");
    categoryHeading.setAttribute("class", "category");
    categoryHeading.setAttribute("id", category.categoryName);
    categoryHeading.textContent = "Type: " + category.categoryName;
    themesListContainer.appendChild(categoryHeading);

    var themeList = document.createElement("ol");

    category.themes.forEach(function (theme) {
      var listItem = document.createElement("li");
      var themeLink = document.createElement("a");
      var itemDesc = document.createElement("p");
      themeLink.textContent = theme.themeName;
      themeLink.href = theme.themeUrl;
      themeLink.target = "_blank";
      itemDesc.textContent = theme.themeDesc;

      listItem.appendChild(themeLink);
      themeList.appendChild(listItem);
      themeList.appendChild(itemDesc);
    });

    themesListContainer.appendChild(themeList);
    toc.appendChild(tableOC);
  });
}